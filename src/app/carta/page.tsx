"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { menu, categories, type Category, type Dish } from "@/data/menu";

export default function CartaPage() {
  const [activeCat, setActiveCat] = useState<Category | "all">("all");
  const [query, setQuery] = useState("");
  const [spicyOnly, setSpicyOnly] = useState(false);
  const [selected, setSelected] = useState<Dish | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menu.filter((d) => {
      if (!d.available) return false;
      if (activeCat !== "all" && d.category !== activeCat) return false;
      if (spicyOnly && !d.tags.includes("spicy")) return false;
      if (q) {
        const hay = `${d.name} ${d.description} ${d.category}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [activeCat, query, spicyOnly]);

  return (
    <div className="min-h-screen bg-[#F1EBDD]">
      <header className="sticky top-0 z-20 bg-[#171715] text-[#F1EBDD] px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl tracking-tight">
          TÍPICO
        </Link>
        <h1 className="text-sm tracking-widest uppercase">Carta</h1>
        <Link href="/guide" className="text-[#B89B69] text-sm">
          Guía
        </Link>
      </header>

      {/* Search + categories */}
      <div className="px-4 py-4 border-b border-[#77736B]/15 bg-white/60 backdrop-blur">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar plato…"
          className="w-full mb-3 bg-white border border-[#77736B]/20 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#B89B69]"
        />
        <div className="flex gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveCat("all")}
            className={`shrink-0 px-4 py-1.5 rounded-full text-sm transition ${
              activeCat === "all"
                ? "bg-[#171715] text-[#F1EBDD]"
                : "bg-white text-[#171715] border border-[#77736B]/20"
            }`}
          >
            Todo
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCat(c.id)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-sm transition ${
                activeCat === c.id
                  ? "bg-[#171715] text-[#F1EBDD]"
                  : "bg-white text-[#171715] border border-[#77736B]/20"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4 mt-3 text-xs">
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={spicyOnly}
              onChange={(e) => setSpicyOnly(e.target.checked)}
              className="accent-[#B89B69]"
            />
            Con toque picante
          </label>
        </div>
        <p className="text-[11px] text-[#77736B] mt-3 leading-relaxed">
          ⚠️ <strong>Alergias e intolerancias:</strong> la información de esta carta es orientativa y
          provisional. Debe consultarse siempre al personal del establecimiento antes de consumir.
          No se garantiza que ningún plato sea apto para alergias o dietas específicas.
        </p>
      </div>

      {/* Grid */}
      <div className="px-4 py-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {filtered.map((dish) => (
          <article
            key={dish.id}
            onClick={() => setSelected(dish)}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#77736B]/10 cursor-pointer hover:border-[#B89B69]/50 transition"
          >
            <div
              className="h-40 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${dish.image})` }}
            >
              <span className="absolute bottom-2 left-2 text-[9px] bg-black/50 text-white px-1.5 py-0.5 rounded">
                Imagen ilustrativa
              </span>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-serif text-lg leading-tight">{dish.name}</h3>
                {dish.featured && (
                  <span className="shrink-0 text-[10px] bg-[#B89B69]/20 text-[#B89B69] px-2 py-0.5 rounded">
                    Destacado
                  </span>
                )}
              </div>
              <p className="text-sm text-[#77736B] mt-1 line-clamp-2">{dish.description}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm font-medium text-[#B89B69]">
                  {dish.price !== null ? `${dish.price.toFixed(2)} €` : "Precio ptc."}
                </span>
                <span className="text-[10px] text-[#77736B] uppercase tracking-wide">
                  {dish.category}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-[#77736B] py-16">No hay platos con estos criterios.</p>
      )}

      {/* Detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-end sm:items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="h-48 bg-cover bg-center rounded-t-2xl relative"
              style={{ backgroundImage: `url(${selected.image})` }}
            >
              <span className="absolute bottom-2 left-2 text-[10px] bg-black/50 text-white px-2 py-0.5 rounded">
                Imagen ilustrativa — no es foto oficial del plato
              </span>
            </div>
            <div className="p-5">
              <h2 className="font-serif text-2xl">{selected.name}</h2>
              <p className="text-[#77736B] mt-2">{selected.description}</p>
              <p className="mt-3 text-sm">
                <strong>Precio:</strong>{" "}
                {selected.price !== null
                  ? `${selected.price.toFixed(2)} €`
                  : "Pendiente de confirmación oficial por el restaurante"}
              </p>
              {selected.ingredients.length > 0 && (
                <p className="mt-2 text-sm">
                  <strong>Ingredientes (orientativos):</strong> {selected.ingredients.join(", ")}
                </p>
              )}
              <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900">
                <strong>Seguridad alimentaria:</strong> cualquier información sobre alérgenos,
                ingredientes o idoneidad para dietas específicas debe confirmarse siempre con el
                personal del establecimiento. Esta ficha no constituye garantía.
              </div>
              {selected.sourceNote && (
                <p className="mt-3 text-[11px] text-[#77736B] border-t pt-3">
                  {selected.sourceNote}
                </p>
              )}
              <button
                onClick={() => setSelected(null)}
                className="mt-5 w-full bg-[#171715] text-[#F1EBDD] py-3 rounded-lg"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
