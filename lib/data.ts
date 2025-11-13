import { Landmark, Calculator, ShieldCheck, Scale, FileText, Briefcase } from 'lucide-react';

export const navigationLinks = [
  { href: '#services', label: 'Servicios' },
  { href: '#about', label: 'Nosotros' },
  { href: '#contact', label: 'Contacto' },
];

export const services = [
  {
    icon: Landmark,
    title: 'Consultoría Fiscal',
    description: 'Navegamos por el complejo panorama fiscal de México para optimizar su carga tributaria y asegurar el cumplimiento.',
  },
  {
    icon: Calculator,
    title: 'Planeación Financiera',
    description: 'Desarrollamos estrategias financieras personalizadas para ayudarle a alcanzar sus metas a corto y largo plazo.',
  },
  {
    icon: ShieldCheck,
    title: 'Auditoría y Cumplimiento',
    description: 'Ofrecemos servicios de auditoría para garantizar que sus finanzas estén en orden y cumplan con todas las regulaciones.',
  },
  {
    icon: Scale,
    title: 'Defensa Fiscal',
    description: 'Representamos y defendemos sus intereses ante las autoridades fiscales en caso de auditorías o litigios.',
  },
  {
    icon: FileText,
    title: 'Declaraciones de Impuestos',
    description: 'Preparamos y presentamos sus declaraciones de impuestos de manera precisa y oportuna, maximizando sus deducciones.',
  },
  {
    icon: Briefcase,
    title: 'Asesoría a Empresas',
    description: 'Brindamos asesoría integral para empresas, desde la constitución hasta la optimización de operaciones fiscales.',
  },
];

export const about = {
  mainImage: { imageUrl: '/images/about_us.webp', description: 'About Us Main Image' }, // Hardcoded; add imageHint back if needed in components
  title: 'Su Socio Estratégico en todo México',
  mission: 'Nuestra misión es proporcionar soluciones fiscales y confiables que impulsen el éxito y la tranquilidad de nuestros clientes en la dinámica economía de Tijuana.',
  story: 'A.V Soluciones Fiscales nació de la visión de crear una consultora que combinara un profundo conocimiento local con estándares de clase mundial. Nuestro equipo de expertos se dedica a construir relaciones duraderas basadas en la confianza, la integridad y resultados excepcionales.',
};

// Team, testimonials, and blog posts removed as per your updates