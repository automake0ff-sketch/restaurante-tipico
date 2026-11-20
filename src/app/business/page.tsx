"use client";

import { useState } from "react";
import Link from "next/link";
import { menu } from "@/data/menu";

const DEMO = true; // Always mark as demo data

export default function BusinessPage() {
  const [section, setSection] = useState<"resumen" | "carta" | "waitlist" | "ia" | "analitica" | "ingenieria" | "auditoria" | "config">("resumen");
  const [authed, setAuthed] = useState(false);
  const [pass, setPass] = useState("");

  if (!authed) {
    return (
      <div className="min-h-screen bg-[#10100F] flex items-center justify-center px-4">
        <div className="bg-[#171715] border border-[#B89B69]/30 rounded-2xl p-8 max-w-sm w-full text-center">
          <p className="font-serif text-2xl text-[#F1EBDD] mb-2">TÍPICO BUSINESS</p>
          <p className="text-[#77736B] text-sm mb-6">Acceso privado · Demo</p>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Contraseña demo"
            className="w-full bg-[#10100F] border border-[#77736B]/30 rounded-lg px-4 py-3 text-[#F1EBDD] text-sm mb-4 outline-none focus:border-[#B89B69]"
          />
          <button
            onClick={() => setAuthed(pass === "tipico2026" || pass === "demo")}
            className="w-full bg-[#B89B69] text-[#10100F] font-medium py-3 rounded-lg"
          >
            Entrar
          </button>
          <p className="text-[10px] text-[#77736B] mt-4">Demo: usa &quot;demo&quot; o &quot;tipico2026&quot;</p>
          <Link href="/" className="block mt-6 text-[#B89B69] text-sm">← Volver a Experience</Link>
        </div>
      </div>
    );
  }

  const nav = [
    { id: "resumen" as const, label: "Resumen" },
    { id: "carta" as const, label: "Carta" },
    { id: "waitlist" as const, label: "Lista de espera" },
    { id: "ia" as const, label: "Business AI" },
    { id: "analitica" as const, label: "Analítica" },
    { id: "ingenieria" as const, label: "Ingeniería menú" },
    { id: "auditoria" as const, label: "Auditoría" },
    { id: "config" as const, label: "Configuración" },
  ];

  return (
    <div className="min-h-screen bg-[#F1EBDD] flex">
      {/* Sidebar */}
      <aside className="hidden md:flex w-56 bg-[#171715] text-[#F1EBDD] flex-col shrink-0">
        <div className="p-5 border-b border-[#77736B]/20">
          <p className="font-serif text-lg">TÍPICO</p>
          <p className="text-[10px] text-[#B89B69] tracking-widest">BUSINESS</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => setSection(n.id)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm ${
                section === n.id ? "bg-[#B89B69] text-[#10100F]" : "hover:bg-white/5"
              }`}
            >
              {n.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-[#77736B]/20">
          <Link href="/" className="text-xs text-[#77736B] hover:text-[#B89B69]">← Experience</Link>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        <header className="sticky top-0 bg-white/80 backdrop-blur border-b border-[#77736B]/10 px-4 py-3 flex items-center justify-between md:px-8">
          <div className="flex items-center gap-3">
            <select
              className="md:hidden bg-transparent text-sm border border-[#77736B]/20 rounded px-2 py-1"
              value={section}
              onChange={(e) => setSection(e.target.value as typeof section)}
            >
              {nav.map((n) => (
                <option key={n.id} value={n.id}>{n.label}</option>
              ))}
            </select>
            <h1 className="font-serif text-lg hidden md:block capitalize">{section}</h1>
          </div>
          {DEMO && (
            <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-1 rounded font-medium">
              DATOS DEMO
            </span>
          )}
        </header>

        <div className="p-4 md:p-8 max-w-5xl">
          {section === "resumen" && (
            <div className="space-y-6">
              <p className="text-sm text-[#77736B]">
                Indicadores de la microapp. Todos los números son <strong>simulados para demostración</strong> y no representan datos reales del restaurante.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Visitas microapp", value: "1.248", sub: "+12% sem." },
                  { label: "Consultas carta", value: "892", sub: "+8%" },
                  { label: "Recomendaciones IA", value: "214", sub: "+23%" },
                  { label: "Clics contacto", value: "67", sub: "+5%" },
                ].map((k) => (
                  <div key={k.label} className="bg-white rounded-xl p-4 border border-[#77736B]/10">
                    <p className="text-xs text-[#77736B]">{k.label}</p>
                    <p className="font-serif text-2xl mt-1">{k.value}</p>
                    <p className="text-[10px] text-green-700 mt-1">{k.sub} · DEMO</p>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-xl p-5 border border-[#77736B]/10">
                <h3 className="font-medium mb-3">Productos más consultados (DEMO)</h3>
                <ul className="space-y-2 text-sm">
                  {["Tartar de atún", "Carrillada ibérica", "Lingote de cochinillo", "Pulpo a la gallega", "Croquetas de jamón"].map((n, i) => (
                    <li key={n} className="flex justify-between">
                      <span>{i + 1}. {n}</span>
                      <span className="text-[#77736B]">{[142, 118, 97, 89, 76][i]} vistas</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {section === "carta" && (
            <div className="space-y-4">
              <p className="text-sm text-[#77736B]">
                Gestión de carta. Los cambios en una versión completa se reflejarían en la app pública. Aquí se muestra el listado actual (datos de investigación, precios pendientes).
              </p>
              <div className="bg-white rounded-xl border border-[#77736B]/10 overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-[#171715] text-[#F1EBDD]">
                    <tr>
                      <th className="text-left p-3">Plato</th>
                      <th className="text-left p-3 hidden sm:table-cell">Categoría</th>
                      <th className="text-left p-3">Precio</th>
                      <th className="text-left p-3">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {menu.map((d) => (
                      <tr key={d.id} className="border-t border-[#77736B]/10">
                        <td className="p-3 font-medium">{d.name}</td>
                        <td className="p-3 hidden sm:table-cell text-[#77736B]">{d.category}</td>
                        <td className="p-3 text-[#B89B69]">{d.price !== null ? `${d.price}€` : "Ptc."}</td>
                        <td className="p-3">
                          <span className={`text-[10px] px-2 py-0.5 rounded ${d.available ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                            {d.available ? "Activo" : "Inactivo"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {section === "ingenieria" && (
            <div className="space-y-6">
              <p className="text-sm text-[#77736B]">
                Análisis de rentabilidad tipo menú engineering. <strong>Todos los datos de ventas y costes son simulados (DEMO)</strong> y no corresponden a resultados reales de Típico.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Estrellas", desc: "Alta popularidad + alta rentabilidad", items: ["Tartar de atún", "Carrillada ibérica"], color: "bg-amber-50 border-amber-200" },
                  { title: "Caballos de batalla", desc: "Alta popularidad, menor margen", items: ["Croquetas de jamón", "Papas bravas"], color: "bg-blue-50 border-blue-200" },
                  { title: "Puzzles", desc: "Menor popularidad, alta rentabilidad", items: ["Lingote de cochinillo", "Magret de pato"], color: "bg-purple-50 border-purple-200" },
                  { title: "Perros", desc: "Baja popularidad y margen", items: ["Gnocchi de gorgonzola"], color: "bg-gray-50 border-gray-200" },
                ].map((b) => (
                  <div key={b.title} className={`rounded-xl p-4 border ${b.color}`}>
                    <h3 className="font-medium">{b.title}</h3>
                    <p className="text-xs text-[#77736B] mb-2">{b.desc}</p>
                    <ul className="text-sm space-y-1">
                      {b.items.map((i) => <li key={i}>• {i}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-xl p-5 border border-[#77736B]/10">
                <h3 className="font-medium mb-2">Recomendaciones (DEMO)</h3>
                <ul className="text-sm space-y-2 text-[#77736B]">
                  <li>• Promocionar puzzles de alto margen en la carta digital y recomendaciones IA.</li>
                  <li>• Revisar coste de caballos de batalla sin perder atractivo gastronómico.</li>
                  <li>• No retirar productos solo por clasificación: valorar importancia estratégica y de marca.</li>
                  <li>• Combinaciones sugeridas: tapa estrella + bebida, entrante + principal.</li>
                </ul>
              </div>
            </div>
          )}

          {section === "auditoria" && (
            <div className="space-y-6">
              <p className="text-sm text-[#77736B]">
                BUSINESS AUDIT · Hallazgos basados en observación de presencia digital pública y buenas prácticas. Nivel de confianza y datos adicionales indicados. No se inventan problemas internos.
              </p>
              {[
                { area: "CAPTACIÓN", items: [
                  { d: "Presencia en Instagram activa (@tipicobarradetapas)", e: "Perfil público identificado", c: "Alta", i: "Medio", r: "Mantener consistencia y enlazar carta digital" },
                  { d: "Experiencia móvil de carta digital (esta plataforma)", e: "Demo construida", c: "Alta", i: "Alto", r: "Desplegar y medir conversión a contacto/visita" },
                ]},
                { area: "OPERACIONES", items: [
                  { d: "Gestión de espera en horas punta", e: "Reseñas mencionan esperas", c: "Media", i: "Alto", r: "Usar waitlist digital + comunicación clara de tiempos" },
                ]},
                { area: "VENTAS", items: [
                  { d: "Venta cruzada tapa + bebida", e: "Hipótesis de mejora", c: "Baja", i: "Medio", r: "Sugerencias naturales en Food Guide IA" },
                ]},
                { area: "RENTABILIDAD", items: [
                  { d: "Datos de costes y márgenes", e: "No disponibles públicamente", c: "—", i: "Alto", r: "Integrar costes reales para ingeniería de menú precisa" },
                ]},
              ].map((block) => (
                <div key={block.area} className="bg-white rounded-xl p-5 border border-[#77736B]/10">
                  <h3 className="font-medium text-[#B89B69] mb-3">{block.area}</h3>
                  <div className="space-y-4">
                    {block.items.map((it, idx) => (
                      <div key={idx} className="text-sm border-l-2 border-[#B89B69]/40 pl-3">
                        <p className="font-medium">{it.d}</p>
                        <p className="text-[#77736B] text-xs mt-1">Evidencia: {it.e} · Confianza: {it.c} · Impacto: {it.i}</p>
                        <p className="text-xs mt-1">→ {it.r}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {section === "ia" && (
            <div className="bg-white rounded-xl p-6 border border-[#77736B]/10 max-w-xl">
              <h2 className="font-serif text-xl mb-2">TÍPICO BUSINESS AI</h2>
              <p className="text-sm text-[#77736B] mb-4">
                Consultor interno de demostración. Distingue hechos, indicadores calculados, hipótesis y recomendaciones. No inventa problemas del establecimiento.
              </p>
              <div className="space-y-3 text-sm">
                <div className="bg-[#F1EBDD] rounded-lg p-3">
                  <p className="text-xs text-[#B89B69] font-medium">HECHO</p>
                  <p>Existe perfil de Instagram @tipicobarradetapas y teléfono público +34 955 70 49 41.</p>
                </div>
                <div className="bg-[#F1EBDD] rounded-lg p-3">
                  <p className="text-xs text-[#B89B69] font-medium">INDICADOR (DEMO)</p>
                  <p>En esta simulación, las consultas de carta superan las visitas a info de contacto (ratio ilustrativo).</p>
                </div>
                <div className="bg-[#F1EBDD] rounded-lg p-3">
                  <p className="text-xs text-[#B89B69] font-medium">HIPÓTESIS</p>
                  <p>Una carta digital + waitlist puede reducir fricción en horas punta y mejorar ticket medio vía recomendaciones.</p>
                </div>
                <div className="bg-[#F1EBDD] rounded-lg p-3">
                  <p className="text-xs text-[#B89B69] font-medium">RECOMENDACIÓN</p>
                  <p>Validar precios e ingredientes oficiales, conectar datos de TPV cuando esté disponible y medir adopción real de la microapp.</p>
                </div>
              </div>
            </div>
          )}

          {(section === "analitica" || section === "waitlist" || section === "config") && (
            <div className="bg-white rounded-xl p-6 border border-[#77736B]/10 text-center text-[#77736B]">
              <p className="font-medium text-[#171715] mb-2">Módulo {section}</p>
              <p className="text-sm">
                Vista preparada para integración. En la demo, los datos de analítica y waitlist se gestionan desde la app pública (localStorage) y los gráficos detallados se activarían con datos reales conectados.
              </p>
              <p className="text-xs mt-4">Ningún dato aquí se presenta como histórico real del restaurante.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
