"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const serviceLinks = [
  { href: "/leistungen/buero", label: "Büro" },
  { href: "/leistungen/praxis", label: "Praxis" },
  { href: "/leistungen/kita", label: "Kita" },
  { href: "/leistungen/sanitaer", label: "Sanitär" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isLegalPage =
    pathname === "/impressum" || pathname === "/datenschutz";
  const phoneHref = "tel:+495111234567";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isTransparent = !isLegalPage && !isScrolled;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-200/80 bg-white/95 shadow-lg shadow-[#1B4F72]/10 backdrop-blur-xl"
          : isTransparent
            ? "border-b border-transparent bg-transparent"
            : "border-b border-slate-200/80 bg-white/95"
      }`}
    >
      <nav className="mx-auto flex h-[7.25rem] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="relative flex h-[6rem] w-[20rem] items-center">
          <Image
            src="/images/logo_white.png"
            alt="REIN Gebäudeservice Logo"
            width={430}
            height={128}
            priority
            className={`absolute left-0 h-[6rem] w-auto transition-opacity duration-300 ${
              isTransparent ? "opacity-100" : "opacity-0"
            }`}
          />
          <Image
            src="/images/logo-transparent.png"
            alt="REIN Gebäudeservice Logo"
            width={430}
            height={128}
            className={`absolute left-0 h-[6rem] w-auto transition-opacity duration-300 ${
              isTransparent ? "opacity-0" : "opacity-100"
            }`}
          />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={`text-sm font-semibold uppercase tracking-wide transition ${
                isTransparent
                  ? "text-white hover:text-slate-200"
                  : "text-slate-700 hover:text-[#1B4F72]"
              }`}
            >
              <span className="inline-flex items-center gap-1.5">
                Leistungen
                <span
                  className={`text-[10px] transition-transform duration-200 ${
                    dropdownOpen ? "translate-y-[1px] rotate-180" : "translate-y-[1px]"
                  }`}
                >
                  ▼
                </span>
              </span>
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-8 w-48 rounded border border-slate-200 bg-white py-1 shadow-lg"
                >
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-[#1B4F72]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link
            href="/#ueber-uns"
            className={`text-sm font-semibold uppercase tracking-wide transition ${
              isTransparent
                ? "text-white hover:text-slate-200"
                : "text-slate-700 hover:text-[#1B4F72]"
            }`}
          >
            Über uns
          </Link>
          <Link
            href="/jobs"
            className={`text-sm font-semibold uppercase tracking-wide transition ${
              isTransparent
                ? "text-white hover:text-slate-200"
                : "text-slate-700 hover:text-[#1B4F72]"
            }`}
          >
            Stellenangebote
          </Link>
          <Link
            href="/#kontakt"
            className={`text-sm font-semibold uppercase tracking-wide transition ${
              isTransparent
                ? "text-white hover:text-slate-200"
                : "text-slate-700 hover:text-[#1B4F72]"
            }`}
          >
            Kontakt
          </Link>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={phoneHref}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold transition hover:-translate-y-0.5 ${
              isTransparent
                ? "border border-white/60 bg-white/15 text-white hover:bg-white/25"
                : "border border-[#1B4F72]/20 bg-white text-[#1B4F72] shadow-lg shadow-[#1B4F72]/10 hover:bg-slate-50"
            }`}
            aria-label="Jetzt anrufen"
          >
            <span aria-hidden>📞</span>
          </Link>
          <Link
            href="/#kontakt"
            className={`rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${
              isTransparent
                ? "border border-white/60 bg-white/15 text-white hover:bg-white/25"
                : "bg-[#1B4F72] text-white shadow-lg shadow-[#1B4F72]/25 hover:bg-[#163f5b]"
            }`}
          >
            Angebot anfragen
          </Link>
        </div>

        <button
          aria-label="Menü öffnen"
          onClick={() => setMobileOpen((prev) => !prev)}
          className={`flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
            isTransparent
              ? "border border-white/60 text-white"
              : "border border-slate-200 text-slate-700"
          }`}
        >
          <span className="sr-only">Menü</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-white p-6 lg:hidden"
          >
            <div className="mb-8 flex items-center justify-between">
              <Image
                src="/images/logo-transparent.png"
                alt={"REIN Geb\u00e4udeservice Logo"}
                width={300}
                height={90}
                className="h-[3.7rem] w-auto"
              />
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded border border-slate-300 px-3 py-1 text-sm text-slate-600"
              >
                Schließen
              </button>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Leistungen
              </p>
              {serviceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-medium text-slate-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-6 space-y-3 border-t border-slate-200 pt-6">
              <Link
                href="/#ueber-uns"
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium text-slate-700"
              >
                Über uns
              </Link>
              <Link
                href="/jobs"
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium text-slate-700"
              >
                Stellenangebote
              </Link>
              <Link
                href="/#kontakt"
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium text-slate-700"
              >
                Kontakt
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={phoneHref}
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded border border-slate-300 text-base text-slate-700"
                aria-label="Jetzt anrufen"
              >
                <span aria-hidden>📞</span>
              </Link>
              <Link
                href="/#kontakt"
                onClick={() => setMobileOpen(false)}
                className="inline-flex rounded bg-[#1B4F72] px-5 py-2.5 text-sm font-semibold text-white"
              >
                Angebot anfragen
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
