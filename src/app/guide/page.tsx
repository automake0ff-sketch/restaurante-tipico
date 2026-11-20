"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { menu } from "@/data/menu";

type Msg = { role: "user" | "assistant"; text: string };

function generateReply(input: string): string {
  const q = input.toLowerCase();
  const available = menu.filter((d) => d.available);

  if (q.includes("vegetari") || q.includes("veggie")) {
    const list = available.filter((d) => d.tags.includes("vegetarian") || d.tags.includes("vegan"));
    if (list.length === 0) return "En este momento no tengo platos vegetarianos confirmados en la carta digital. Pregunta al personal por opciones del día.";
    return `Opciones que podrían ser más ligeras o sin carne (etiquetas provisionales, confirmar siempre):\n\n${list.map((d) => `• ${d.name}`).join("\n")}\n\nConfirma siempre alérgenos e ingredientes con el personal. Esta guía no garantiza idoneidad alimentaria.`;
  }

  if (q.includes("sin carne") || q.includes("no como carne") || q.includes("pescado")) {
    const list = available.filter((d) => !d.tags.includes("meat"));
    return `Platos sin carne (según etiquetas actuales):\n\n${list.slice(0, 6).map((d) => `• ${d.name}`).join("\n")}\n\nPuede haber más opciones del día. Consulta con la barra.`;
  }

  if (q.includes("compartir") || q.includes("tres personas") || q.includes("para 3") || q.includes("grupo")) {
    return `Para compartir entre varias personas te recomiendo una selección variada:\n\n• Papas aliñás con melva\n• Tartar de atún\n• Croquetas de jamón\n• Carrillada ibérica o Lingote de cochinillo\n• Pulpo a la gallega\n\nCombina 4-5 tapas y una especialidad. Ideal para probar la esencia de Típico. Precios pendientes de confirmación.`;
  }

  if (q.includes("combin") || q.includes("marid") || q.includes("qué pedir") || q.includes("recomiend")) {
    return `Una combinación natural y muy Típico:\n\n1. Empezar: Salmorejo o Papas aliñás\n2. Continuar: Tartar de atún + Croquetas\n3. Principal: Carrillada ibérica o Solomillo al whisky\n4. Cerrar: algo dulce del día (consultar)\n\nPara beber: una caña bien fría o una copa de tinto. Las sugerencias se basan únicamente en la carta registrada.`;
  }

  if (q.includes("tapa") || q.includes("picar")) {
    const tapas = available.filter((d) => d.category === "tapas").slice(0, 5);
    return `Algunas tapas destacadas:\n\n${tapas.map((d) => `• ${d.name}`).join("\n")}\n\nTodas sujetas a disponibilidad del día.`;
  }

  if (q.includes("picante") || q.includes("spicy")) {
    const list = available.filter((d) => d.tags.includes("spicy"));
    return list.length
      ? `Opciones con toque picante:\n\n${list.map((d) => `• ${d.name}`).join("\n")}`
      : "No tengo platos marcados como picantes confirmados en este momento.";
  }

  return `Puedo ayudarte con recomendaciones basadas en la carta actual de Típico.\n\nPrueba a preguntar:\n• ¿Qué tapas me recomiendas?\n• ¿Qué puedo compartir con tres personas?\n• ¿Opciones vegetarianas?\n• ¿Qué combinación me recomiendas?\n\nSolo recomiendo productos registrados. Para alergias o disponibilidad exacta, habla siempre con el personal.`;
}

export default function GuidePage() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      text: "Hola, soy TÍPICO FOOD GUIDE (recomendador basado en reglas sobre la carta). Puedo sugerir platos y combinaciones. No invento productos ni garantizo alérgenos. Para alergias o dietas, consulta siempre al personal. ¿Qué te apetece?",
    },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function send() {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((m) => [...m, { role: "user", text: userMsg }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", text: generateReply(userMsg) }]);
    }, 400);
  }

  return (
    <div className="min-h-screen bg-[#F1EBDD] flex flex-col">
      <header className="sticky top-0 z-20 bg-[#171715] text-[#F1EBDD] px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl">
          TÍPICO
        </Link>
        <h1 className="text-sm tracking-widest uppercase">Food Guide IA</h1>
        <Link href="/carta" className="text-[#B89B69] text-sm">
          Carta
        </Link>
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 max-w-2xl mx-auto w-full">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
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
            placeholder="¿Qué me recomiendas?"
            className="flex-1 bg-white border border-[#77736B]/20 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#B89B69]"
          />
          <button
            onClick={send}
            className="bg-[#B89B69] text-[#10100F] px-5 rounded-xl font-medium text-sm"
          >
            Enviar
          </button>
        </div>
        <p className="text-[10px] text-[#77736B] text-center mt-2 max-w-2xl mx-auto">
          Recomendaciones basadas únicamente en la carta registrada. No inventa platos ni precios. Confirma siempre con el personal.
        </p>
      </div>
    </div>
  );
}
