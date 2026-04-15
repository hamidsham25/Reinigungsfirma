import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { services } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Kita-Reinigung in Hannover | Kindgerechte Hygiene und Sauberkeit",
  description:
    "Kita-Reinigung in Hannover und Region mit Fokus auf hygienische Sicherheit, materialverträgliche Pflege und verlässliche Reinigungszeiten im laufenden Kita-Betrieb.",
  path: "/leistungen/kita",
  keywords: [
    "Kita Reinigung Hannover",
    "Kindergarten Reinigung",
    "Hygienische Reinigung Betreuungseinrichtungen",
  ],
  image: "/images/kita-hero.jpg",
});

export default function KitaPage() {
  const service = services.find((item) => item.key === "kita");

  if (!service) {
    return null;
  }

  return <ServicePageTemplate service={service} />;
}
