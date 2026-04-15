"use client";

import Link from "next/link";
import { motion } from "motion/react";

type JobCardProps = {
  title: string;
  badge: string;
  bullets: string[];
  buttonLabel?: string;
  buttonHref?: string;
};

export default function JobCard({
  title,
  badge,
  bullets,
  buttonLabel = "Jetzt bewerben",
  buttonHref = "/jobs#bewerbung",
}: JobCardProps) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.22 }}
      className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-[#1B4F72]/30 hover:shadow-xl hover:shadow-[#1B4F72]/10"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-bold tracking-tight text-slate-900">{title}</h3>
        <span className="whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600">
          {badge}
        </span>
      </div>
      <ul className="mt-5 space-y-2.5 text-sm text-slate-600">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2">
            <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#1B4F72]" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <Link
        href={buttonHref}
        className="mt-6 inline-flex rounded-lg bg-[#1B4F72] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#163f5b]"
      >
        {buttonLabel} {" "}&rarr;
      </Link>
    </motion.article>
  );
}
