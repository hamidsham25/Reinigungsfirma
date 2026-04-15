"use client";

import Image from "next/image";
import { motion } from "motion/react";

const trustItems = [
  {
    marker: "01",
    title: "Erfahrung & Fachkompetenz",
    description: "Über 10 Jahre Erfahrung in Büro-, Praxis- und Kita-Reinigung.",
  },
  {
    marker: "02",
    title: "Zuverlässigkeit & Qualität",
    description: "Pünktlich, gründlich und konstant – darauf können Sie sich verlassen.",
  },
  {
    marker: "03",
    title: "Flexibilität & Service",
    description: "Individuelle Reinigungspläne und flexible Einsatzzeiten.",
  },
  {
    marker: "04",
    title: "Starkes Preis-Leistungs-Verhältnis",
    description: "Faire, transparente Preise ohne versteckte Zusatzkosten.",
  },
];

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-[#1B4F72] py-20 text-white">
      <Image
        src="/images/warum-image.jpg"
        alt="Warum REIN Hintergrund"
        fill
        sizes="100vw"
        className="object-cover opacity-[0.18]"
      />
      <div className="absolute inset-0 bg-[#1B4F72]/72" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
            Warum REIN
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Warum REIN Gebäudeservice?
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-xs font-bold">
                {item.marker}
              </span>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-100/95">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
