export type ServiceKey = "buero" | "praxis" | "kita" | "sanitaer";

export type ServiceItem = {
  key: ServiceKey;
  title: string;
  shortDescription: string;
  href: string;
  intro: string;
  details: string[];
};

export type JobItem = {
  key: "buero" | "praxis" | "kita";
  title: string;
  badge: string;
  bullets: string[];
};

export const services: ServiceItem[] = [
  {
    key: "buero",
    title: "Büroreinigung",
    shortDescription:
      "Saubere Arbeitsplätze für produktive Teams und einen professionellen Auftritt.",
    href: "/leistungen/buero",
    intro:
      "Unsere Büroreinigung sorgt für dauerhaft gepflegte Flächen, hygienische Arbeitszonen und einen starken ersten Eindruck bei Mitarbeitenden und Kunden.",
    details: [
      "Regelmäßige Reinigung von Büro-, Empfangs- und Besprechungsflächen",
      "Reinigung von Schreibtischen, Oberflächen und Kontaktpunkten",
      "Bodenpflege inklusive Saugen und Wischen je nach Belag",
      "Mülleimer-Service und hygienische Entsorgung",
      "Reinigung von Sanitär- und Teeküchenbereichen",
      "Individuelle Reinigungszeiten ohne Störung Ihres Betriebs",
    ],
  },
  {
    key: "praxis",
    title: "Praxisreinigung",
    shortDescription:
      "Hygienestandards für sensible Bereiche in Arztpraxen und Gesundheitszentren.",
    href: "/leistungen/praxis",
    intro:
      "In medizinischen Umgebungen zählen Zuverlässigkeit und Sorgfalt. Wir reinigen Ihre Praxis nach festen Abläufen mit Fokus auf Hygiene und Werterhalt.",
    details: [
      "Tägliche oder bedarfsorientierte Reinigung von Behandlungs- und Wartezonen",
      "Sorgfältige Desinfektion von Kontaktflächen",
      "Sanitärhygiene mit dokumentierbaren Standards",
      "Reinigung von Empfang, Fluren und Nebenräumen",
      "Materialschonende Pflege empfindlicher Oberflächen",
      "Abgestimmte Einsatzzeiten für störungsfreien Praxisbetrieb",
    ],
  },
  {
    key: "kita",
    title: "Kita-Reinigung",
    shortDescription:
      "Kindgerechte, hygienische Reinigung für sichere und gepflegte Kita-Räume.",
    href: "/leistungen/kita",
    intro:
      "Kinder benötigen saubere und sichere Umgebungen. Wir reinigen Kitas mit besonderem Augenmerk auf Hygiene, Materialverträglichkeit und Zuverlässigkeit.",
    details: [
      "Reinigung von Gruppen-, Schlaf- und Mehrzweckräumen",
      "Hygienische Pflege von Sanitär- und Wickelbereichen",
      "Reinigung von Kontaktflächen wie Tischen, Türen und Griffen",
      "Bodenreinigung für Teppich-, PVC- und Hartbodenbereiche",
      "Reinigung von Eingangsbereichen und Verkehrswegen",
      "Flexible Reinigungszeiten passend zum Kita-Alltag",
    ],
  },
  {
    key: "sanitaer",
    title: "Sanitärreinigung",
    shortDescription:
      "Gründliche Hygiene für WC-, Wasch- und Duschbereiche in jeder Objektgröße.",
    href: "/leistungen/sanitaer",
    intro:
      "Unsere Sanitärreinigung stellt Sauberkeit, Frische und einen gepflegten Eindruck sicher – von Einzelanlagen bis zu stark frequentierten Sanitärbereichen.",
    details: [
      "Intensive Reinigung von WC-Anlagen, Waschbecken und Armaturen",
      "Desinfektion von Kontakt- und Bedienelementen",
      "Entkalkung und Pflege von Flächen und Einrichtungen",
      "Hygieneservice für Spiegel, Trennwände und Bodenflächen",
      "Auffüllen von Verbrauchsmaterial nach Absprache",
      "Regelmäßige Qualitätskontrolle für konstant hohe Standards",
    ],
  },
];

export const jobs: JobItem[] = [
  {
    key: "buero",
    title: "Reinigungskraft Büros",
    badge: "Teilzeit / Minijob",
    bullets: [
      "Arbeitsorte in Hannover und Region",
      "Einsatz zu festen oder flexiblen Zeiten",
      "Teamunterstützung und strukturierte Einarbeitung",
    ],
  },
  {
    key: "praxis",
    title: "Reinigungskraft Praxen",
    badge: "Teilzeit / Minijob",
    bullets: [
      "Hygienebewusstes Arbeiten in sensiblen Bereichen",
      "Verantwortungsvolle Aufgaben mit klaren Standards",
      "Faire Bezahlung und planbare Einsätze",
    ],
  },
  {
    key: "kita",
    title: "Reinigungskraft Kitas",
    badge: "Teilzeit / Minijob",
    bullets: [
      "Sichere, saubere Umgebung für Kinder unterstützen",
      "Freundliches Team und klare Abläufe",
      "Flexible Arbeitszeiten nach Verfügbarkeit",
    ],
  },
];

export const strengthItems = [
  "Erfahrung & Fachkompetenz",
  "Zuverlässigkeit & Qualität",
  "Flexibilität & Service",
  "Starkes Preis-Leistungs-Verhältnis",
];
