"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(prevState: any, formData: FormData) {
  // Honeypot (bot protection)
  const honeypot = formData.get("honeypot")?.toString().trim()
  if (honeypot) {
    return {
      success: false,
      message: "Submission rejected (bot detected).",
      errors: null,
    }
  }

  const name = formData.get("name")?.toString().trim()
  const email = formData.get("email")?.toString().trim()
  const message = formData.get("message")?.toString().trim()

  const errors: Record<string, string[]> = {}
  if (!name) errors.name = ["Campo requerido"]
  if (!email) errors.email = ["Campo requerido"]
  if (!message) errors.message = ["Campo requerido"]

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (email && !emailRegex.test(email)) {
    errors.email = ["Correo inválido"]
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Por favor complete todos los campos correctamente.",
      errors,
    }
  }

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.RESEND_TO_EMAIL || "delivered@resend.dev",
      subject: `Nueva consulta de contacto: ${name}`,
      replyTo: email,
      html: `
        <h2>Nuevo mensaje desde tu sitio web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `,
    })

    return {
      success: true,
      message: "¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.",
      errors: null,
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "Error al enviar el mensaje. Intente más tarde.",
      errors: null,
    }
  }
}
