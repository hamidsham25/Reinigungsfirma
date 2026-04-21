"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, useEffect, useRef, useState } from "react";
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
  const isHome = pathname === "/";
  const isLeistungenPage = pathname.startsWith("/leistungen");
  const isJobsPage = pathname === "/jobs";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const isTransparent = !isLegalPage && !isScrolled && !mobileOpen;
  const dropdownCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const clearDropdownCloseTimer = () => {
    if (dropdownCloseTimerRef.current) {
      clearTimeout(dropdownCloseTimerRef.current);
      dropdownCloseTimerRef.current = null;
    }
  };

  const openLeistungenDropdown = () => {
    clearDropdownCloseTimer();
    setDropdownOpen(true);
  };

  const scheduleCloseLeistungenDropdown = () => {
    clearDropdownCloseTimer();
    dropdownCloseTimerRef.current = setTimeout(() => {
      setDropdownOpen(false);
      dropdownCloseTimerRef.current = null;
    }, 220);
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const sections = ["leistungen", "ueber-uns", "kontakt"];
    const updateActiveSection = () => {
      const scrollOffset = window.scrollY + 170;
      let current = "";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && scrollOffset >= section.offsetTop) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [isHome]);

  useEffect(() => () => clearDropdownCloseTimer(), []);

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!isHome) {
      setMobileOpen(false);
      return;
    }

    event.preventDefault();
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (window.location.hash) {
      window.history.replaceState(null, "", "/");
    }
  };

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
      <nav className="relative mx-auto flex h-[7.25rem] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="relative z-20 flex h-[5.6rem] w-[15.5rem] shrink-0 items-center sm:h-[6.2rem] sm:w-[18.5rem] lg:h-[7rem] lg:w-[28.5rem]"
        >
          <Image
            src="/images/logo_white.png"
            alt="REIN Gebäudeservice Logo"
            width={430}
            height={128}
            priority
            loading="eager"
            className={`absolute left-0 h-[5.6rem] w-auto origin-left scale-[1.09] transition-opacity duration-300 sm:h-[6.2rem] sm:scale-[1.16] lg:h-[7rem] lg:scale-[1.44] ${
              isTransparent ? "opacity-100" : "opacity-0"
            }`}
          />
          <Image
            src="/images/logo-transparent.png"
            alt="REIN Gebäudeservice Logo"
            width={430}
            height={128}
            className={`absolute left-0 h-[5.6rem] w-auto origin-left scale-[1.09] transition-opacity duration-300 sm:h-[6.2rem] sm:scale-[1.16] lg:h-[7rem] lg:scale-[1.44] ${
              isTransparent ? "opacity-0" : "opacity-100"
            }`}
          />
        </Link>

        <div className="hidden items-center gap-7 lg:absolute lg:left-1/2 lg:z-10 lg:flex lg:-translate-x-1/2">
          <div
            className="relative"
            onMouseEnter={openLeistungenDropdown}
            onMouseLeave={scheduleCloseLeistungenDropdown}
          >
            <button
              type="button"
              className={`text-sm font-semibold uppercase tracking-wide transition ${
                isLeistungenPage || (isHome && activeSection === "leistungen")
                  ? "text-[#FFA400]"
                  : isTransparent
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
                <div className="absolute left-0 top-full w-48 pt-1.5">
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="rounded border border-slate-200 bg-white py-1 shadow-lg"
                  >
                    {serviceLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-2 text-sm transition hover:bg-slate-50 hover:text-[#FFA400] ${
                          pathname === item.href ? "text-[#FFA400]" : "text-slate-600"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
          <Link
            href="/#ueber-uns"
            className={`text-sm font-semibold uppercase tracking-wide transition ${
              isHome && activeSection === "ueber-uns"
                ? "text-[#FFA400]"
                : isTransparent
                ? "text-white hover:text-slate-200"
                : "text-slate-700 hover:text-[#1B4F72]"
            }`}
          >
            Über uns
          </Link>
          <Link
            href="/jobs"
            className={`text-sm font-semibold uppercase tracking-wide transition ${
              isJobsPage
                ? "text-[#FFA400]"
                : isTransparent
                ? "text-white hover:text-slate-200"
                : "text-slate-700 hover:text-[#1B4F72]"
            }`}
          >
            Stellenangebote
          </Link>
          <Link
            href="/#kontakt"
            className={`text-sm font-semibold uppercase tracking-wide transition ${
              isHome && activeSection === "kontakt"
                ? "text-[#FFA400]"
                : isTransparent
                ? "text-white hover:text-slate-200"
                : "text-slate-700 hover:text-[#1B4F72]"
            }`}
          >
            Kontakt
          </Link>
        </div>

        <div className="hidden items-center lg:flex">
          <Link
            href="/#kontakt"
            className={`rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${
              isTransparent
                ? "border border-[#FFA400]/70 bg-[#FFA400] text-white shadow-lg shadow-[#FFA400]/35 hover:bg-[#E59400]"
                : "bg-[#FFA400] text-white shadow-lg shadow-[#FFA400]/25 hover:bg-[#E59400]"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-x-0 bottom-0 top-[7.25rem] z-40 lg:hidden"
          >
            <div className="absolute inset-0" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.99 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="relative z-10 max-h-[calc(100vh-7.25rem)] overflow-y-auto border-t border-slate-200 bg-white px-6 pt-5 pb-3 shadow-2xl"
            >
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

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/#kontakt"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex rounded bg-[#FFA400] px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Angebot anfragen
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
