"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import ContactForm from "@/components/ContactForm";
import HeroForm from "@/components/HeroForm";
import JobCard from "@/components/JobCard";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import TrustSection from "@/components/TrustSection";
import type { EmailJsLeadConfig } from "@/lib/emailjs-config";
import { jobs, services } from "@/lib/content";

const serviceIcons: Record<string, string> = {
  buero: "/images/mobgraph.png",
  praxis: "/images/sweepgraph.png",
  kita: "/images/bucketgraph.png",
  sanitaer: "/images/toilettgraph.png",
};

const strengthsShowcase = [
  {
    step: "01",
    title: "Start mit Objektanalyse",
    text: "Wir erfassen Ihr Objekt, Ihre Prioritäten und alle sensiblen Bereiche.",
    tone: "light",
  },
  {
    step: "02",
    title: "Maßgeschneiderter Plan",
    text: "Sie erhalten feste Reinigungsabläufe mit klaren Zeiten und Ansprechpartnern.",
    tone: "brand",
  },
  {
    step: "03",
    title: "Konstante Qualität",
    text: "Unser Team arbeitet zuverlässig nach Standards mit regelmäßiger Kontrolle.",
    tone: "brand",
  },
  {
    step: "04",
    title: "Flexibler Service",
    text: "Wir reagieren schnell auf Änderungen, Sonderreinigungen und neue Bedarfe.",
    tone: "light",
  },
] as const;

type HomePageProps = {
  emailJsLead: EmailJsLeadConfig | null;
};

export default function HomePage({ emailJsLead }: HomePageProps) {
  return (
    <main className="bg-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#1B4F72]">
        <Image
          src="/images/hero-image.png"
          alt="Professionelle Gebäudereinigung in Hannover"
          fill
          sizes="100vw"
          priority
          className="scale-[1.03] object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B4F72]/60 via-[#1B4F72]/35 to-[#1B4F72]/20" />
        <div className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center gap-10 px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 2xl:min-h-[110vh]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl text-white"
          >
            <p className="flex w-fit max-w-full flex-col gap-1 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[0.6875rem] uppercase leading-snug tracking-[0.14em] text-slate-200 sm:inline-flex sm:flex-row sm:items-center sm:gap-2 sm:py-1.5 sm:text-xs sm:tracking-[0.22em]">
              <span className="font-extrabold whitespace-nowrap text-[#FFA400]">
                REIN Gebäudeservice
              </span>
              <span className="font-semibold whitespace-nowrap text-slate-100">
                – Hannover & Region
              </span>
            </p>
            <h1 className="mt-7 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              Vertrauen durch Sauberkeit
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-8 text-slate-100">
              Professionelle Gebäudereinigung für Büros, Praxen & Kitas.
              Zuverlässig, gründlich, fair.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/#kontakt"
                className="rounded-full bg-[#FFA400] px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-[#FFA400]/35 transition hover:-translate-y-0.5 hover:bg-[#E59400]"
              >
                Angebot anfragen
              </Link>
              <Link
                href="/#leistungen"
                className="rounded-full border border-white bg-white px-6 py-3 text-sm font-semibold text-[#1B4F72] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-lg hover:shadow-white/25"
              >
                Leistungen ansehen
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 90 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="w-full lg:ml-auto lg:max-w-md"
          >
            <HeroForm emailJs={emailJsLead} />
          </motion.div>
        </div>
      </section>

      {/* ── Leistungen ── */}
      <section
        id="leistungen"
        className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
      >
        <Reveal>
          <h2 className="text-center text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Unsere Leistungen
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <ServiceCard
                key={service.key}
                icon={serviceIcons[service.key] ?? ""}
                title={service.title}
                description={service.shortDescription}
                href={service.href}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/#kontakt"
              className="inline-flex rounded-lg bg-[#1B4F72] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1B4F72]/20 transition hover:bg-[#163f5b]"
            >
              Jetzt Angebot anfragen
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── Über uns ── */}
      <section id="ueber-uns" className="border-t border-slate-200 bg-[#F5F7FA] py-24">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1B4F72]">
              Über uns
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Reinigung mit Haltung und System
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Mit über 10 Jahren Erfahrung in der professionellen
              Gebäudereinigung kennen wir die Anforderungen unterschiedlichster
              Objekte genau – von Büros über Arztpraxen bis hin zu Kitas.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative min-h-[420px] overflow-hidden rounded-3xl shadow-2xl shadow-[#1B4F72]/15">
              <Image
                src="/images/about-us.png"
                alt="Team von REIN Gebäudeservice bei der professionellen Büroreinigung"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B4F72]/30 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Warum REIN ── */}
      <TrustSection />

      {/* ── Unsere Stärken (Ablauf) ── */}
      <section className="bg-white py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-[#1B4F72]">
              Unsere Stärken
            </p>
            <h2 className="mt-3 text-center text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Strukturierter Ablauf für konstante Qualität
            </h2>
          </Reveal>

          {/* Mobile: gestapelt */}
          <div className="mt-10 grid gap-4 lg:hidden">
            {strengthsShowcase.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`rounded-none rounded-br-3xl p-6 shadow-md ${
                  item.tone === "brand"
                    ? "bg-[#1B4F72] text-white"
                    : "border border-slate-200 bg-white text-slate-900"
                }`}
              >
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-lg text-base font-bold ${
                    item.tone === "brand"
                      ? "bg-white/20 text-white"
                      : "bg-[#1B4F72]/10 text-[#1B4F72]"
                  }`}
                >
                  {item.step}
                </span>
                <h3 className="mt-4 text-2xl font-bold tracking-tight">
                  {item.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-7 ${
                    item.tone === "brand" ? "text-white/90" : "text-slate-600"
                  }`}
                >
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>

          {/* Desktop: Bild in der Mitte, Cards um das Bild herum */}
          <div className="relative mt-14 hidden min-h-[580px] lg:block">
            <div className="absolute left-1/2 top-1/2 h-[540px] w-[400px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-t-[2.5rem] rounded-b-2xl shadow-2xl shadow-black/15">
              <Image
                src="/images/random-image.jpg"
                alt="Professioneller Reinigungsablauf"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover"
              />
            </div>

            {strengthsShowcase.map((item, index) => {
              const cardPositions = [
                "left-0 top-0",
                "right-0 top-8",
                "left-0 bottom-4",
                "right-0 bottom-0",
              ];
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className={`absolute w-[38%] rounded-none rounded-br-[2rem] p-6 shadow-xl ${
                    cardPositions[index]
                  } ${
                    item.tone === "brand"
                      ? "bg-[#1B4F72] text-white"
                      : "border border-slate-200 bg-white text-slate-900"
                  }`}
                >
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-lg text-base font-bold ${
                      item.tone === "brand"
                        ? "bg-white/20 text-white"
                        : "bg-[#1B4F72]/10 text-[#1B4F72]"
                    }`}
                  >
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-3xl font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-7 ${
                      item.tone === "brand" ? "text-white/90" : "text-slate-600"
                    }`}
                  >
                    {item.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Karriere ── */}
      <section className="bg-[#F5F7FA]">
        <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1B4F72]">
                  Karriere
                </p>
                <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Werde Teil unseres Teams
                </h2>
              </div>
              <Link
                href="/jobs"
                className="rounded-full border border-[#1B4F72]/25 px-5 py-2 text-sm font-semibold text-[#1B4F72] transition hover:bg-[#1B4F72] hover:text-white"
              >
                Alle Stellenangebote
              </Link>
            </div>
            <p className="mt-5 max-w-3xl text-slate-600">
              Faire Bezahlung ab 16 EUR / Stunde – Flexible Arbeitszeiten –
              Hannover & Region.
            </p>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {jobs.map((job) => (
                <JobCard
                  key={job.key}
                  title={job.title}
                  badge={job.badge}
                  bullets={job.bullets}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Kontakt ── */}
      <section
        id="kontakt"
        className="bg-gradient-to-br from-[#102d44] via-[#1B4F72] to-[#225f88]"
      >
        <div className="mx-auto w-full max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-slate-200">
              Kontakt
            </p>
            <h2 className="mt-3 text-center text-4xl font-bold text-white sm:text-5xl">
              Ihr Angebot in 24 Stunden
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-center text-slate-100">
              Teilen Sie uns die wichtigsten Eckdaten mit – wir melden uns
              innerhalb von 24 Stunden zurück.
            </p>
            <div className="mt-10">
              <ContactForm emailJs={emailJsLead} />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
