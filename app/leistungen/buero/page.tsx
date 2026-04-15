import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { services } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Büroreinigung in Hannover | Saubere Arbeitsplätze mit System",
  description:
    "Büroreinigung für Unternehmen in Hannover und Region: planbare Reinigung, zuverlässige Teams und gepflegte Arbeitsflächen für Mitarbeitende und Kunden.",
  path: "/leistungen/buero",
  keywords: [
    "Büroreinigung Hannover",
    "Reinigung Büroflächen",
    "Unterhaltsreinigung Unternehmen",
  ],
  image: "/images/buero-hero.jpg",
});

export default function BueroPage() {
  const service = services.find((item) => item.key === "buero");

  if (!service) {
    return null;
  }

  return <ServicePageTemplate service={service} />;
}
