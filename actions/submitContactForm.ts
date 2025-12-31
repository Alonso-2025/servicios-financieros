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
      subject: `📩 Nueva Consulta de Contacto - ${name}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nueva Consulta de Contacto</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
          <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f4f4f4; padding: 20px 0;">
            <tr>
              <td align="center">
                <!-- Main Container -->
                <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

                  <!-- Header with Brand Colors -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); padding: 40px 30px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 300; letter-spacing: 1px;">
                        A.V. SOLUCIONES FISCALES
                      </h1>
                      <p style="margin: 10px 0 0 0; color: #d4af37; font-size: 14px; font-style: italic; letter-spacing: 0.5px;">
                        Claridad Fiscal, Crecimiento Exponencial
                      </p>
                    </td>
                  </tr>

                  <!-- Alert Banner -->
                  <tr>
                    <td style="background-color: #d4af37; padding: 15px 30px; border-left: 5px solid #b8941f;">
                      <p style="margin: 0; color: #1a1a1a; font-size: 16px; font-weight: 600;">
                        🔔 Nueva Consulta Recibida
                      </p>
                    </td>
                  </tr>

                  <!-- Content Section -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h2 style="margin: 0 0 25px 0; color: #1a1a1a; font-size: 22px; font-weight: 600; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">
                        Información del Cliente
                      </h2>

                      <!-- Client Info Table -->
                      <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                            <table role="presentation" style="width: 100%;">
                              <tr>
                                <td style="width: 30%; color: #666666; font-size: 14px; font-weight: 600;">
                                  👤 Nombre:
                                </td>
                                <td style="color: #1a1a1a; font-size: 15px; font-weight: 500;">
                                  ${name}
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                            <table role="presentation" style="width: 100%;">
                              <tr>
                                <td style="width: 30%; color: #666666; font-size: 14px; font-weight: 600;">
                                  📧 Email:
                                </td>
                                <td style="color: #1a1a1a; font-size: 15px;">
                                  <a href="mailto:${email}" style="color: #d4af37; text-decoration: none; font-weight: 500;">
                                    ${email}
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0;">
                            <table role="presentation" style="width: 100%;">
                              <tr>
                                <td style="width: 30%; color: #666666; font-size: 14px; font-weight: 600; vertical-align: top; padding-top: 3px;">
                                  📅 Fecha:
                                </td>
                                <td style="color: #1a1a1a; font-size: 15px;">
                                  ${new Date().toLocaleDateString('es-MX', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                  })}
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>

                      <!-- Message Section -->
                      <h3 style="margin: 30px 0 15px 0; color: #1a1a1a; font-size: 18px; font-weight: 600; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">
                        💬 Mensaje
                      </h3>
                      <div style="background-color: #f9f9f9; border-left: 4px solid #d4af37; padding: 20px; border-radius: 4px; margin-bottom: 30px;">
                        <p style="margin: 0; color: #333333; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">
${message}
                        </p>
                      </div>

                      <!-- Quick Action Button -->
                      <table role="presentation" style="width: 100%; margin-top: 30px;">
                        <tr>
                          <td align="center">
                            <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #d4af37 0%, #b8941f 100%); color: #ffffff; text-decoration: none; padding: 14px 35px; border-radius: 5px; font-size: 15px; font-weight: 600; letter-spacing: 0.5px; box-shadow: 0 3px 6px rgba(212, 175, 55, 0.3);">
                              Responder al Cliente
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #1a1a1a; padding: 30px; text-align: center;">
                      <p style="margin: 0 0 10px 0; color: #d4af37; font-size: 16px; font-weight: 600;">
                        A.V. Soluciones Fiscales
                      </p>
                      <p style="margin: 0 0 15px 0; color: #999999; font-size: 13px; line-height: 1.5;">
                        Servicios Fiscales para Americanos en Tijuana<br/>
                        Tax Services for Americans in Tijuana
                      </p>
                      <table role="presentation" style="margin: 0 auto;">
                        <tr>
                          <td style="padding: 0 10px;">
                            <a href="mailto:contacto@servicios-fiscales.com" style="color: #d4af37; text-decoration: none; font-size: 13px;">
                              📧 contacto@servicios-fiscales.com
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 5px 10px 0 10px;">
                            <a href="https://servicios-fiscales.com" style="color: #d4af37; text-decoration: none; font-size: 13px;">
                              🌐 servicios-fiscales.com
                            </a>
                          </td>
                        </tr>
                      </table>
                      <p style="margin: 20px 0 0 0; color: #666666; font-size: 11px; line-height: 1.4;">
                        Este es un mensaje automático generado desde el formulario de contacto<br/>
                        de tu sitio web. No responder a este correo.
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
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
