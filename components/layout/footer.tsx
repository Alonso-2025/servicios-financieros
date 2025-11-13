import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ✅ Logo with explicit size (no fill) */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/AV_Logo.png"
                alt="AV Logo"
                width={200}
                height={100}
                priority
                className="object-contain object-left"
              />
            </Link>
          </div>

          {/* ✅ Navigation and social sections */}
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-headline text-lg font-medium text-foreground">
                Navegación
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-headline text-lg font-medium text-foreground">
                Legal
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Aviso de Privacidad
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Términos de Servicio
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-headline text-lg font-medium text-foreground">
                Síganos
              </h3>
              <div className="flex mt-4 space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="#">
                    <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="#">
                    <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="#">
                    <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          &copy; {year} A.V Servicios Fiscales. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
