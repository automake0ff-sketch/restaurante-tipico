"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { menu } from "@/data/menu";
import { isDemoAuthenticated, demoLogin, demoLogout } from "@/lib/demo-auth";

export default function BusinessPage() {
  const [section, setSection] = useState<
    "resumen" | "carta" | "waitlist" | "ia" | "analitica" | "ingenieria" | "auditoria" | "config"
  >("resumen");
  const [authed, setAuthed] = useState(false);
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    setAuthed(isDemoAuthenticated());
    setChecking(false);
  }, []);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const res = demoLogin(pass);
    if (res.ok) {
      setAuthed(true);
      setError("");
      setPass("");
    } else {
      setError(res.message);
    }
  }

  function handleLogout() {
    demoLogout();
    setAuthed(false);
  }

  if (checking) {
    return (
      <div className="min-h-screen bg-[#10100F] flex items-center justify-center text-[#F1EBDD]">
        Cargando…
      </div>
    );
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-[#10100F] flex items-center justify-center px-4">
        <div className="bg-[#171715] border border-[#B89B69]/30 rounded-2xl p-8 max-w-sm w-full">
          <p className="font-serif text-2xl text-[#F1EBDD] text-center mb-1">TÍPICO BUSINESS</p>
          <p className="text-[#77736B] text-sm text-center mb-6">Acceso de demostración</p>

          <div className="mb-5 p-3 bg-amber-950/40 border border-amber-700/40 rounded-lg text-[11px] text-amber-200/90 leading-relaxed">
            <strong>Aviso de seguridad:</strong> este acceso es solo para demostración comercial.
            Utiliza sessionStorage del navegador. No constituye autenticación de producción.
            En un entorno real se implementará autenticación en servidor con credenciales protegidas.
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Contraseña de demo"
              autoComplete="current-password"
              className="w-full bg-[#10100F] border border-[#77736B]/30 rounded-lg px-4 py-3 text-[#F1EBDD] text-sm outline-none focus:border-[#B89B69]"
            />
            {error && <p className="text-red-400 text-xs">{error}</p>}
            <button
              type="submit"
              className="w-full bg-[#B89B69] text-[#10100F] font-medium py-3 rounded-lg"
            >
              Entrar a la demo
            </button>
          </form>
          <p className="text-[10px] text-[#77736B] mt-4 text-center">
            Demo: <code className="text-[#B89B69]">demo</code> o{" "}
            <code className="text-[#B89B69]">tipico2026</code>
          </p>
          <Link href="/" className="block mt-6 text-center text-[#B89B69] text-sm">
            ← Volver a Experience
          </Link>
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
      <aside className="hidden md:flex w-56 bg-[#171715] text-[#F1EBDD] flex-col shrink-0">
        <div className="p-5 border-b border-[#77736B]/20">
          <p className="font-serif text-lg">TÍPICO</p>
          <p className="text-[10px] text-[#B89B69] tracking-widest">BUSINESS · DEMO</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => setSection(n.id)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition ${
                section === n.id ? "bg-[#B89B69] text-[#10100F]" : "hover:bg-white/5"
              }`}
            >
              {n.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-[#77736B]/20 space-y-2">
          <button onClick={handleLogout} className="text-xs text-[#77736B] hover:text-[#B89B69] block">
            Cerrar sesión demo
          </button>
          <Link href="/" className="text-xs text-[#77736B] hover:text-[#B89B69] block">
            ← Experience
          </Link>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-[#77736B]/10 px-4 py-3 flex items-center justify-between md:px-8">
          <div className="flex items-center gap-3">
            <select
              className="md:hidden bg-transparent text-sm border border-[#77736B]/20 rounded px-2 py-1"
              value={section}
              onChange={(e) => setSection(e.target.value as typeof section)}
            >
              {nav.map((n) => (
                <option key={n.id} value={n.id}>
                  {n.label}
                </option>
              ))}
            </select>
            <h1 className="font-serif text-lg hidden md:block capitalize">{section}</h1>
          </div>
          <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-1 rounded font-medium">
            DATOS DE DEMOSTRACIÓN
          </span>
        </header>

        <div className="p-4 md:p-8 max-w-5xl">
          {section === "resumen" && (
            <div className="space-y-6">
              <p className="text-sm text-[#77736B]">
                Indicadores de la microapp. <strong>Todos los números son simulados</strong> para
                esta demostración y no representan actividad real del restaurante.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Visitas microapp", value: "1.248", sub: "+12% sem. · DEMO" },
                  { label: "Consultas carta", value: "892", sub: "+8% · DEMO" },
                  { label: "Recomendaciones", value: "214", sub: "+23% · DEMO" },
                  { label: "Clics contacto", value: "67", sub: "+5% · DEMO" },
                ].map((k) => (
                  <div key={k.label} className="bg-white rounded-xl p-4 border border-[#77736B]/10">
                    <p className="text-xs text-[#77736B]">{k.label}</p>
                    <p className="font-serif text-2xl mt-1">{k.value}</p>
                    <p className="text-[10px] text-amber-700 mt-1">{k.sub}</p>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-xl p-5 border border-[#77736B]/10">
                <h3 className="font-medium mb-3">Productos más consultados (DEMO)</h3>
                <ul className="space-y-2 text-sm">
                  {["Tartar de atún", "Carrillada ibérica", "Lingote de cochinillo", "Pulpo a la gallega", "Croquetas de jamón"].map(
                    (n, i) => (
                      <li key={n} className="flex justify-between">
                        <span>
                          {i + 1}. {n}
                        </span>
                        <span className="text-[#77736B]">{[142, 118, 97, 89, 76][i]} vistas · DEMO</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          )}

          {section === "carta" && (
            <div className="space-y-4">
              <p className="text-sm text-[#77736B]">
                Vista de la carta actual. En producción, los cambios aquí se reflejarían en la app
                pública. Precios e ingredientes están pendientes de validación oficial.
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
                        <td className="p-3 text-[#B89B69]">
                          {d.price !== null ? `${d.price}€` : "Ptc."}
                        </td>
                        <td className="p-3">
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded ${
                              d.available
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
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
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-900">
                <strong>Requisito:</strong> para clasificar platos de forma real se necesitan datos
                de ventas y costes (TPV / contabilidad). Lo que se muestra a continuación es un{" "}
                <strong>ejemplo ilustrativo</strong>, no resultados del restaurante.
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Estrellas",
                    desc: "Alta popularidad + alta rentabilidad (ejemplo)",
                    items: ["Tartar de atún", "Carrillada ibérica"],
                    color: "bg-amber-50 border-amber-200",
                  },
                  {
                    title: "Caballos de batalla",
                    desc: "Alta popularidad, menor margen (ejemplo)",
                    items: ["Croquetas de jamón", "Papas bravas"],
                    color: "bg-blue-50 border-blue-200",
                  },
                  {
                    title: "Puzzles",
                    desc: "Menor popularidad, alta rentabilidad (ejemplo)",
                    items: ["Lingote de cochinillo", "Magret de pato"],
                    color: "bg-purple-50 border-purple-200",
                  },
                  {
                    title: "Perros",
                    desc: "Baja popularidad y margen (ejemplo)",
                    items: ["Gnocchi de gorgonzola"],
                    color: "bg-gray-50 border-gray-200",
                  },
                ].map((b) => (
                  <div key={b.title} className={`rounded-xl p-4 border ${b.color}`}>
                    <h3 className="font-medium">{b.title}</h3>
                    <p className="text-xs text-[#77736B] mb-2">{b.desc}</p>
                    <ul className="text-sm space-y-1">
                      {b.items.map((i) => (
                        <li key={i}>• {i}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {section === "auditoria" && (
            <div className="space-y-6">
              <p className="text-sm text-[#77736B]">
                BUSINESS AUDIT · Observaciones basadas en presencia digital pública y buenas
                prácticas. Se distingue HECHO / INDICADOR / HIPÓTESIS / RECOMENDACIÓN.
              </p>
              {[
                {
                  area: "CAPTACIÓN",
                  items: [
                    {
                      type: "HECHO",
                      d: "Perfil de Instagram @tipicobarradetapas y teléfono público identificados",
                      e: "Fuentes públicas",
                      c: "Alta",
                      i: "Medio",
                      r: "Mantener consistencia y enlazar carta digital cuando esté en producción",
                    },
                    {
                      type: "HIPÓTESIS",
                      d: "Una carta digital + waitlist puede reducir fricción en horas punta",
                      e: "Observación de reseñas que mencionan esperas",
                      c: "Media",
                      i: "Alto",
                      r: "Probar la waitlist digital y medir adopción real",
                    },
                  ],
                },
                {
                  area: "RENTABILIDAD",
                  items: [
                    {
                      type: "HECHO",
                      d: "No se dispone de datos de costes ni de ventas del establecimiento",
                      e: "Sin integración TPV / contabilidad",
                      c: "—",
                      i: "Alto",
                      r: "Conectar datos reales antes de emitir recomendaciones de rentabilidad",
                    },
                  ],
                },
              ].map((block) => (
                <div key={block.area} className="bg-white rounded-xl p-5 border border-[#77736B]/10">
                  <h3 className="font-medium text-[#B89B69] mb-3">{block.area}</h3>
                  <div className="space-y-4">
                    {block.items.map((it, idx) => (
                      <div key={idx} className="text-sm border-l-2 border-[#B89B69]/40 pl-3">
                        <span className="text-[10px] font-semibold tracking-wide text-[#B89B69]">
                          {it.type}
                        </span>
                        <p className="font-medium mt-0.5">{it.d}</p>
                        <p className="text-[#77736B] text-xs mt-1">
                          Fuente: {it.e} · Confianza: {it.c} · Impacto potencial: {it.i}
                        </p>
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
                Consultor de demostración basado en reglas. Distingue hechos, indicadores,
                hipótesis y recomendaciones. No inventa problemas internos del establecimiento.
              </p>
              <div className="space-y-3 text-sm">
                <div className="bg-[#F1EBDD] rounded-lg p-3">
                  <p className="text-xs text-[#B89B69] font-medium">HECHO</p>
                  <p>
                    Existe perfil de Instagram @tipicobarradetapas y teléfono público +34 955 70 49
                    41.
                  </p>
                </div>
                <div className="bg-[#F1EBDD] rounded-lg p-3">
                  <p className="text-xs text-[#B89B69] font-medium">INDICADOR (DEMO)</p>
                  <p>
                    En esta simulación, las consultas de carta superan las visitas a info de
                    contacto (cifras ilustrativas).
                  </p>
                </div>
                <div className="bg-[#F1EBDD] rounded-lg p-3">
                  <p className="text-xs text-[#B89B69] font-medium">HIPÓTESIS</p>
                  <p>
                    Una carta digital + waitlist puede reducir fricción en horas punta y mejorar
                    el ticket medio vía recomendaciones naturales.
                  </p>
                </div>
                <div className="bg-[#F1EBDD] rounded-lg p-3">
                  <p className="text-xs text-[#B89B69] font-medium">RECOMENDACIÓN</p>
                  <p>
                    Validar precios e ingredientes oficiales, conectar datos de TPV cuando esté
                    disponible y medir adopción real de la microapp.
                  </p>
                </div>
              </div>
            </div>
          )}

          {section === "waitlist" && (
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 border border-[#77736B]/10">
                <h3 className="font-medium mb-2">Lista de espera (sala)</h3>
                <p className="text-sm text-[#77736B] mb-4">
                  La gestión operativa de turnos está en la app pública, protegida con acceso demo
                  para staff. En esta demo no hay base de datos centralizada: los datos viven en
                  el navegador del dispositivo.
                </p>
                <a
                  href="/waitlist"
                  className="inline-block bg-[#171715] text-[#F1EBDD] text-sm px-4 py-2.5 rounded-lg"
                >
                  Abrir panel de lista de espera
                </a>
              </div>
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900">
                Producción: Supabase (o similar) + roles personal/admin + sincronización entre
                dispositivos. Estado actual: <strong>simulada / localStorage</strong>.
              </div>
            </div>
          )}

          {section === "analitica" && (
            <div className="bg-white rounded-xl p-6 border border-[#77736B]/10 text-[#77736B]">
              <h3 className="font-medium text-[#171715] mb-2">Analítica</h3>
              <p className="text-sm mb-3">
                Preparada para eventos reales (visitas, consultas de carta, uso del guía, contactos,
                waitlist). Hoy no hay recolección activa de analítica.
              </p>
              <ul className="text-sm space-y-1 list-disc pl-5">
                <li>Estado: <strong>configuración pendiente</strong></li>
                <li>Sin Google Analytics ni alternativa conectada</li>
                <li>Cumplimiento RGPD: minimización y consentimiento cuando corresponda</li>
              </ul>
            </div>
          )}

          {section === "config" && (
            <div className="bg-white rounded-xl p-6 border border-[#77736B]/10 text-sm text-[#77736B] space-y-3">
              <h3 className="font-medium text-[#171715]">Configuración</h3>
              <p>
                Acceso actual: autenticación de <strong>demostración</strong> (sessionStorage). No
                es producción.
              </p>
              <p>
                Integraciones futuras (TPV, WhatsApp Business, reservas, CRM, IA API):{" "}
                <strong>no disponibles / pendientes de configuración</strong>.
              </p>
              <p className="text-xs">
                Secretos y credenciales deben vivir en variables de entorno de servidor, nunca en
                el código del cliente.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
