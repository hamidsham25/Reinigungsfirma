"use client";

import { FormEvent, useRef, useState } from "react";
import JobCard from "@/components/JobCard";
import Reveal from "@/components/Reveal";
import SubpageHero from "@/components/SubpageHero";
import type { EmailJsBewerbungConfig } from "@/lib/emailjs-config";
import {
  isLikelySpamHoneypot,
  isOutsideRateLimit,
  isTooFast,
  isValidKontakt,
  recordSuccessfulSubmit,
} from "@/lib/form-security";
import { sendBewerbungForm } from "@/lib/emailjs";
import PrivacyConsentField from "@/components/PrivacyConsentField";
import { jobs } from "@/lib/content";

const MIN_MS_BEFORE_SEND = 2500;
const RATE_LIMIT_MS = 45_000;

type JobsPageClientProps = {
  emailJsBewerbung: EmailJsBewerbungConfig | null;
};

type Bewerbung = {
  name: string;
  kontakt: string;
  erfahrung: string;
  fuehrerschein: "Ja" | "Nein";
  verfuegbarkeit: "Teilzeit" | "Minijob";
  wohnort: string;
  nachricht: string;
};

const initialForm: Bewerbung = {
  name: "",
  kontakt: "",
  erfahrung: "",
  fuehrerschein: "Nein",
  verfuegbarkeit: "Teilzeit",
  wohnort: "",
  nachricht: "",
};

const MAX_PDF_BYTES = 3 * 1024 * 1024;

const fieldCls =
  "w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#1B4F72]";

export default function JobsPageClient({ emailJsBewerbung }: JobsPageClientProps) {
  const [formData, setFormData] = useState<Bewerbung>(initialForm);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const openedAtRef = useRef<number>(
    typeof performance !== "undefined" ? performance.now() : Date.now()
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage("");

    if (honeypotRef.current && isLikelySpamHoneypot(honeypotRef.current.value)) {
      setStatus("success");
      setStatusMessage("Danke! Ihre Bewerbung wurde gesendet.");
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

    if (!isOutsideRateLimit("job", RATE_LIMIT_MS)) {
      setStatus("error");
      setStatusMessage(
        "Sie haben kürzlich bereits eine Bewerbung gesendet. Bitte später erneut versuchen."
      );
      return;
    }

    const nameTrim = formData.name.trim();
    if (nameTrim.length < 2) {
      setStatus("error");
      setStatusMessage("Bitte geben Sie Ihren Namen ein (mindestens 2 Zeichen).");
      return;
    }

    if (!isValidKontakt(formData.kontakt)) {
      setStatus("error");
      setStatusMessage(
        "Bitte geben Sie eine gültige Telefonnummer oder E-Mail-Adresse ein."
      );
      return;
    }

    const file = fileInputRef.current?.files?.[0];
    if (file) {
      const isPdf =
        file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
      if (!isPdf) {
        setStatus("error");
        setStatusMessage("Bitte nur eine PDF-Datei anhängen.");
        return;
      }
      if (file.size > MAX_PDF_BYTES) {
        setStatus("error");
        setStatusMessage(
          `Die PDF-Datei darf höchstens ${MAX_PDF_BYTES / (1024 * 1024)} MB groß sein.`
        );
        return;
      }
    }

    if (!privacyAccepted) {
      setStatus("error");
      setStatusMessage(
        "Bitte bestätigen Sie die Kenntnisnahme der Datenschutzerklärung (Abschnitt Bewerbungen)."
      );
      return;
    }

    const formEl = formRef.current;
    if (!formEl) return;

    setStatus("sending");
    try {
      if (!emailJsBewerbung) {
        throw new Error(
          "EmailJS ist nicht konfiguriert. Bitte .env.local prüfen und den Server neu starten."
        );
      }
      await sendBewerbungForm(formEl, emailJsBewerbung);
      recordSuccessfulSubmit("job");
      setStatus("success");
      setStatusMessage("Danke! Ihre Bewerbung wurde gesendet.");
      setFormData(initialForm);
      setPrivacyAccepted(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Die Bewerbung konnte nicht gesendet werden. Bitte versuchen Sie es erneut."
      );
    }
  };

  return (
    <main className="bg-white">
      <SubpageHero
        badge="Stellenangebote"
        title="Werde Teil unseres Teams"
        description="Faire Bezahlung, flexible Arbeitszeiten und ein verlässliches Team in Hannover und Region."
        imageSrc="/images/warum-image.jpg"
        imageAlt="Mitarbeiter im Gebäudeservice"
        ctaHref="#bewerbung"
        ctaLabel="Jetzt bewerben"
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {jobs.map((job) => (
              <JobCard
                key={job.key}
                title={job.title}
                badge={job.badge}
                bullets={job.bullets}
                buttonLabel="Zur Bewerbung"
                buttonHref="#bewerbung"
              />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-[#F5F5F5]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-semibold text-slate-900">Was wir bieten</h2>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>- Ab 16 EUR / Std.</li>
              <li>- Flexible Zeiten</li>
              <li>- Abwechslungsreiche Einsatzorte</li>
              <li>- Professionelle Einarbeitung</li>
              <li>- Freundliches Team</li>
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-semibold text-slate-900">Was wir erwarten</h2>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>- Erfahrung von Vorteil</li>
              <li>- Zuverlässigkeit</li>
              <li>- Selbstständiges Arbeiten</li>
              <li>- Gepflegtes Auftreten</li>
              <li>- Körperliche Belastbarkeit</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="bewerbung" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-semibold text-slate-900">Jetzt bewerben</h2>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="relative mt-8 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <input type="hidden" name="form_type" defaultValue="bewerbung" />

            <input
              ref={honeypotRef}
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="pointer-events-none absolute -left-[9999px] h-px w-px opacity-0"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="name"
                className={fieldCls}
                placeholder="Name"
                required
                maxLength={120}
                autoComplete="name"
                value={formData.name}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, name: event.target.value }))
                }
              />
              <input
                name="kontakt"
                className={fieldCls}
                placeholder="Telefon oder E-Mail"
                required
                maxLength={200}
                autoComplete="tel"
                inputMode="tel"
                value={formData.kontakt}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, kontakt: event.target.value }))
                }
              />
            </div>

            <textarea
              name="erfahrung"
              className={`min-h-24 ${fieldCls}`}
              placeholder="Erfahrung in der Reinigung (optional)"
              maxLength={3000}
              value={formData.erfahrung}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, erfahrung: event.target.value }))
              }
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <select
                name="fuehrerschein"
                className={fieldCls}
                value={formData.fuehrerschein}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    fuehrerschein: event.target.value as "Ja" | "Nein",
                  }))
                }
              >
                <option value="Ja">Führerschein: Ja</option>
                <option value="Nein">Führerschein: Nein</option>
              </select>
              <select
                name="verfuegbarkeit"
                className={fieldCls}
                value={formData.verfuegbarkeit}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    verfuegbarkeit: event.target.value as "Teilzeit" | "Minijob",
                  }))
                }
              >
                <option value="Teilzeit">Verfügbarkeit: Teilzeit</option>
                <option value="Minijob">Verfügbarkeit: Minijob</option>
              </select>
            </div>

            <input
              name="wohnort"
              className={fieldCls}
              placeholder="Wohnort"
              maxLength={120}
              autoComplete="address-level2"
              value={formData.wohnort}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, wohnort: event.target.value }))
              }
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Lebenslauf oder Referenzen (optional, PDF, max. 3 MB)
              </label>
              <input
                ref={fileInputRef}
                type="file"
                name="bewerbung_anhang"
                accept="application/pdf,.pdf"
                className={`${fieldCls} cursor-pointer text-slate-600 file:mr-4 file:rounded-md file:border-0 file:bg-slate-100 file:px-3 file:py-2 file:text-sm file:font-medium file:text-slate-800`}
              />
            </div>

            <textarea
              name="nachricht"
              className={`min-h-24 ${fieldCls}`}
              placeholder="Kurze Nachricht"
              maxLength={4000}
              value={formData.nachricht}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, nachricht: event.target.value }))
              }
            />

            <PrivacyConsentField
              variant="application"
              checked={privacyAccepted}
              onChange={setPrivacyAccepted}
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-lg bg-[#1B4F72] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#163f5b] disabled:opacity-70"
            >
              {status === "sending" ? "Wird gesendet..." : "Bewerbung absenden"}
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
        </Reveal>
      </section>
    </main>
  );
}
