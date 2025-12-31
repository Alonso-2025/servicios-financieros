import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Cinzel } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import WhatsAppFAB from "@/components/WhatsappFab";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cinzel",
});

// Enhanced SEO Metadata for bilingual targeting
export const metadata: Metadata = {
  // Primary Title - Bilingual with key search terms
  title: "Tax Services Tijuana | SAT Help for Americans | Servicios Fiscales para Residentes USA en México",
  
  // Description optimized for both languages and target audience
  description:
    "Expert SAT tax services in Tijuana for US citizens & residents living in Mexico. Asesoría fiscal SAT para americanos en Tijuana. Cross-border tax compliance, Mexican tax filing, fiscal planning. Serving Baja California expats since 2015. ✓ Bilingual support ✓ IRS & SAT expertise",
  
  // Keywords targeting both markets
  keywords: [
    // English keywords
    "SAT tax help Tijuana",
    "tax services for Americans in Tijuana",
    "US expat tax Mexico",
    "cross-border tax accountant Tijuana",
    "Mexican tax compliance for Americans",
    "SAT filing assistance Tijuana",
    "expat fiscal services Baja California",
    "IRS and SAT tax help",
    "American tax consultant Tijuana",
    "Tijuana tax attorney",
    "RFC registration for foreigners",
    "ITIN and RFC services",
    // Spanish keywords
    "servicios fiscales Tijuana",
    "contador para americanos Tijuana",
    "asesoría SAT Baja California",
    "declaración de impuestos Tijuana",
    "problemas con el SAT Tijuana",
    "consultor fiscal bilingüe",
    "auditoría SAT defensa",
    "planeación fiscal internacional",
    "contador público Tijuana",
    "representante autorizado SAT",
  ],
  
  // Authors and publisher
  authors: [{ name: "A.V. Soluciones Fiscales" }],
  creator: "A.V. Soluciones Fiscales",
  publisher: "A.V. Soluciones Fiscales",
  
  // Geo-targeting for Tijuana/Baja California region
  other: {
    "geo.region": "MX-BCN",
    "geo.placename": "Tijuana",
    "geo.position": "32.5149;-117.0382",
    "ICBM": "32.5149, -117.0382",
    "language": "es, en",
    "target-audience": "US citizens in Mexico, expats, cross-border workers, Americans in Tijuana",
  },
  
  // Open Graph for social sharing - Bilingual
  openGraph: {
    type: "website",
    locale: "es_MX",
    alternateLocale: ["en_US"],
    url: "https://servicios-fiscales.com/",
    siteName: "A.V. Soluciones Fiscales - Tijuana Tax Services",
    title: "SAT Tax Help for Americans in Tijuana | Expert Fiscal Services",
    description:
      "Bilingual SAT & IRS tax services for US citizens living in Tijuana, Baja California. Expert help with Mexican tax compliance, cross-border issues, and fiscal planning.",
    images: [
      {
        url: "https://servicios-fiscales.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "A.V. Soluciones Fiscales - Tax Services for Americans in Tijuana",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "SAT Tax Services for Americans in Tijuana | Bilingual Support",
    description:
      "Expert Mexican tax help for US expats. IRS & SAT compliance, RFC registration, cross-border tax planning in Tijuana.",
    images: ["https://servicios-fiscales.com/images/og-image.jpg"],
  },
  
  // Verification and ownership
  verification: {
    google: "gP9GKT3j9zTKb4XzBbHjcva-lpR7ihUBd2ZXRuFMUDs",
  },
  
  // Canonical and alternates
  alternates: {
    canonical: "https://servicios-fiscales.com/",
    languages: {
      "es-MX": "https://servicios-fiscales.com/",
      "en-US": "https://servicios-fiscales.com/en",
    },
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Additional meta
  category: "Financial Services",
};

// JSON-LD Structured Data Generator
function generateStructuredData() {
  // LocalBusiness Schema (without Google My Business requirement)
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://servicios-fiscales.com/#organization",
    name: "A.V. Soluciones Fiscales",
    alternateName: "A.V. Tax Services Tijuana",
    description:
      "Bilingual tax and fiscal consulting services for Americans and US residents living in Tijuana and Baja California. Expert SAT compliance, IRS support, and cross-border tax planning.",
    url: "https://servicios-fiscales.com/",
    logo: "https://servicios-fiscales.com/images/AV_Logo.png",
    image: "https://servicios-fiscales.com/images/header_image.png",
    
    // Service Area (without physical address since no GMB)
    areaServed: [
      {
        "@type": "City",
        name: "Tijuana",
        "@id": "https://www.wikidata.org/wiki/Q124739",
      },
      {
        "@type": "State",
        name: "Baja California",
        "@id": "https://www.wikidata.org/wiki/Q58731",
      },
      {
        "@type": "Country",
        name: "Mexico",
        "@id": "https://www.wikidata.org/wiki/Q96",
      },
    ],
    
    // Contact information
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+52-664-610-6579", // ← REPLACE with your actual phone number
      email: "info@servicios-fiscales.com", // ← REPLACE with your actual email
      availableLanguage: ["Spanish", "English"],
      areaServed: ["MX", "US"],
    },
    
    // Services offered
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tax and Fiscal Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SAT Tax Filing for Americans in Mexico",
            description:
              "Complete SAT tax filing and compliance services for US citizens and residents living in Mexico",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cross-Border Tax Planning",
            description:
              "Strategic tax planning for individuals and businesses operating between USA and Mexico",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "RFC Registration and ITIN Services",
            description:
              "Help with RFC (Mexican tax ID) registration and ITIN applications for foreign residents",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SAT Audit Defense",
            description:
              "Legal representation and defense services for SAT audits and tax disputes",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Tax Consulting",
            description:
              "Comprehensive fiscal advisory for businesses in Tijuana and Baja California",
          },
        },
      ],
    },
    
    // Slogan
    slogan: "Claridad Fiscal, Crecimiento Exponencial",
    
    // Opening hours (adjust as needed)
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    
    // Price range
    priceRange: "$$",
    
    // Languages
    knowsLanguage: ["es", "en"],
  };

  // FAQ Schema - Common questions from Americans about SAT
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need to file taxes with SAT as a US citizen living in Tijuana?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, if you are a resident of Mexico (living in Mexico for more than 183 days in a calendar year), you are required to register with SAT and file Mexican tax returns. This applies to US citizens and all foreign residents. Our bilingual team can help you navigate both SAT and IRS requirements.",
        },
      },
      {
        "@type": "Question",
        name: "What is RFC and how do I get one in Tijuana?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RFC (Registro Federal de Contribuyentes) is your Mexican tax ID number, similar to a Social Security Number. All tax residents in Mexico need an RFC to file taxes, open bank accounts, and conduct official business. We assist Americans and foreign residents with RFC registration in Tijuana.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help with both US and Mexican tax compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we specialize in cross-border tax issues for Americans living in Mexico. We help with SAT compliance in Mexico while coordinating with IRS requirements, including FBAR filings, Foreign Earned Income Exclusion, and tax treaty benefits between USA and Mexico.",
        },
      },
      {
        "@type": "Question",
        name: "What should I do if I receive an audit notice from SAT?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Do not ignore SAT audit notices. Contact us immediately for bilingual representation. We provide complete audit defense services, including document preparation, legal representation, and communication with SAT authorities on your behalf.",
        },
      },
      {
        "@type": "Question",
        name: "How much do fiscal services cost in Tijuana for expats?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Costs vary based on your specific situation. We offer a free initial consultation to assess your needs. Services range from basic tax filing to comprehensive cross-border planning. Contact us for a personalized quote in English or Spanish.",
        },
      },
    ],
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://servicios-fiscales.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://servicios-fiscales.com/#services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "About",
        item: "https://servicios-fiscales.com/#about",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: "https://servicios-fiscales.com/#contact",
      },
    ],
  };

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://servicios-fiscales.com/#website",
    url: "https://servicios-fiscales.com/",
    name: "A.V. Soluciones Fiscales - Tax Services for Americans in Tijuana",
    description:
      "Expert SAT and IRS tax services for US citizens living in Tijuana, Mexico",
    inLanguage: ["es-MX", "en-US"],
    potentialAction: {
      "@type": "SearchAction",
      target: "https://servicios-fiscales.com/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return {
    localBusiness,
    faqSchema,
    breadcrumbSchema,
    websiteSchema,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = generateStructuredData();

  return (
    <html lang="es" className={cinzel.variable}>
      <head>
        {/* Additional meta tags for enhanced SEO */}
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta httpEquiv="Content-Language" content="es, en" />
        
        {/* Geo-targeting meta tags */}
        <meta name="geo.region" content="MX-BCN" />
        <meta name="geo.placename" content="Tijuana" />
        <meta name="geo.position" content="32.5149;-117.0382" />
        <meta name="ICBM" content="32.5149, -117.0382" />
        
        {/* Hreflang tags for bilingual content */}
        <link rel="alternate" hrefLang="es-MX" href="https://servicios-fiscales.com/" />
        <link rel="alternate" hrefLang="en-US" href="https://servicios-fiscales.com/en" />
        <link rel="alternate" hrefLang="x-default" href="https://servicios-fiscales.com/" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.localBusiness),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.breadcrumbSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.websiteSchema),
          }}
        />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#1a1a1a" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#1a1a1a" />
      </head>
      <body className="font-body cinzel">
        {children}
        <WhatsAppFAB />
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}