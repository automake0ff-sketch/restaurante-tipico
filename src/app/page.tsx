"use client";

import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [lang, setLang] = useState<"es" | "en" | "fr">("es");

  const t = {
    es: {
      explore: "Explorar carta",
      discover: "Descubrir Típico",
      waitlist: "Lista de espera",
      guide: "Food Guide IA",
      business: "Acceso Business",
      tagline: "SAME SAME BUT DIFFERENT",
      subtitle: "Barra de tapas en el corazón de Triana",
      address: "Pagés del Corro 86 · Triana, Sevilla",
      phone: "+34 955 70 49 41",
    },
    en: {
      explore: "Explore menu",
      discover: "Discover Típico",
      waitlist: "Waitlist",
      guide: "AI Food Guide",
      business: "Business Access",
      tagline: "SAME SAME BUT DIFFERENT",
      subtitle: "Tapas bar in the heart of Triana",
      address: "Pagés del Corro 86 · Triana, Seville",
      phone: "+34 955 70 49 41",
    },
    fr: {
      explore: "Explorer la carte",
      discover: "Découvrir Típico",
      waitlist: "Liste d'attente",
      guide: "Guide IA",
      business: "Accès Business",
      tagline: "SAME SAME BUT DIFFERENT",
      subtitle: "Bar à tapas au cœur de Triana",
      address: "Pagés del Corro 86 · Triana, Séville",
      phone: "+34 955 70 49 41",
    },
  }[lang];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="relative min-h-[85vh] flex flex-col justify-between overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#10100F]/70 via-[#10100F]/50 to-[#10100F]/90" />
        </div>

        <div className="relative z-10 flex items-center justify-between px-5 pt-6 md:px-10">
          <div className="text-[#F1EBDD] font-serif text-2xl tracking-tight">
            TÍPICO
          </div>
          <div className="flex items-center gap-3">
            {(["es", "en", "fr"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-xs uppercase tracking-widest px-2 py-1 rounded ${
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
          <p className="text-[#B89B69] text-sm tracking-[0.3em] uppercase mb-4">
            {t.tagline}
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-[#F1EBDD] leading-none mb-4">
            TÍPICO
          </h1>
          <p className="text-[#F1EBDD]/80 text-lg md:text-xl max-w-md mb-10">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
            <Link
              href="/carta"
              className="flex-1 bg-[#B89B69] text-[#10100F] font-medium py-3.5 px-6 rounded-lg text-center hover:bg-[#c4a97a] transition"
            >
              {t.explore}
            </Link>
            <Link
              href="/descubrir"
              className="flex-1 border border-[#F1EBDD]/40 text-[#F1EBDD] py-3.5 px-6 rounded-lg text-center hover:bg-[#F1EBDD]/10 transition"
            >
              {t.discover}
            </Link>
          </div>
        </div>

        <div className="relative z-10 px-6 pb-8 text-center">
          <p className="text-[#F1EBDD]/70 text-sm">{t.address}</p>
          <a
            href="tel:+34955704941"
            className="text-[#B89B69] text-sm mt-1 inline-block"
          >
            {t.phone}
          </a>
        </div>
      </header>

      <section className="bg-[#F1EBDD] px-5 py-10 md:px-10">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/carta"
            className="bg-white rounded-xl p-5 shadow-sm border border-[#77736B]/10 hover:border-[#B89B69]/40 transition text-center"
          >
            <div className="text-2xl mb-2">🍽️</div>
            <div className="font-medium text-sm">{t.explore}</div>
          </Link>
          <Link
            href="/guide"
            className="bg-white rounded-xl p-5 shadow-sm border border-[#77736B]/10 hover:border-[#B89B69]/40 transition text-center"
          >
            <div className="text-2xl mb-2">✨</div>
            <div className="font-medium text-sm">{t.guide}</div>
          </Link>
          <Link
            href="/waitlist"
            className="bg-white rounded-xl p-5 shadow-sm border border-[#77736B]/10 hover:border-[#B89B69]/40 transition text-center"
          >
            <div className="text-2xl mb-2">⏳</div>
            <div className="font-medium text-sm">{t.waitlist}</div>
          </Link>
          <Link
            href="/business"
            className="bg-[#171715] text-[#F1EBDD] rounded-xl p-5 shadow-sm hover:bg-[#10100F] transition text-center"
          >
            <div className="text-2xl mb-2">📊</div>
            <div className="font-medium text-sm">{t.business}</div>
          </Link>
        </div>
      </section>

      <footer className="bg-[#171715] text-[#F1EBDD]/60 px-6 py-8 text-center text-xs">
        <p className="mb-2">
          Típico Barra de Tapas · Pagés del Corro 86, Triana, Sevilla
        </p>
        <p className="mb-2">
          <a href="mailto:tipicotapas@gmail.com" className="hover:text-[#B89B69]">
            tipicotapas@gmail.com
          </a>
          {" · "}
          <a
            href="https://www.instagram.com/tipicobarradetapas/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#B89B69]"
          >
            @tipicobarradetapas
          </a>
        </p>
        <p className="mt-4 text-[#77736B]">
          TÍPICO EXPERIENCE + BUSINESS · Demo comercial · Datos de carta sujetos a
          confirmación oficial
        </p>
      </footer>
    </div>
  );
}
