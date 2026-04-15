"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

type SubpageHeroProps = {
  badge?: string;
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  ctaHref?: string;
  ctaLabel?: string;
  showBubbles?: boolean;
};

export default function SubpageHero({
  badge,
  title,
  description,
  imageSrc,
  imageAlt,
  ctaHref,
  ctaLabel,
  showBubbles = false,
}: SubpageHeroProps) {
  return (
    <section className="relative min-h-[580px] overflow-hidden bg-[#1B4F72] lg:min-h-[640px]">
      {showBubbles ? (
        <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
          <motion.div
            animate={{ opacity: [0.16, 0.32, 0.16], scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[44%] top-[36%] z-30 h-8 w-8 rounded-full bg-white/40 blur-[1px]"
          />
          <motion.div
            animate={{ opacity: [0.1, 0.24, 0.1], scale: [1, 1.08, 1] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute left-[48%] top-[31%] z-30 h-3.5 w-3.5 rounded-full bg-white/60"
          />
          <motion.div
            animate={{ opacity: [0.09, 0.2, 0.09], x: [0, -3, 0], y: [0, -4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="absolute left-[41.5%] top-[41%] z-30 h-2.5 w-2.5 rounded-full bg-white/65"
          >
            <div className="h-full w-full rounded-full bg-white/65" />
          </motion.div>
          <motion.div
            animate={{ x: [0, 8, 0], y: [0, -12, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[8%] top-[22%] hidden opacity-25 lg:block"
          >
            <Image
              src="/images/bubbles-2.png"
              alt=""
              width={125}
              height={324}
              className="h-44 w-auto"
            />
          </motion.div>
          <motion.div
            animate={{ x: [0, -8, 0], y: [0, -12, 0] }}
            transition={{ duration: 8.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="absolute left-[41%] top-[52%] hidden opacity-28 lg:block"
          >
            <Image
              src="/images/bubbles-2.png"
              alt=""
              width={125}
              height={324}
              className="h-40 w-auto"
            />
          </motion.div>
        </div>
      ) : null}

      {/* ── Image: flush top + right, large circular curve on left side ── */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="absolute bottom-0 right-0 top-0 z-10 hidden w-[50%] lg:block"
      >
        <div className="relative h-full w-full overflow-hidden rounded-tl-[50%] rounded-bl-[50%]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="50vw"
            className="object-cover"
            preload
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B4F72]/35 via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* ── Text content ── */}
      <div className="relative z-30 mx-auto flex min-h-[580px] w-full max-w-7xl items-center px-4 pt-[7.25rem] pb-16 sm:px-6 lg:min-h-[640px] lg:px-8 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-xl text-white"
        >
          {badge ? (
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-200">
              {badge}
            </p>
          ) : null}
          <h1 className="mt-3 text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-lg text-lg leading-8 text-slate-100">
              {description}
            </p>
          ) : null}
          {ctaHref && ctaLabel ? (
            <Link
              href={ctaHref}
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1B4F72] shadow-lg shadow-black/15 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              {ctaLabel}
            </Link>
          ) : null}
        </motion.div>
      </div>

      {/* ── Mobile image ── */}
      <div className="relative h-72 w-full lg:hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B4F72]/50 to-transparent" />
      </div>
    </section>
  );
}
