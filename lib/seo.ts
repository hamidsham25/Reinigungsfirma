import type { Metadata } from "next";

export const SITE_URL = "https://rein-gebaeudeservice.de";
export const SITE_NAME = "REIN Gebäudeservice";
export const SITE_EMAIL = "info@rein-gebaeudeservice.de";
/** Nur setzen, wenn dieselbe Nummer auch öffentlich steht (z. B. Impressum/Footer). Sonst leer lassen — sonst falsche Daten in Google. */
export const SITE_PHONE = "";
export const SITE_ADDRESS = {
  streetAddress: "Westerriede 3",
  postalCode: "30966",
  addressLocality: "Hemmingen",
  addressCountry: "DE",
};

/** Default preview image (WhatsApp, LinkedIn, etc.) — matches `app/opengraph-image.png`. */
export const DEFAULT_OG_IMAGE = "/opengraph-image.png";

export const DEFAULT_KEYWORDS = [
  "Gebäudereinigung Hannover",
  "Reinigungsfirma Hannover",
  "Büroreinigung Hannover",
  "Praxisreinigung Hannover",
  "Kita Reinigung Hannover",
  "Sanitärreinigung Hannover",
  "Unterhaltsreinigung Region Hannover",
];

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = DEFAULT_OG_IMAGE,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    keywords: [...DEFAULT_KEYWORDS, ...keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "de_DE",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  url: SITE_URL,
  email: SITE_EMAIL,
  ...(SITE_PHONE ? { telephone: SITE_PHONE } : {}),
  address: {
    "@type": "PostalAddress",
    ...SITE_ADDRESS,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Hannover",
    },
    {
      "@type": "AdministrativeArea",
      name: "Region Hannover",
    },
  ],
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  priceRange: "$$",
};
