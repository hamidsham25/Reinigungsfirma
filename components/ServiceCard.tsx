"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

export default function ServiceCard({
  icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <Link href={href} className="block">
      <motion.article
        whileHover={{ y: -5 }}
        transition={{ duration: 0.22 }}
        className="group cursor-pointer rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition hover:border-[#1B4F72]/35 hover:shadow-xl hover:shadow-[#1B4F72]/10"
      >
        <Image
          src={icon}
          alt=""
          width={56}
          height={56}
          className="h-14 w-14 object-contain"
        />
        <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          {description}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1B4F72] transition group-hover:gap-3">
          Mehr erfahren
          <span>&rarr;</span>
        </span>
      </motion.article>
    </Link>
  );
}
