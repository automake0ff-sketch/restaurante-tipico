"use client";

import Link from "next/link";
import { useState } from "react";

const copy = {
  es: {
    explore: "Explorar carta",
    discover: "Descubrir Típico",
    waitlist: "Lista de espera",
    guide: "Guía gastronómica",
    business: "Business",
    tagline: "SAME SAME BUT DIFFERENT",
    subtitle: "Barra de tapas en el corazón de Triana",
    address: "Pagés del Corro 86 · Triana, Sevilla",
    phone: "+34 955 70 49 41",
    editorial:
      "Cocina española y andaluza que combina tradición y propuestas contemporáneas. Una barra para compartir, descubrir y repetir.",
    reputation: "Valoraciones en Tripadvisor y presencia en Triana",
    instagram: "Instagram",
    tripadvisor: "Tripadvisor",
  },
  en: {
    explore: "Explore menu",
    discover: "Discover Típico",
    waitlist: "Waitlist",
    guide: "Food guide",
    business: "Business",
    tagline: "SAME SAME BUT DIFFERENT",
    subtitle: "Tapas bar in the heart of Triana",
    address: "Pagés del Corro 86 · Triana, Seville",
    phone: "+34 955 70 49 41",
    editorial:
      "Spanish and Andalusian cooking that blends tradition with contemporary ideas. A bar to share, discover and come back to.",
    reputation: "Tripadvisor ratings and presence in Triana",
    instagram: "Instagram",
    tripadvisor: "Tripadvisor",
  },
  fr: {
    explore: "Explorer la carte",
    discover: "Découvrir Típico",
    waitlist: "Liste d'attente",
    guide: "Guide gastronomique",
    business: "Business",
    tagline: "SAME SAME BUT DIFFERENT",
    subtitle: "Bar à tapas au cœur de Triana",
    address: "Pagés del Corro 86 · Triana, Séville",
    phone: "+34 955 70 49 41",
    editorial:
      "Cuisine espagnole et andalouse alliant tradition et idées contemporaines. Un bar pour partager, découvrir et revenir.",
    reputation: "Notes Tripadvisor et présence à Triana",
    instagram: "Instagram",
    tripadvisor: "Tripadvisor",
  },
} as const;

export default function HomePage() {
  const [lang, setLang] = useState<"es" | "en" | "fr">("es");
  const t = copy[lang];

  return (
    <div className="min-h-screen flex flex-col bg-[#F1EBDD]">
      {/* Hero */}
      <header className="relative min-h-[88vh] flex flex-col justify-between overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#10100F]/75 via-[#10100F]/55 to-[#10100F]/92" />
        </div>

        <div className="relative z-10 flex items-center justify-between px-5 pt-6 md:px-10">
          <div className="text-[#F1EBDD] font-serif text-2xl tracking-tight">TÍPICO</div>
          <div className="flex items-center gap-2">
            {(["es", "en", "fr"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-xs uppercase tracking-widest px-2.5 py-1 rounded ${
                  lang === l
                    ? "bg-[#B89B69] text-[#10100F]"
                    : "text-[#F1EBDD]/80 hover:text-[#F1EBDD]"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-[#B89B69] text-xs md:text-sm tracking-[0.35em] uppercase mb-5">
            {t.tagline}
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-[#F1EBDD] leading-none mb-4">
            TÍPICO
          </h1>
          <p className="text-[#F1EBDD]/85 text-lg md:text-xl max-w-md mb-3">{t.subtitle}</p>
          <p className="text-[#F1EBDD]/60 text-sm max-w-sm mb-10 leading-relaxed">
            {t.editorial}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
            <Link
              href="/carta"
              className="flex-1 bg-[#B89B69] text-[#10100F] font-medium py-3.5 px-6 rounded-lg text-center hover:bg-[#c4a97a]"
            >
              {t.explore}
            </Link>
            <Link
              href="/descubrir"
              className="flex-1 border border-[#F1EBDD]/35 text-[#F1EBDD] py-3.5 px-6 rounded-lg text-center hover:bg-[#F1EBDD]/10"
            >
              {t.discover}
            </Link>
          </div>
        </div>

        <div className="relative z-10 px-6 pb-8 text-center space-y-1">
          <p className="text-[#F1EBDD]/70 text-sm">{t.address}</p>
          <a href="tel:+34955704941" className="text-[#B89B69] text-sm inline-block">
            {t.phone}
          </a>
          <p className="text-[10px] text-[#F1EBDD]/40 pt-2">
            Imagen ilustrativa · no es fotografía oficial del local
          </p>
        </div>
      </header>

      {/* Quick actions */}
      <section className="px-5 py-10 md:px-10">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { href: "/carta", label: t.explore, icon: "01" },
            { href: "/guide", label: t.guide, icon: "02" },
            { href: "/waitlist", label: t.waitlist, icon: "03" },
            { href: "/business", label: t.business, icon: "04" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="bg-white rounded-xl p-5 border border-[#77736B]/12 hover:border-[#B89B69]/45 transition group"
            >
              <div className="text-[10px] tracking-widest text-[#B89B69] mb-2">{item.icon}</div>
              <div className="font-medium text-sm text-[#171715] group-hover:text-[#10100F]">
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Social & reputation */}
      <section className="px-5 pb-12 md:px-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#77736B]/12 p-6 md:p-8">
          <p className="text-xs tracking-widest uppercase text-[#B89B69] mb-3">
            {t.reputation}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
            <p className="text-sm text-[#77736B] max-w-md leading-relaxed">
              Consulta opiniones recientes y el perfil público del establecimiento. Los datos de
              reputación deben verificarse en las plataformas oficiales.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/tipicobarradetapas/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#171715] text-[#F1EBDD] text-sm"
              >
                {t.instagram}
              </a>
              <a
                href="https://www.tripadvisor.es/Restaurant_Review-g187443-d13564282-Reviews-Tipico_Barra_De_Tapas-Seville_Province_of_Seville_Andalucia.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#77736B]/25 text-[#171715] text-sm"
              >
                {t.tripadvisor}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#171715] text-[#F1EBDD]/55 px-6 py-10 text-center text-xs">
        <p className="font-serif text-[#F1EBDD] text-lg mb-2">TÍPICO</p>
        <p className="mb-1">Barra de Tapas · Pagés del Corro 86, Triana, Sevilla</p>
        <p className="mb-3">
          <a href="mailto:tipicotapas@gmail.com" className="hover:text-[#B89B69]">
            tipicotapas@gmail.com
          </a>
          {" · "}
          <a href="tel:+34955704941" className="hover:text-[#B89B69]">
            +34 955 70 49 41
          </a>
        </p>
        <p className="text-[#77736B] max-w-md mx-auto leading-relaxed">
          TÍPICO EXPERIENCE + BUSINESS · Demo comercial · Carta y precios sujetos a confirmación
          oficial del establecimiento
        </p>
      </footer>
    </div>
  );
}
