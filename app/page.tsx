import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { createPageMetadata } from "@/lib/seo";

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
  return <HomePage />;
}
