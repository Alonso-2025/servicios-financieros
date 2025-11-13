'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Mail, CheckCircle } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/actions/submitContactForm'; // ✅ import server action

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      size="lg"
      className="w-full bg-background hover:bg-background/90 text-primary font-headline text-lg"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Enviando...
        </>
      ) : (
        <>
          <Mail className="mr-2 h-5 w-5" />
          Enviar Consulta
        </>
      )}
    </Button>
  );
}

type ContactFormState = {
  message: string;
  success: boolean;
  errors: Record<string, string[]> | null;
};

export default function Contact() {
  const initialState: ContactFormState = { message: '', success: false, errors: null };
  const [state, dispatch] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({ title: '¡Éxito!', description: state.message });
        formRef.current?.reset();
      } else {
        toast({ title: 'Error', description: state.message, variant: 'destructive' });
      }
    }
  }, [state, toast]);

  return (
    <section id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-4xl md:text-5xl">
              ¿Listo para Tomar el Control de sus Finanzas?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Dé el primer paso hacia la tranquilidad fiscal. Complete el formulario y uno de nuestros
              expertos se pondrá en contacto con usted para una consulta inicial sin compromiso.
              Su futuro financiero comienza aquí.
            </p>
            <div className="mt-8 space-y-4 text-primary-foreground/90">
              <div className="flex items-center gap-4">
                <CheckCircle className="h-6 w-6 text-accent" />
                <span>Asesoría 100% personalizada.</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle className="h-6 w-6 text-accent" />
                <span>Análisis profundo de su situación.</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle className="h-6 w-6 text-accent" />
                <span>Estrategias para maximizar ahorros.</span>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-2xl">
            <form ref={formRef} action={dispatch} className="space-y-6">
              {/* Honeypot field - hidden from humans, visible to bots */}
              <div className="hidden">
                <Input
                  id="honeypot"
                  name="honeypot"
                  type="text"
                  aria-hidden="true"
                  tabIndex={-1}
                  autoComplete="off"
                  placeholder="Leave this blank"
                />
              </div>

              <div>
                <Label htmlFor="name" className="text-card-foreground">
                  Nombre Completo
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Su Nombre"
                  className="mt-2 text-foreground"
                  required
                />
                {state.errors?.name && (
                  <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>
                )}
              </div>
              <div>
                <Label htmlFor="email" className="text-card-foreground">
                  Correo Electrónico
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="su@email.com"
                  className="mt-2 text-foreground"
                  required
                />
                {state.errors?.email && (
                  <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>
                )}
              </div>
              <div>
                <Label htmlFor="message" className="text-card-foreground">
                  Su Mensaje
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="¿Cómo podemos ayudarle?"
                  rows={4}
                  className="mt-2 text-foreground"
                  required
                />
                {state.errors?.message && (
                  <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>
                )}
              </div>
              <SubmitButton />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}