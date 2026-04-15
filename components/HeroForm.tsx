"use client";

import { FormEvent, useState } from "react";
import { sendLeadEmail } from "@/lib/emailjs";

export default function HeroForm() {
  const [objektart, setObjektart] = useState("");
  const [name, setName] = useState("");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");
  const [nachricht, setNachricht] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setStatusMessage("");

    try {
      await sendLeadEmail({
        form_type: "hero-schnellanfrage",
        name,
        email,
        telefon,
        objektart,
        ort: "Nicht angegeben",
        frequenz: "Nicht angegeben",
        start: "Nicht angegeben",
        nachricht: nachricht || "Keine Nachricht",
      });

      setStatus("success");
      setStatusMessage("Danke! Ihre Anfrage wurde erfolgreich gesendet.");
      setObjektart("");
      setName("");
      setTelefon("");
      setEmail("");
      setNachricht("");
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/20 bg-white/95 p-6 shadow-2xl shadow-black/25 backdrop-blur sm:p-7"
    >
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">
        Schnellanfrage
      </h2>
      <p className="mt-2 text-sm text-slate-500">
        Unverbindlich & kostenlos - Antwort innerhalb von 24h.
      </p>

      <div className="mt-6 space-y-3.5">
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ihr Name *"
          className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-[#1B4F72] focus:ring-2 focus:ring-[#1B4F72]/15"
        />
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-Mail *"
            className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-[#1B4F72] focus:ring-2 focus:ring-[#1B4F72]/15"
          />
          <input
            type="text"
            required
            value={telefon}
            onChange={(e) => setTelefon(e.target.value)}
            placeholder="Telefon *"
            className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-[#1B4F72] focus:ring-2 focus:ring-[#1B4F72]/15"
          />
        </div>
        <select
          required
          value={objektart}
          onChange={(e) => setObjektart(e.target.value)}
          className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-[#1B4F72] focus:ring-2 focus:ring-[#1B4F72]/15"
        >
          <option value="" disabled>
            Art des Objekts
          </option>
          <option>Büro</option>
          <option>Praxis</option>
          <option>Kita</option>
          <option>Sanitär</option>
          <option>Sonstiges</option>
        </select>
        <textarea
          value={nachricht}
          onChange={(e) => setNachricht(e.target.value)}
          placeholder="Ihre Nachricht (optional)"
          className="min-h-24 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-[#1B4F72] focus:ring-2 focus:ring-[#1B4F72]/15"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 w-full rounded-lg bg-[#1B4F72] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1B4F72]/20 transition hover:bg-[#163f5b]"
      >
        {status === "sending" ? "Wird gesendet..." : "Angebot anfragen"}
      </button>
      {statusMessage ? (
        <p
          className={`mt-3 text-center text-sm ${
            status === "success" ? "text-emerald-700" : "text-rose-700"
          }`}
        >
          {statusMessage}
        </p>
      ) : null}
      <p className="mt-3 text-center text-xs text-slate-400">
        Kostenlos, unverbindlich und schnell
      </p>
    </form>
  );
}
