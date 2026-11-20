"use client";

import Link from "next/link";

export default function DescubrirPage() {
  return (
    <div className="min-h-screen bg-[#F1EBDD]">
      <header className="bg-[#171715] text-[#F1EBDD] px-4 py-4 flex items-center justify-between sticky top-0 z-20">
        <Link href="/" className="font-serif text-xl tracking-tight">
          TÍPICO
        </Link>
        <h1 className="text-sm tracking-widest uppercase">Descubrir</h1>
        <Link href="/carta" className="text-[#B89B69] text-sm">
          Carta
        </Link>
      </header>

      <article className="max-w-2xl mx-auto px-5 py-10 space-y-10">
        <header>
          <p className="text-[#B89B69] text-xs tracking-[0.25em] uppercase mb-3">
            SAME SAME BUT DIFFERENT
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mb-4 leading-tight">
            Barra de tapas en Triana
          </h2>
          <p className="text-[#77736B] leading-relaxed">
            Típico Barra de Tapas se encuentra en Pagés del Corro 86, en el barrio de Triana,
            Sevilla. La propuesta gira en torno a la cocina española y andaluza, con un equilibrio
            entre clásicos reconocibles y elaboraciones contemporáneas. Esta página recoge solo
            información pública verificable; horarios, precios y carta detallada deben confirmarse
            con el establecimiento.
          </p>
        </header>

        <section className="bg-white rounded-2xl p-6 border border-[#77736B]/12 space-y-4">
          <h3 className="font-serif text-xl">Contacto y ubicación</h3>
          <dl className="text-sm space-y-3">
            <div>
              <dt className="text-[#77736B] text-xs uppercase tracking-wide">Dirección</dt>
              <dd className="mt-0.5">Calle Pagés del Corro 86, 41010 Sevilla (Triana)</dd>
            </div>
            <div>
              <dt className="text-[#77736B] text-xs uppercase tracking-wide">Teléfono</dt>
              <dd className="mt-0.5">
                <a href="tel:+34955704941" className="text-[#B89B69]">
                  +34 955 70 49 41
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[#77736B] text-xs uppercase tracking-wide">Email</dt>
              <dd className="mt-0.5">
                <a href="mailto:tipicotapas@gmail.com" className="text-[#B89B69]">
                  tipicotapas@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[#77736B] text-xs uppercase tracking-wide">Instagram</dt>
              <dd className="mt-0.5">
                <a
                  href="https://www.instagram.com/tipicobarradetapas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B89B69]"
                >
                  @tipicobarradetapas
                </a>
              </dd>
            </div>
          </dl>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Pag%C3%A9s+del+Corro+86+Sevilla"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-sm border border-[#77736B]/25 rounded-lg px-4 py-2.5 hover:border-[#B89B69]"
          >
            Abrir en Google Maps
          </a>
        </section>

        <section className="bg-white rounded-2xl p-6 border border-[#77736B]/12 space-y-3">
          <h3 className="font-serif text-xl">Horarios</h3>
          <p className="text-sm text-[#77736B] leading-relaxed">
            Los horarios publicados en directorios varían (apertura alrededor de mediodía, servicio
            hasta cerca de medianoche en varios días).{" "}
            <strong className="text-[#171715]">Pendiente de confirmación oficial.</strong> Consulta
            Instagram o llama antes de visitar.
          </p>
        </section>

        <section className="bg-white rounded-2xl p-6 border border-[#77736B]/12 space-y-4">
          <h3 className="font-serif text-xl">Opiniones y reputación</h3>
          <p className="text-sm text-[#77736B] leading-relaxed">
            El establecimiento aparece en Tripadvisor y otras plataformas con valoraciones de
            clientes. Las opiniones individuales no se reproducen aquí como hechos; te invitamos a
            consultar la fuente oficial.
          </p>
          <a
            href="https://www.tripadvisor.es/Restaurant_Review-g187443-d13564282-Reviews-Tipico_Barra_De_Tapas-Seville_Province_of_Seville_Andalucia.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm bg-[#171715] text-[#F1EBDD] rounded-lg px-4 py-2.5"
          >
            Ver en Tripadvisor
          </a>
        </section>

        <section className="bg-white rounded-2xl p-6 border border-[#77736B]/12 space-y-3">
          <h3 className="font-serif text-xl">Sobre esta demo</h3>
          <p className="text-sm text-[#77736B] leading-relaxed">
            TÍPICO EXPERIENCE + BUSINESS es una demostración comercial de plataforma digital
            pensada para este restaurante. Las fotografías de stock son ilustrativas. Precios,
            alérgenos e ingredientes de la carta digital están pendientes de validación oficial.
          </p>
        </section>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/carta"
            className="flex-1 text-center bg-[#B89B69] text-[#10100F] font-medium py-3.5 rounded-lg"
          >
            Ver la carta digital
          </Link>
          <Link
            href="/waitlist"
            className="flex-1 text-center border border-[#77736B]/25 py-3.5 rounded-lg text-sm"
          >
            Lista de espera
          </Link>
        </div>
      </article>
    </div>
  );
}
