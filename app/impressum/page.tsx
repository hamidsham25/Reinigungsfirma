import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Impressum",
  description:
    "Impressum von REIN Gebäudeservice mit allen Pflichtangaben gemäß § 5 TMG.",
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 pb-16 pt-40 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold text-slate-900">Impressum</h1>

      <section className="mt-8 space-y-2 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-900">
          Angaben gemäß § 5 TMG
        </h2>
        <p>REIN Gebäudeservice</p>
        <p>Rechtsform: Einzelunternehmen</p>
        <p>Inhaber: Omed Sham</p>
        <p>Westerriede 3</p>
        <p>30966 Hemmingen</p>
      </section>

      <section className="mt-8 space-y-2 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-900">Kontakt</h2>
        <p>E-Mail: info@rein-gebaeudeservice.de</p>
      </section>

      <section className="mt-8 space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-900">
          Umsatzsteuer und Steuernummer
        </h2>
        <p>
          Die Angaben zur Umsatzsteuer-Identifikationsnummer und zur
          Steuernummer werden nach Erteilung durch das zuständige Finanzamt hier
          ergänzt.
        </p>
      </section>

      <section className="mt-8 space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-900">
          Haftung für Inhalte
        </h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>
      </section>

      <section className="mt-8 space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-900">
          Haftung für Links
        </h2>
        <p>
          Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
          Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
          Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
          verantwortlich.
        </p>
      </section>

      <section className="mt-8 space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-900">Urheberrecht</h2>
        <p>
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers.
        </p>
        <p>
          Soweit Bilder nicht selbst erstellt wurden, werden lizenzierte
          Bestandsfotos (z.&nbsp;B. Unsplash) oder KI-generierte Abbildungen
          verwendet; jeweilige Nutzungsrechte sind bei der Quelle einzuhalten.
        </p>
      </section>

      <section className="mt-8 space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-900">
          Streitbeilegung und EU-Plattform
        </h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            className="text-slate-900 underline underline-offset-2 hover:text-slate-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            ec.europa.eu/consumers/odr
          </a>
          . Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
        <p>
          Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>
      <p className="mt-10 text-sm text-slate-500">
        Stand: {new Date().toLocaleDateString("de-DE")}
      </p>
    </main>
  );
}

