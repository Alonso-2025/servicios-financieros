import Image from 'next/image';
import { about } from '@/lib/data';
import { Card } from '@/components/ui/card';

export default function About() {
  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-headline text-4xl md:text-5xl text-primary">
              {about.title}
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">{about.mission}</p>
            <p className="mt-6 text-base text-foreground/80">{about.story}</p>
          </div>

          <div className="order-1 md:order-2">
            <Card className="overflow-hidden shadow-lg">
              <Image
                src="/images/about_us.webp"
                alt="About Us"
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}