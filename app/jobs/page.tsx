import type { Metadata } from "next";
import JobsPageClient from "@/components/JobsPageClient";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Jobs als Reinigungskraft in Hannover | Teilzeit & Minijob",
  description:
    "Entdecke Stellenangebote bei REIN Gebäudeservice in Hannover und Region. Faire Bezahlung ab 16 EUR/Std., flexible Zeiten und ein verlässliches Team.",
  path: "/jobs",
  keywords: [
    "Reinigungskraft Job Hannover",
    "Minijob Gebäudereinigung Hannover",
    "Teilzeit Job Reinigung",
  ],
  image: "/images/warum-image.jpg",
});

export default function JobsPage() {
  return <JobsPageClient />;
}

