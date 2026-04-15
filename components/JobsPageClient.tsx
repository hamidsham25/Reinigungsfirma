"use client";

import { FormEvent, useState } from "react";
import JobCard from "@/components/JobCard";
import Reveal from "@/components/Reveal";
import SubpageHero from "@/components/SubpageHero";
import { jobs } from "@/lib/content";

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

export default function JobsPageClient() {
  const [formData, setFormData] = useState<Bewerbung>(initialForm);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Job Bewerbung", formData);
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
            onSubmit={handleSubmit}
            className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#1B4F72]"
                placeholder="Name"
                required
                value={formData.name}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, name: event.target.value }))
                }
              />
              <input
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#1B4F72]"
                placeholder="Kontaktdaten"
                required
                value={formData.kontakt}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, kontakt: event.target.value }))
                }
              />
            </div>

            <textarea
              className="min-h-24 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#1B4F72]"
              placeholder="Erfahrung in der Reinigung"
              value={formData.erfahrung}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, erfahrung: event.target.value }))
              }
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <select
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#1B4F72]"
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
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#1B4F72]"
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
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#1B4F72]"
              placeholder="Wohnort"
              value={formData.wohnort}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, wohnort: event.target.value }))
              }
            />

            <textarea
              className="min-h-24 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#1B4F72]"
              placeholder="Kurze Nachricht"
              value={formData.nachricht}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, nachricht: event.target.value }))
              }
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-[#1B4F72] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#163f5b]"
            >
              Bewerbung absenden
            </button>
          </form>
        </Reveal>
      </section>
    </main>
  );
}
