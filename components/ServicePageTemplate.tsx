"use client";

import Link from "next/link";
import { ServiceItem, services } from "@/lib/content";
import Reveal from "./Reveal";
import SubpageHero from "./SubpageHero";

type ServicePageTemplateProps = {
  service: ServiceItem;
};

const heroImageMap: Record<ServiceItem["key"], string> = {
  buero: "/images/buero-hero.jpg",
  praxis: "/images/about-us.png",
  kita: "/images/kita-hero.jpg",
  sanitaer: "/images/random-image.jpg",
};

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const related = services.filter((item) => item.key !== service.key).slice(0, 3);

  return (
    <main>
      <SubpageHero
        badge="Leistungen"
        title={service.title}
        description={service.intro}
        imageSrc={heroImageMap[service.key]}
        imageAlt={`${service.title} Hero`}
        ctaHref="/#kontakt"
        ctaLabel="Angebot anfragen"
        showBubbles
      />

      {/* ── Leistungsumfang ── */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Leistungsumfang im Überblick
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {service.details.map((detail) => (
              <li
                key={detail}
                className="rounded border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
              >
                {detail}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-slate-200 bg-slate-50">
        <Reveal className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-[#1B4F72] px-6 py-10 text-center text-white sm:px-10">
            <h3 className="text-2xl font-bold sm:text-3xl">
              Jetzt Angebot anfragen
            </h3>
            <p className="mt-3 text-slate-200">
              Wir erstellen ein individuelles Reinigungskonzept für Ihr Objekt.
            </p>
            <Link
              href="/#kontakt"
              className="mt-6 inline-flex rounded bg-white px-5 py-2.5 text-sm font-semibold text-[#1B4F72] transition hover:bg-slate-100"
            >
              Zum Kontaktformular
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── Weitere Leistungen ── */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Weitere Leistungen
          </h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="rounded-lg border border-slate-200 bg-white p-5 transition hover:border-[#1B4F72]/30 hover:shadow-md"
              >
                <p className="text-base font-semibold text-slate-900">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  {item.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
