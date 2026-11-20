"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { menu, categories, type Category, type Dish } from "@/data/menu";

export default function CartaPage() {
  const [activeCat, setActiveCat] = useState<Category | "all">("all");
  const [veg, setVeg] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [spicy, setSpicy] = useState(false);
  const [selected, setSelected] = useState<Dish | null>(null);

  const filtered = useMemo(() => {
    return menu.filter((d) => {
      if (!d.available) return false;
      if (activeCat !== "all" && d.category !== activeCat) return false;
      if (veg && !d.tags.includes("vegetarian") && !d.tags.includes("vegan")) return false;
      if (vegan && !d.tags.includes("vegan")) return false;
      if (spicy && !d.tags.includes("spicy")) return false;
      return true;
    });
  }, [activeCat, veg, vegan, spicy]);

  return (
    <div className="min-h-screen bg-[#F1EBDD]">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-[#171715] text-[#F1EBDD] px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl">
          TÍPICO
        </Link>
        <h1 className="text-sm tracking-widest uppercase">Carta</h1>
        <Link href="/guide" className="text-[#B89B69] text-sm">
          Guía IA
        </Link>
      </header>

      {/* Filters */}
      <div className="px-4 py-4 border-b border-[#77736B]/15 bg-white/50">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => setActiveCat("all")}
            className={`shrink-0 px-4 py-1.5 rounded-full text-sm ${
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
              className={`shrink-0 px-4 py-1.5 rounded-full text-sm ${
                activeCat === c.id
                  ? "bg-[#171715] text-[#F1EBDD]"
                  : "bg-white text-[#171715] border border-[#77736B]/20"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="flex gap-3 mt-3 text-xs">
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input type="checkbox" checked={veg} onChange={(e) => setVeg(e.target.checked)} className="accent-[#B89B69]" />
            Vegetariano
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input type="checkbox" checked={vegan} onChange={(e) => setVegan(e.target.checked)} className="accent-[#B89B69]" />
            Vegano
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input type="checkbox" checked={spicy} onChange={(e) => setSpicy(e.target.checked)} className="accent-[#B89B69]" />
            Picante
          </label>
        </div>
        <p className="text-[10px] text-[#77736B] mt-2">
          ⚠️ Las alergias deben comunicarse siempre al personal. Información de alérgenos pendiente de confirmación oficial.
        </p>
      </div>

      {/* Grid */}
      <div className="px-4 py-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {filtered.map((dish) => (
          <article
            key={dish.id}
            onClick={() => setSelected(dish)}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#77736B]/10 cursor-pointer hover:border-[#B89B69]/40 transition"
          >
            <div
              className="h-40 bg-cover bg-center"
              style={{ backgroundImage: `url(${dish.image})` }}
            />
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
                <div className="flex gap-1">
                  {dish.tags.includes("vegetarian") && (
                    <span className="text-[10px] bg-green-100 text-green-800 px-1.5 py-0.5 rounded">Veg</span>
                  )}
                  {dish.tags.includes("spicy") && (
                    <span className="text-[10px] bg-red-100 text-red-800 px-1.5 py-0.5 rounded">Picante</span>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-[#77736B] py-12">No hay platos con estos filtros.</p>
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
              className="h-48 bg-cover bg-center rounded-t-2xl"
              style={{ backgroundImage: `url(${selected.image})` }}
            />
            <div className="p-5">
              <h2 className="font-serif text-2xl">{selected.name}</h2>
              <p className="text-[#77736B] mt-2">{selected.description}</p>
              <p className="mt-3 text-sm">
                <strong>Precio:</strong>{" "}
                {selected.price !== null
                  ? `${selected.price.toFixed(2)} €`
                  : "Pendiente de confirmación oficial"}
              </p>
              {selected.ingredients.length > 0 && (
                <p className="mt-2 text-sm">
                  <strong>Ingredientes (aprox.):</strong> {selected.ingredients.join(", ")}
                </p>
              )}
              {selected.allergens.length > 0 && (
                <p className="mt-2 text-sm text-amber-700">
                  <strong>Alérgenos posibles:</strong> {selected.allergens.join(", ")} — confirmar con el personal
                </p>
              )}
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
