import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { services } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Praxisreinigung in Hannover | Hygienische Standards für Praxen",
  description:
    "Praxisreinigung für Arztpraxen und Gesundheitszentren in Hannover: hygienische Abläufe, zuverlässige Ausführung und materialschonende Pflege sensibler Bereiche.",
  path: "/leistungen/praxis",
  keywords: [
    "Praxisreinigung Hannover",
    "Arztpraxis Reinigung",
    "Hygienereinigung Gesundheitszentrum",
  ],
  image: "/images/about-us.png",
});

export default function PraxisPage() {
  const service = services.find((item) => item.key === "praxis");

  if (!service) {
    return null;
  }

  return <ServicePageTemplate service={service} />;
}
