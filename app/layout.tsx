import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  DEFAULT_KEYWORDS,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  createPageMetadata,
  localBusinessJsonLd,
} from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    apple: "/apple-touch-icon.png",
  },
  title: {
    default: `${SITE_NAME} | Gebäudereinigung in Hannover`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Professionelle Gebäudereinigung in Hannover und Region: Büro, Praxis, Kita und Sanitärbereiche. Zuverlässige Qualität und schnelle Angebotsanfrage.",
  applicationName: SITE_NAME,
  keywords: DEFAULT_KEYWORDS,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: createPageMetadata({
    title: `${SITE_NAME} | Gebäudereinigung in Hannover`,
    description:
      "REIN Gebäudeservice reinigt Büros, Praxen, Kitas und Sanitärbereiche in Hannover und Region.",
    path: "/",
    image: DEFAULT_OG_IMAGE,
  }).openGraph,
  twitter: createPageMetadata({
    title: `${SITE_NAME} | Gebäudereinigung in Hannover`,
    description:
      "Professionelle Gebäudereinigung mit klaren Abläufen und schneller Rückmeldung in Hannover.",
    path: "/",
    image: DEFAULT_OG_IMAGE,
  }).twitter,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full bg-white text-slate-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
