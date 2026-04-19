import type { Metadata } from "next";
import { unstable_noStore as noStore } from "next/cache";
import JobsPageClient from "@/components/JobsPageClient";
import { getEmailJsBewerbungConfig } from "@/lib/emailjs-config";
import { createPageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

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
  noStore();
  const emailJsBewerbung = getEmailJsBewerbungConfig();
  return <JobsPageClient emailJsBewerbung={emailJsBewerbung} />;
}

