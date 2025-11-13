import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { services } from '@/lib/data';

export default function Services() {
  return (
    <section id="services" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-4xl md:text-5xl text-primary">Nuestros Servicios</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Ofrecemos un conjunto integral de servicios diseñados para optimizar su posición financiera y fiscal.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col text-center items-center p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary/50">
              <div className="bg-primary/10 rounded-full p-4 mb-4">
                 <service.icon className="h-8 w-8 text-primary" />
              </div>
              <CardHeader className="p-0">
                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-base text-muted-foreground">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
