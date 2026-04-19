"use client";

import { FormEvent, useState } from "react";
import type { EmailJsLeadConfig } from "@/lib/emailjs-config";
import { sendLeadEmail } from "@/lib/emailjs";

type ContactState = {
  name: string;
  email: string;
  flaeche: string;
  objektart: string;
  ort: string;
  frequenz: string;
  start: string;
  nachricht: string;
};

const initialState: ContactState = {
  name: "",
  email: "",
  flaeche: "",
  objektart: "Büro",
  ort: "",
  frequenz: "woechentlich",
  start: "",
  nachricht: "",
};

const inputCls =
  "w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-[#1B4F72] focus:ring-2 focus:ring-[#1B4F72]/15";

type ContactFormProps = {
  emailJs: EmailJsLeadConfig | null;
};

export default function ContactForm({ emailJs }: ContactFormProps) {
  const [f, setF] = useState<ContactState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState("");

  const set = (key: keyof ContactState, val: string) =>
    setF((prev) => ({ ...prev, [key]: val }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setStatusMessage("");

    try {
      if (!emailJs) {
        throw new Error(
          "EmailJS ist nicht konfiguriert. Bitte .env.local prüfen und den Server neu starten."
        );
      }
      await sendLeadEmail(
        {
          form_type: "kontaktformular",
          name: f.name,
          email: f.email,
          flaeche_m2: f.flaeche,
          objektart: f.objektart,
          ort: f.ort,
          frequenz: f.frequenz,
          start: f.start || "Nicht angegeben",
          nachricht: f.nachricht || "Keine Nachricht",
        },
        emailJs
      );

      setStatus("success");
      setStatusMessage("Danke! Ihre Anfrage wurde erfolgreich gesendet.");
      setF(initialState);
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
      className="space-y-4 rounded-2xl border border-white/20 bg-white/95 p-6 shadow-xl shadow-black/20 backdrop-blur sm:p-7"
    >
      <h3 className="text-2xl font-bold tracking-tight text-slate-900">
        Kontaktformular
      </h3>
      <p className="text-sm text-slate-500">
        Kurz ausfüllen - wir melden uns innerhalb von 24 Stunden.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className={inputCls}
          placeholder="Ihr Name *"
          required
          value={f.name}
          onChange={(e) => set("name", e.target.value)}
        />
        <input
          type="email"
          className={inputCls}
          placeholder="E-Mail *"
          required
          value={f.email}
          onChange={(e) => set("email", e.target.value)}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className={inputCls}
          placeholder="Fläche (m²) *"
          required
          inputMode="decimal"
          value={f.flaeche}
          onChange={(e) => set("flaeche", e.target.value)}
        />
        <input
          className={inputCls}
          placeholder="Ort / PLZ des Objekts *"
          required
          value={f.ort}
          onChange={(e) => set("ort", e.target.value)}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className={`${inputCls} sm:col-span-2`}
          placeholder="Gewünschter Start (optional)"
          value={f.start}
          onChange={(e) => set("start", e.target.value)}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <select
          className={inputCls}
          value={f.objektart}
          onChange={(e) => set("objektart", e.target.value)}
        >
          <option>Büro</option>
          <option>Praxis</option>
          <option>Kita</option>
          <option>Sanitär</option>
          <option>Sonstiges</option>
        </select>
        <select
          className={inputCls}
          value={f.frequenz}
          onChange={(e) => set("frequenz", e.target.value)}
        >
          <option value="taeglich">täglich</option>
          <option value="woechentlich">wöchentlich</option>
          <option value="individuell">individuell</option>
        </select>
      </div>

      <textarea
        className={`${inputCls} min-h-28`}
        placeholder="Kurze Nachricht (optional)"
        value={f.nachricht}
        onChange={(e) => set("nachricht", e.target.value)}
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-[#1B4F72] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1B4F72]/20 transition hover:bg-[#163f5b]"
      >
        {status === "sending" ? "Wird gesendet..." : "Angebot anfragen"}
      </button>
      {statusMessage ? (
        <p
          className={`text-sm ${
            status === "success" ? "text-emerald-700" : "text-rose-700"
          }`}
        >
          {statusMessage}
        </p>
      ) : null}
    </form>
  );
}
