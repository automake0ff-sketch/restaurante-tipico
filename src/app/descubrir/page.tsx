"use client";

import Link from "next/link";

export default function DescubrirPage() {
  return (
    <div className="min-h-screen bg-[#F1EBDD]">
      <header className="bg-[#171715] text-[#F1EBDD] px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl">TÍPICO</Link>
        <h1 className="text-sm tracking-widest uppercase">Descubrir</h1>
        <Link href="/carta" className="text-[#B89B69] text-sm">Carta</Link>
      </header>

      <div className="max-w-2xl mx-auto px-5 py-10 space-y-8">
        <div>
          <p className="text-[#B89B69] text-sm tracking-[0.2em] uppercase mb-2">SAME SAME BUT DIFFERENT</p>
          <h2 className="font-serif text-3xl mb-4">Barra de tapas en Triana</h2>
          <p className="text-[#77736B] leading-relaxed">
            Típico Barra de Tapas se encuentra en Pagés del Corro 86, en el corazón de Triana, Sevilla.
            Cocina española y andaluza que combina tradición y propuestas contemporáneas.
            La información de horarios, precios y carta detallada debe confirmarse directamente con el establecimiento.
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-[#77736B]/10 space-y-3">
          <h3 className="font-medium">Contacto</h3>
          <p className="text-sm">
            <strong>Dirección:</strong> Calle Pagés del Corro 86, 41010 Sevilla (Triana)
          </p>
          <p className="text-sm">
            <strong>Teléfono:</strong>{" "}
            <a href="tel:+34955704941" className="text-[#B89B69]">+34 955 70 49 41</a>
          </p>
          <p className="text-sm">
            <strong>Email:</strong>{" "}
            <a href="mailto:tipicotapas@gmail.com" className="text-[#B89B69]">tipicotapas@gmail.com</a>
          </p>
          <p className="text-sm">
            <strong>Instagram:</strong>{" "}
            <a href="https://www.instagram.com/tipicobarradetapas/" target="_blank" rel="noopener noreferrer" className="text-[#B89B69]">
              @tipicobarradetapas
            </a>
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-[#77736B]/10">
          <h3 className="font-medium mb-2">Horarios</h3>
          <p className="text-sm text-[#77736B]">
            Los horarios publicados en directorios varían (apertura alrededor de 13:00, cierre hasta 00:00 en varios días).
            <strong> Pendiente de confirmación oficial.</strong> Consulta Instagram o llama antes de visitar.
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900">
          Esta es una demostración comercial de la plataforma TÍPICO EXPERIENCE + BUSINESS.
          No sustituye la información oficial del restaurante. Fotografías de stock utilizadas como recursos provisionales.
        </div>

        <Link
          href="/carta"
          className="block text-center bg-[#B89B69] text-[#10100F] font-medium py-3.5 rounded-lg"
        >
          Ver la carta digital
        </Link>
      </div>
    </div>
  );
}
