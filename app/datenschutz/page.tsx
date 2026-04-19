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
          2. Hosting und Bereitstellung der Website (Vercel)
        </h2>
        <p>
          Diese Website wird bei{" "}
          <strong>Vercel Inc.</strong>, 440 N Barranca Ave #4133, Covina, CA
          91723, USA, gehostet und technisch ausgeliefert. Beim Aufruf der Seiten
          werden dort im Rahmen des Webhostings insbesondere Server-Logfiles
          verarbeitet, z.&nbsp;B. IP-Adresse, Datum und Uhrzeit der Anfrage,
          angeforderte Ressource, Referrer-URL sowie Browsertyp und
          Betriebssystem.
        </p>
        <p>
          Zweck ist der sichere und stabile Betrieb der Website. Rechtsgrundlage
          ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO (berechtigtes Interesse an
          einer sicheren und funktionsfähigen Online-Präsenz). Soweit
          personenbezogene Daten in die USA übermittelt werden, stützen wir uns
          auf die Angemessenheitsbeschlüsse der EU-Kommission oder geeignete
          Garantien im Sinne von Art.&nbsp;46 DSGVO, insbesondere die von Vercel
          angebotenen Standardvertragsklauseln, sofern kein Angemessenheitsbeschluss
          greift.
        </p>
        <p>
          Weitere Hinweise zu Vercel finden Sie unter{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            className="text-slate-900 underline underline-offset-2 hover:text-slate-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            vercel.com/legal/privacy-policy
          </a>
          .
        </p>
      </section>

      <section className="mt-8 space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-900">
          3. Domain und DNS (IONOS)
        </h2>
        <p>
          Die Domain dieser Website ist bei der{" "}
          <strong>IONOS SE</strong>, Elgendorfer Str.&nbsp;57, 56410 Montabaur,
          Deutschland, registriert. Die Domainverwaltung und die technische
          Auflösung (DNS) können dabei personenbezogene Daten im erforderlichen
          Umfang verarbeiten (z.&nbsp;B. bei der Namensauflösung durch Systeme von
          IONOS oder verbundene Infrastruktur).
        </p>
        <p>
          Rechtsgrundlage ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO (Erfüllung
          des Auftrags zur Domain-/DNS-Bereitstellung) und Art.&nbsp;6 Abs.&nbsp;1
          lit.&nbsp;f DSGVO (berechtigtes Interesse an einer erreichbaren Domain).
          Details entnehmen Sie der Datenschutzerklärung von IONOS unter{" "}
          <a
            href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/"
            className="text-slate-900 underline underline-offset-2 hover:text-slate-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            ionos.de/terms-gtc/datenschutzerklaerung
          </a>
          .
        </p>
      </section>

      <section className="mt-8 space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-900">
          4. Kontaktaufnahme per E-Mail und Kontaktformular (EmailJS)
        </h2>
        <p>
          Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die von Ihnen
          übermittelten Daten (insbesondere Absenderadresse und Inhalt der
          Nachricht) zur Bearbeitung Ihrer Anfrage.
        </p>
        <p>
          Nutzen Sie unser Kontaktformular, werden die von Ihnen eingegebenen
          Daten (z.&nbsp;B. Name, E-Mail-Adresse, Telefonnummer und Nachricht)
          über den Dienst <strong>EmailJS</strong> zum Zwecke der Übermittlung
          und Zustellung der Nachricht verarbeitet. Anbieter ist{" "}
          <strong>EmailJS Pte. Ltd.</strong>, Singapur. Nach eigenen Angaben von
          EmailJS erfolgt die technische Verarbeitung u.&nbsp;a. über
          Infrastruktur in den <strong>USA</strong> (z.&nbsp;B. Hosting). Für
          betroffene Personen aus dem EU-/EWR-Raum stellt EmailJS bei
          entsprechenden Übermittlungen die Einhaltung geeigneter Garantien nach
          Art.&nbsp;46 DSGVO sicher (u.&nbsp;a. Standardvertragsklauseln).
          Rechtsgrundlagen sind Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO
          (vorvertragliche Maßnahmen und Vertragsanbahnung) sowie Art.&nbsp;6
          Abs.&nbsp;1 lit.&nbsp;f DSGVO (berechtigtes Interesse an einer
          funktionierenden Kontaktaufnahme).
        </p>
        <p>
          Hinweise zum Datenschutz bei EmailJS finden Sie unter{" "}
          <a
            href="https://www.emailjs.com/legal/privacy-policy/"
            className="text-slate-900 underline underline-offset-2 hover:text-slate-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            emailjs.com/legal/privacy-policy
          </a>
          .
        </p>
      </section>

      <section className="mt-8 space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-900">
          5. Kein Newsletter, keine Reichweiten- oder Nutzeranalyse
        </h2>
        <p>
          Wir versenden <strong>keinen Newsletter</strong> und werten Ihre Nutzung
          dieser Website <strong>nicht mit Analyse-, Tracking- oder
          Marketing-Tools</strong> aus (z.&nbsp;B. kein Google Analytics, keine
          nutzerbezogene Statistik über Drittanbieter).
        </p>
      </section>

      <section className="mt-8 space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-900">
          6. Weitergabe von Daten
        </h2>
        <p>
          Eine Weitergabe Ihrer personenbezogenen Daten an die vorgenannten
          technischen Anbieter erfolgt, soweit dies für den Betrieb der Website
          oder die Kontaktaufnahme erforderlich ist. Darüber hinaus geben wir Daten
          nur weiter, wenn dies zur Vertragsabwicklung nötig ist, eine gesetzliche
          Verpflichtung besteht oder Sie ausdrücklich eingewilligt haben.
        </p>
      </section>

      <section className="mt-8 space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-900">7. Speicherdauer</h2>
        <p>
          Wir speichern personenbezogene Daten nur so lange, wie es für die
          jeweiligen Zwecke erforderlich ist oder gesetzliche
          Aufbewahrungspflichten bestehen.
        </p>
      </section>

      <section className="mt-8 space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-900">8. Ihre Rechte</h2>
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
          9. Änderung dieser Datenschutzerklärung
        </h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen,
          damit sie stets den aktuellen rechtlichen Anforderungen entspricht.
        </p>
      </section>

      <p className="mt-10 text-sm text-slate-500">
        Stand: {new Date().toLocaleDateString("de-DE")}
      </p>
    </main>
  );
}
