"use client";

import Image from "next/image";
import Link from "next/link";
import { MouseEvent } from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleStartseiteClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!isHome) return;

    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (window.location.hash) {
      window.history.replaceState(null, "", "/");
    }
  };

  return (
    <footer className="bg-[#1B4F72] text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Image
            src="/images/logo_white.png"
            alt="REIN Gebäudeservice Logo"
            width={420}
            height={124}
            className="h-24 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm text-slate-200">
            REIN Gebäudeservice – Professionelle Gebäudereinigung für
            Unternehmen in Hannover und Region.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-300">
            Navigation
          </h3>
          <div className="mt-4 space-y-2 text-sm">
            <Link
              href="/"
              onClick={handleStartseiteClick}
              className="block text-slate-100 hover:text-white"
            >
              Startseite
            </Link>
            <Link href="/#ueber-uns" className="block text-slate-100 hover:text-white">
              Über uns
            </Link>
            <Link href="/jobs" className="block text-slate-100 hover:text-white">
              Stellenangebote
            </Link>
            <Link href="/#kontakt" className="block text-slate-100 hover:text-white">
              Kontakt
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-300">
            Leistungen
          </h3>
          <div className="mt-4 space-y-2 text-sm">
            <Link href="/leistungen/buero" className="block text-slate-100 hover:text-white">
              Büroreinigung
            </Link>
            <Link href="/leistungen/praxis" className="block text-slate-100 hover:text-white">
              Praxisreinigung
            </Link>
            <Link href="/leistungen/kita" className="block text-slate-100 hover:text-white">
              Kita-Reinigung
            </Link>
            <Link href="/leistungen/sanitaer" className="block text-slate-100 hover:text-white">
              Sanitärreinigung
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-300">
            Kontakt
          </h3>
          <div className="mt-4 space-y-2 text-sm text-slate-100">
            <p>info@rein-gebaeudeservice.de</p>
            <p>Westerriede 3</p>
            <p>30966 Hemmingen</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-4 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="flex gap-4">
            <Link href="/impressum" className="hover:text-white">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white">
              Datenschutz
            </Link>
          </div>
          <p>&copy; {currentYear} REIN Gebäudeservice</p>
        </div>
      </div>
    </footer>
  );
}
