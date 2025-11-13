'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navigationLinks } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    isScrolled ? 'bg-card/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
  );

  return (
    <header className="relative w-full overflow-hidden">
      {/* Header background */}
      <div
        className="absolute inset-0 -z-10 h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/header_image.png')" }}
      />

      <div className={navClasses}>
        {/* Give the bar more headroom so the bigger logo actually fits */}
        <div className="container mx-auto flex h-28 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* LOGO: hard dimensions, no fill, no shrink, kill any max-height */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/AV_Logo.png"
              alt="AV Logo"
              width={280}              // raster size for Next optimizer
              height={110}             // aspect helper; we override visual height below
              priority
              sizes="280px"            // force final CSS width at desktop
              className="block object-contain object-center max-h-none"
              style={{ width: 147, height: 'auto' }}  // override any global img rules
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-6 font-headline">
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href} passHref>
                <Button
                  variant="link"
                  className="text-foreground/80 hover:text-primary transition-colors font-headline text-base"
                >
                  <span className="font-headline">{link.label}</span>
                </Button>
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <a href="#contact">
              <Button
                variant="default"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-headline"
              >
                <span className="font-headline">Obtener Consulta</span>
              </Button>
            </a>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full bg-card">
                <div className="flex h-full flex-col justify-between p-6 font-headline">
                  <div className="flex flex-col items-center space-y-6">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="shrink-0">
                      <Image
                        src="/images/AV_Logo.png"
                        alt="AV Logo"
                        width={200}
                        height={72}
                        sizes="200px"
                        className="block object-contain object-center max-h-none"
                        style={{ width: 200, height: 'auto' }}
                        priority
                      />
                    </Link>

                    {navigationLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        passHref
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Button variant="link" className="text-xl text-foreground font-headline">
                          <span className="font-headline">{link.label}</span>
                        </Button>
                      </Link>
                    ))}
                  </div>

                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button
                      variant="default"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-headline"
                    >
                      <span className="font-headline">Obtener Consulta</span>
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
