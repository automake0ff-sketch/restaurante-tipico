"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { menu, type Dish } from "@/data/menu";

type Msg = { role: "user" | "assistant"; text: string };

type Prefs = {
  style: "tradicion" | "contemporaneo" | "indiferente" | null;
  type: "tapas" | "principales" | "mezcla" | null;
  protein: "carne" | "pescado" | "vegetal" | "indiferente" | null;
  spice: "suave" | "picante" | "indiferente" | null;
};

function scoreDish(d: Dish, p: Prefs): number {
  let s = 0;
  if (p.type === "tapas" && d.category === "tapas") s += 3;
  if (p.type === "principales" && (d.category === "principales" || d.category === "especialidades")) s += 3;
  if (p.type === "mezcla") s += 1;
  if (p.protein === "carne" && d.tags.includes("meat")) s += 2;
  if (p.protein === "pescado" && d.tags.includes("seafood")) s += 2;
  if (p.protein === "vegetal" && (d.tags.includes("vegetarian") || d.tags.includes("vegan"))) s += 2;
  if (p.spice === "picante" && d.tags.includes("spicy")) s += 2;
  if (p.spice === "suave" && !d.tags.includes("spicy")) s += 1;
  if (d.featured) s += 1;
  return s;
}

function recommendFromPrefs(p: Prefs): string {
  const available = menu.filter((d) => d.available);
  const ranked = [...available]
    .map((d) => ({ d, score: scoreDish(d, p) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  if (ranked.length === 0) {
    return "No hay platos disponibles en la carta digital en este momento. Consulta con el personal.";
  }

  const lines = ranked.map(
    ({ d }, i) =>
      `${i + 1}. **${d.name}** (${d.category})${d.featured ? " · destacado" : ""}\n   ${d.description}`
  );

  return (
    `Según tus preferencias, estas son sugerencias basadas solo en la carta registrada:\n\n` +
    lines.join("\n\n") +
    `\n\nPrecios e ingredientes: pendientes de confirmación oficial.\n` +
    `Para alergias o dietas específicas, pregunta siempre al personal. Este guía no garantiza idoneidad alimentaria.`
  );
}

function generateReply(input: string, prefs: Prefs): string {
  const q = input.toLowerCase();
  const available = menu.filter((d) => d.available);

  if (
    q.includes("prefer") ||
    q.includes("recomiend") ||
    q.includes("qué pedir") ||
    q.includes("que pedir") ||
    q.includes("suger")
  ) {
    if (prefs.style || prefs.type || prefs.protein || prefs.spice) {
      return recommendFromPrefs(prefs);
    }
  }

  if (q.includes("compartir") || q.includes("tres personas") || q.includes("para 3") || q.includes("grupo")) {
    return (
      `Para compartir (sugerencia orientativa):\n\n` +
      `• Papas aliñás con melva\n• Tartar de atún\n• Croquetas de jamón\n• Carrillada ibérica o Lingote de cochinillo\n• Pulpo a la gallega\n\n` +
      `Combina 4–5 tapas y una especialidad. Precios pendientes de confirmación. Disponibilidad del día: consultar en barra.`
    );
  }

  if (q.includes("combin") || q.includes("marid")) {
    return (
      `Combinación orientativa basada en la carta registrada:\n\n` +
      `1. Empezar: Salmorejo o Papas aliñás\n` +
      `2. Continuar: Tartar de atún + Croquetas\n` +
      `3. Principal: Carrillada ibérica o Solomillo al whisky\n` +
      `4. Cerrar: consulta postres del día en barra\n\n` +
      `Solo se sugieren platos de la carta digital. Confirma alérgenos con el equipo.`
    );
  }

  if (q.includes("tapa") || q.includes("picar")) {
    const tapas = available.filter((d) => d.category === "tapas").slice(0, 5);
    return (
      `Algunas tapas de la carta digital:\n\n` +
      tapas.map((d) => `• ${d.name}`).join("\n") +
      `\n\nSujetas a disponibilidad del día.`
    );
  }

  if (q.includes("picante") || q.includes("spicy")) {
    const list = available.filter((d) => d.tags.includes("spicy"));
    return list.length
      ? `Platos marcados con toque picante (etiqueta provisional):\n\n${list.map((d) => `• ${d.name}`).join("\n")}\n\nConfirma el nivel de picante con el personal.`
      : "No hay platos marcados como picantes de forma confirmada en la carta digital.";
  }

  if (q.includes("vegetari") || q.includes("veggie") || q.includes("sin carne") || q.includes("no como carne")) {
    return (
      `No puedo garantizar opciones vegetarianas o sin carne: los datos de la carta digital no están validados oficialmente para dietas.\n\n` +
      `Pregunta siempre al personal. Puedo listar platos de la carta y tú decides con el equipo qué encaja contigo.`
    );
  }

  return (
    `Soy el **Food Guide de Típico**: un recomendador basado en preferencias y en la carta registrada (no es un modelo de IA conectado).\n\n` +
    `Puedes preguntarme:\n` +
    `• ¿Qué tapas me recomiendas?\n` +
    `• ¿Qué puedo compartir con tres personas?\n` +
    `• ¿Qué combinación me sugieres?\n` +
    `• O usa los botones de preferencias arriba y pide “recomiéndame”.\n\n` +
    `Solo sugiero platos de la carta. Para alergias o dietas, consulta siempre al personal.`
  );
}

export default function GuidePage() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      text:
        "Hola. Soy el Food Guide de Típico: recomendador basado en preferencias y en la carta registrada (no es IA conectada a un modelo externo).\n\n" +
        "Indica tus preferencias con los botones o pregunta libremente. No invento platos ni garantizo alérgenos.",
    },
  ]);
  const [input, setInput] = useState("");
  const [prefs, setPrefs] = useState<Prefs>({
    style: null,
    type: null,
    protein: null,
    spice: null,
  });
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function send(text?: string) {
    const userMsg = (text ?? input).trim();
    if (!userMsg) return;
    setMessages((m) => [...m, { role: "user", text: userMsg }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", text: generateReply(userMsg, prefs) }]);
    }, 350);
  }

  function setPref<K extends keyof Prefs>(key: K, value: Prefs[K]) {
    setPrefs((p) => ({ ...p, [key]: p[key] === value ? null : value }));
  }

  const chip = (active: boolean) =>
    `text-[11px] px-2.5 py-1 rounded-full border transition ${
      active
        ? "bg-[#171715] text-[#F1EBDD] border-[#171715]"
        : "bg-white text-[#171715] border-[#77736B]/25"
    }`;

  return (
    <div className="min-h-screen bg-[#F1EBDD] flex flex-col">
      <header className="sticky top-0 z-20 bg-[#171715] text-[#F1EBDD] px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl tracking-tight">
          TÍPICO
        </Link>
        <h1 className="text-sm tracking-widest uppercase">Food Guide</h1>
        <Link href="/carta" className="text-[#B89B69] text-sm">
          Carta
        </Link>
      </header>

      {/* Preferences */}
      <div className="px-4 py-3 border-b border-[#77736B]/15 bg-white/70 space-y-2">
        <p className="text-[10px] uppercase tracking-wider text-[#77736B]">Preferencias (opcional)</p>
        <div className="flex flex-wrap gap-1.5">
          <button type="button" className={chip(prefs.type === "tapas")} onClick={() => setPref("type", "tapas")}>
            Tapas
          </button>
          <button
            type="button"
            className={chip(prefs.type === "principales")}
            onClick={() => setPref("type", "principales")}
          >
            Principales
          </button>
          <button type="button" className={chip(prefs.type === "mezcla")} onClick={() => setPref("type", "mezcla")}>
            Mezcla
          </button>
          <button
            type="button"
            className={chip(prefs.protein === "carne")}
            onClick={() => setPref("protein", "carne")}
          >
            Carne
          </button>
          <button
            type="button"
            className={chip(prefs.protein === "pescado")}
            onClick={() => setPref("protein", "pescado")}
          >
            Pescado
          </button>
          <button
            type="button"
            className={chip(prefs.spice === "picante")}
            onClick={() => setPref("spice", "picante")}
          >
            Picante
          </button>
          <button type="button" className={chip(prefs.spice === "suave")} onClick={() => setPref("spice", "suave")}>
            Suave
          </button>
        </div>
        <button
          type="button"
          onClick={() => send("Recomiéndame según mis preferencias")}
          className="text-xs text-[#B89B69] font-medium"
        >
          Recomiéndame con estas preferencias →
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 max-w-2xl mx-auto w-full">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm whitespace-pre-wrap ${
                m.role === "user"
                  ? "bg-[#171715] text-[#F1EBDD]"
                  : "bg-white border border-[#77736B]/15 text-[#171715]"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="sticky bottom-0 bg-[#F1EBDD] border-t border-[#77736B]/15 p-4">
        <div className="max-w-2xl mx-auto flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="¿Qué te apetece?"
            className="flex-1 bg-white border border-[#77736B]/20 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#B89B69]"
          />
          <button
            onClick={() => send()}
            className="bg-[#B89B69] text-[#10100F] px-5 rounded-xl font-medium text-sm"
          >
            Enviar
          </button>
        </div>
        <p className="text-[10px] text-[#77736B] text-center mt-2 max-w-2xl mx-auto">
          Recomendador por reglas · Solo carta registrada · No garantiza alérgenos ni dietas
        </p>
      </div>
    </div>
  );
}
