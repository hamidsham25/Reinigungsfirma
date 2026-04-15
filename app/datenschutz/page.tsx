import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Datenschutz",
  description:
    "Datenschutzerklärung von REIN Gebäudeservice zur Verarbeitung personenbezogener Daten und Ihren Rechten nach DSGVO.",
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 pb-16 pt-40 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold text-slate-900">Datenschutz</h1>

      <section className="mt-8 space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-900">
          1. Verantwortlicher
        </h2>
        <p>REIN Gebäudeservice</p>
        <p>Inhaber: Omed Sham</p>
        <p>Westerriede 3, 30966 Hemmingen</p>
        <p>E-Mail: info@rein-gebaeudeservice.de</p>
      </section>

      <section className="mt-8 space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-900">
          2. Erhebung und Speicherung personenbezogener Daten
        </h2>
        <p>
          Beim Aufruf dieser Website werden durch den technischen Betreiber der
          Website automatisch Informationen in sogenannten Server-Logfiles
          gespeichert. Erfasst werden insbesondere IP-Adresse, Datum und Uhrzeit
          der Anfrage, aufgerufene Seite, Referrer-URL, Browsertyp und
          Betriebssystem.
        </p>
        <p>
          Die Verarbeitung erfolgt zur Sicherstellung eines stabilen und sicheren
          Betriebs der Website auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
        </p>
      </section>

      <section className="mt-8 space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-900">
          3. Kontaktaufnahme
        </h2>
        <p>
          Wenn Sie uns per Formular oder E-Mail kontaktieren, werden Ihre Angaben
          (z. B. Name, E-Mail-Adresse, Telefonnummer und Nachricht) zur
          Bearbeitung Ihrer Anfrage gespeichert und verarbeitet.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
          Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
          einer effizienten Kommunikation).
        </p>
      </section>

      <section className="mt-8 space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-900">
          4. Weitergabe von Daten
        </h2>
        <p>
          Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur,
          wenn dies zur Vertragsabwicklung erforderlich ist, eine gesetzliche
          Verpflichtung besteht oder Sie ausdrücklich eingewilligt haben.
        </p>
      </section>

      <section className="mt-8 space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-900">
          5. Speicherdauer
        </h2>
        <p>
          Wir speichern personenbezogene Daten nur so lange, wie es für die
          jeweiligen Zwecke erforderlich ist oder gesetzliche
          Aufbewahrungspflichten bestehen.
        </p>
      </section>

      <section className="mt-8 space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-900">
          6. Ihre Rechte
        </h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
          Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch
          gegen die Verarbeitung Ihrer personenbezogenen Daten.
        </p>
        <p>
          Außerdem haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde
          zu beschweren.
        </p>
      </section>

      <section className="mt-8 space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-900">
          7. Änderung dieser Datenschutzerklärung
        </h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf
          anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen
          entspricht.
        </p>
      </section>

      <p className="mt-10 text-sm text-slate-500">
        Stand: {new Date().toLocaleDateString("de-DE")}
      </p>
    </main>
  );
}

