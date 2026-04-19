import type { Metadata } from "next";
import { unstable_noStore as noStore } from "next/cache";
import HomePage from "@/components/HomePage";
import { getEmailJsLeadConfig } from "@/lib/emailjs-config";
import { createPageMetadata } from "@/lib/seo";

/** Jede Anfrage liest .env.local neu – verhindert gecachte „kein EmailJS“ nach leerem ersten Build. */
export const dynamic = "force-dynamic";

export const metadata: Metadata = createPageMetadata({
  title:
    "Gebäudereinigung Hannover für Büro, Praxis, Kita und Sanitär | Angebot in 24h",
  description:
    "REIN Gebäudeservice bietet gründliche Gebäudereinigung in Hannover und Region. Jetzt unverbindlich anfragen und Ihr individuelles Angebot innerhalb von 24 Stunden erhalten.",
  path: "/",
  keywords: [
    "professionelle Gebäudereinigung Hannover",
    "Reinigung Angebot 24 Stunden",
    "Unterhaltsreinigung Büro und Praxis",
  ],
});

export default function Home() {
  noStore();
  const emailJsLead = getEmailJsLeadConfig();
  return <HomePage emailJsLead={emailJsLead} />;
}
