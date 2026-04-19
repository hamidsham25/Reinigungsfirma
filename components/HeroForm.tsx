"use client";

import { FormEvent, useRef, useState } from "react";
import type { EmailJsLeadConfig } from "@/lib/emailjs-config";
import {
  isLikelySpamHoneypot,
  isOutsideRateLimit,
  isTooFast,
  isValidEmail,
  parseFlaecheM2,
  recordSuccessfulSubmit,
} from "@/lib/form-security";
import { sendLeadEmail } from "@/lib/emailjs";
import PrivacyConsentField from "@/components/PrivacyConsentField";

const MIN_MS_BEFORE_SEND = 2500;
const RATE_LIMIT_MS = 45_000;

type HeroFormProps = {
  emailJs: EmailJsLeadConfig | null;
};

export default function HeroForm({ emailJs }: HeroFormProps) {
  const [objektart, setObjektart] = useState("");
  const [name, setName] = useState("");
  const [flaeche, setFlaeche] = useState("");
  const [email, setEmail] = useState("");
  const [nachricht, setNachricht] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState("");
  const honeypotRef = useRef<HTMLInputElement>(null);
  const openedAtRef = useRef<number>(
    typeof performance !== "undefined" ? performance.now() : Date.now()
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage("");

    if (honeypotRef.current && isLikelySpamHoneypot(honeypotRef.current.value)) {
      setStatus("success");
      setStatusMessage("Danke! Ihre Anfrage wurde erfolgreich gesendet.");
      return;
    }

    const elapsed =
      typeof performance !== "undefined"
        ? performance.now() - openedAtRef.current
        : Date.now() - openedAtRef.current;
    if (isTooFast(elapsed, MIN_MS_BEFORE_SEND)) {
      setStatus("error");
      setStatusMessage("Bitte prüfen Sie die Eingaben kurz und senden Sie erneut.");
      return;
    }

    if (!isOutsideRateLimit("hero", RATE_LIMIT_MS)) {
      setStatus("error");
      setStatusMessage(
        "Sie haben kürzlich bereits eine Anfrage gesendet. Bitte etwas später erneut versuchen."
      );
      return;
    }

    if (!isValidEmail(email)) {
      setStatus("error");
      setStatusMessage("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }

    const flaecheNum = parseFlaecheM2(flaeche);
    if (flaecheNum === null) {
      setStatus("error");
      setStatusMessage(
        "Bitte geben Sie die Fläche als positive Zahl ein (z. B. 120 oder 85,5)."
      );
      return;
    }

    if (!privacyAccepted) {
      setStatus("error");
      setStatusMessage(
        "Bitte bestätigen Sie die Kenntnisnahme der Datenschutzerklärung."
      );
      return;
    }

    setStatus("sending");

    try {
      if (!emailJs) {
        throw new Error(
          "EmailJS ist nicht konfiguriert. Bitte .env.local prüfen und den Server neu starten."
        );
      }
      await sendLeadEmail(
        {
          form_type: "hero-schnellanfrage",
          name: name.trim(),
          email: email.trim(),
          flaeche_m2: String(flaecheNum),
          objektart,
          ort: "Nicht angegeben",
          frequenz: "Nicht angegeben",
          start: "Nicht angegeben",
          nachricht: (nachricht || "Keine Nachricht").trim(),
        },
        emailJs
      );

      recordSuccessfulSubmit("hero");
      setStatus("success");
      setStatusMessage("Danke! Ihre Anfrage wurde erfolgreich gesendet.");
      setObjektart("");
      setName("");
      setFlaeche("");
      setEmail("");
      setNachricht("");
      setPrivacyAccepted(false);
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

      <div className="relative mt-6 space-y-3.5">
        <input
          ref={honeypotRef}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 h-px w-px opacity-0"
        />
        <input
          type="text"
          required
          maxLength={120}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ihr Name *"
          className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-[#1B4F72] focus:ring-2 focus:ring-[#1B4F72]/15"
        />
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            maxLength={254}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-Mail *"
            className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-[#1B4F72] focus:ring-2 focus:ring-[#1B4F72]/15"
          />
          <input
            type="text"
            required
            maxLength={12}
            value={flaeche}
            onChange={(e) => setFlaeche(e.target.value)}
            placeholder="Fläche (m²) *"
            inputMode="decimal"
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
          maxLength={4000}
          className="min-h-24 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-[#1B4F72] focus:ring-2 focus:ring-[#1B4F72]/15"
        />
        <PrivacyConsentField
          variant="contact"
          checked={privacyAccepted}
          onChange={setPrivacyAccepted}
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
