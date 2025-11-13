import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center p-0">
      {/* Background Image */}
      <Image
        src="/images/header_image.png"
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />

      {/* Brand Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-80 mix-blend-multiply"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl drop-shadow-lg">
          Claridad Fiscal, Crecimiento Exponencial
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl drop-shadow-md">
          Expertos en consultoría fiscal y financiera en Baja California y todo México, guiándole hacia la prosperidad y el cumplimiento.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a href="#services">
            <Button size="lg" variant="secondary" className="font-headline text-lg bg-white/90 text-primary hover:bg-white">
              Nuestros Servicios
            </Button>
          </a>

          <a href="#contact">
            <Button size="lg" className="font-headline text-lg bg-accent hover:bg-accent/90 text-accent-foreground">
              Agendar Consulta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
