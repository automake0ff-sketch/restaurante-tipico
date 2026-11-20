"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Entry = {
  id: string;
  name: string;
  party: number;
  phone: string;
  status: "registrado" | "esperando" | "proximo" | "atendido" | "cancelado";
  createdAt: string;
  turn: number;
};

const STORAGE_KEY = "tipico-waitlist-demo";

export default function WaitlistPage() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [name, setName] = useState("");
  const [party, setParty] = useState(2);
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState<Entry | null>(null);
  const [isStaff, setIsStaff] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function save(list: Entry[]) {
    setEntries(list);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  function register(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    const turn = entries.filter((x) => x.status !== "cancelado" && x.status !== "atendido").length + 1;
    const entry: Entry = {
      id: crypto.randomUUID(),
      name: name.trim(),
      party,
      phone: phone.trim(),
      status: "registrado",
      createdAt: new Date().toISOString(),
      turn,
    };
    const next = [...entries, entry];
    save(next);
    setSubmitted(entry);
    setName("");
    setPhone("");
    setParty(2);
  }

  function updateStatus(id: string, status: Entry["status"]) {
    save(entries.map((e) => (e.id === id ? { ...e, status } : e)));
  }

  const active = entries.filter((e) => !["atendido", "cancelado"].includes(e.status));

  return (
    <div className="min-h-screen bg-[#F1EBDD]">
      <header className="sticky top-0 z-20 bg-[#171715] text-[#F1EBDD] px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl">TÍPICO</Link>
        <h1 className="text-sm tracking-widest uppercase">Waitlist</h1>
        <button onClick={() => setIsStaff(!isStaff)} className="text-[#B89B69] text-sm">
          {isStaff ? "Cliente" : "Staff"}
        </button>
      </header>

      <div className="max-w-lg mx-auto px-4 py-8">
        {!isStaff && !submitted && (
          <form onSubmit={register} className="bg-white rounded-2xl p-6 shadow-sm border border-[#77736B]/10 space-y-4">
            <h2 className="font-serif text-xl">Apuntarse a la lista</h2>
            <p className="text-sm text-[#77736B]">
              Herramienta de demostración. No garantiza mesa. El personal gestiona los turnos manualmente.
            </p>
            <div>
              <label className="text-xs text-[#77736B]">Nombre</label>
              <input required value={name} onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 border border-[#77736B]/20 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#B89B69]" />
            </div>
            <div>
              <label className="text-xs text-[#77736B]">Nº de personas</label>
              <input type="number" min={1} max={12} value={party} onChange={(e) => setParty(Number(e.target.value))}
                className="w-full mt-1 border border-[#77736B]/20 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#B89B69]" />
            </div>
            <div>
              <label className="text-xs text-[#77736B]">Teléfono (opcional)</label>
              <input value={phone} onChange={(e) => setPhone(e.target.value)}
                className="w-full mt-1 border border-[#77736B]/20 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#B89B69]" />
            </div>
            <button type="submit" className="w-full bg-[#B89B69] text-[#10100F] font-medium py-3 rounded-lg">
              Registrarme
            </button>
          </form>
        )}

        {!isStaff && submitted && (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#77736B]/10 text-center">
            <p className="text-[#B89B69] text-sm tracking-widest uppercase mb-2">Registrado</p>
            <p className="font-serif text-3xl mb-1">Turno {submitted.turn}</p>
            <p className="text-[#77736B]">{submitted.name} · {submitted.party} pers.</p>
            <p className="text-xs text-[#77736B] mt-4">
              El personal te avisará. Esta es una demo; en producción se integraría con sala.
            </p>
            <button onClick={() => setSubmitted(null)} className="mt-6 text-sm text-[#B89B69]">
              Registrar otro
            </button>
          </div>
        )}

        {isStaff && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-xl">Gestión de lista</h2>
              <span className="text-sm text-[#77736B]">{active.length} activos</span>
            </div>
            {active.length === 0 && <p className="text-center text-[#77736B] py-8">No hay nadie en espera.</p>}
            {active.map((e) => (
              <div key={e.id} className="bg-white rounded-xl p-4 border border-[#77736B]/10 flex items-center justify-between gap-3">
                <div>
                  <p className="font-medium">#{e.turn} {e.name}</p>
                  <p className="text-xs text-[#77736B]">{e.party} pers. · {e.status}</p>
                </div>
                <div className="flex gap-1 flex-wrap justify-end">
                  {(["esperando", "proximo", "atendido", "cancelado"] as const).map((s) => (
                    <button key={s} onClick={() => updateStatus(e.id, s)}
                      className={`text-[10px] px-2 py-1 rounded ${e.status === s ? "bg-[#171715] text-white" : "bg-[#F1EBDD] text-[#171715]"}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
