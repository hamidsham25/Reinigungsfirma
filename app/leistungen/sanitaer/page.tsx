import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { services } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Sanitärreinigung in Hannover | Gründliche Hygiene für Sanitärräume",
  description:
    "Sanitärreinigung für Unternehmen in Hannover und Region: gründliche Reinigung, Desinfektion und Qualitätssicherung für WC-, Wasch- und Duschbereiche.",
  path: "/leistungen/sanitaer",
  keywords: [
    "Sanitärreinigung Hannover",
    "WC Reinigung Unternehmen",
    "Desinfektion Sanitärbereiche",
  ],
  image: "/images/random-image.jpg",
});

export default function SanitaerPage() {
  const service = services.find((item) => item.key === "sanitaer");

  if (!service) {
    return null;
  }

  return <ServicePageTemplate service={service} />;
}
