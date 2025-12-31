import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Linkedin, Facebook, Mail, Phone } from 'lucide-react';
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

          {/* ✅ Contact and navigation sections */}
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-headline text-lg font-medium text-foreground">
                Contacto
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href="mailto:info@servicios-fiscales.com"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    info@servicios-fiscales.com
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contacto@servicios-fiscales.com"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    contacto@servicios-fiscales.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+526646106579"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    +52 664 610 6579
                  </a>
                </li>
              </ul>
            </div>

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
          &copy; {year} A.V Servicios Fiscales. Todos los derechos reservados.| Designed by{' '}
          <a
            href="https://codevostudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors underline"
          >
            Codevostudio
          </a>
          .
        </div>
      </div>
    </footer>
  );
}
