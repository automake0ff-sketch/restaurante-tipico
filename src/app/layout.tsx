import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Típico Experience | Barra de Tapas · Triana, Sevilla",
  description:
    "SAME SAME BUT DIFFERENT. Carta digital, recomendaciones IA y experiencia personalizada de Típico Barra de Tapas en Triana, Sevilla.",
  openGraph: {
    title: "Típico Experience",
    description: "La experiencia digital de Típico Barra de Tapas · Triana",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
