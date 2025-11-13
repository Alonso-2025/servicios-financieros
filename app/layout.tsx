import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "Tijuana Fiscal Solutions",
  description:
    "Soluciones de consultoría fiscal y financiera en Baja California. Planificación fiscal con IA, testimonios de éxito y más.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={cinzel.variable}>
      <body className="font-body cinzel">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
