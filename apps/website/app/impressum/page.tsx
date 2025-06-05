import ExternalLink from "../../components/external-link";
import Heading, { HeadingType } from "../../components/heading";
import { Metadata } from "next";
import { getMetadata } from "../../libs/metadata";

export const metadata: Metadata = getMetadata({ title: "Impressum" });
//test
const Impressum = (): JSX.Element => (
  <>
    <Heading type={HeadingType.H1} className="mt-8">
      Impressum
    </Heading>
    <section className="max-w-3xl text-center">
      <p className="font-bold">
        Inhaltlich Verantwortlicher gemäß § 5 Telemediengesetz und § 55 Abs. 2
        RStV:
      </p>
      <p className="mt-4">
        ANNA & OTTO - Das Familiencafé
        <br />
        Markt 15 · 17235 Neustrelitz
      </p>
      <p className="mt-4">Silvia Herrmann</p>
      <p className="mt-4">
        Telefon:{" "}
        <ExternalLink href="tel:+4939812293575">+49 3981 2293575</ExternalLink>
        <br />
        E-Mail:{" "}
        <ExternalLink href="mailto:post@anna-otto.de">
          post@anna-otto.de
        </ExternalLink>
      </p>
      <p className="mt-4">
        Steuernummer
        <br />
        075/230/06317
      </p>
    </section>
    <section className="max-w-3xl text-center">
      <Heading type={HeadingType.H3} className="mt-4">
        Haftungsbeschränkung
      </Heading>
      <p>
        Die Inhalte dieser Website werden von der ANNA & OTTO - Das Familiencafé
        mit größtmöglicher Sorgfalt erstellt. Die ANNA & OTTO - Das Familiencafé
        übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und
        Aktualität der bereitgestellten Inhalte. Aus diesem Grund ist jegliche
        Haftung für eventuelle Schäden im Zusammenhang mit der Nutzung des
        Informationsangebots ausgeschlossen. Durch die bloße Nutzung dieser
        Website kommt keinerlei Vertragsverhältnis zwischen der ANNA & OTTO -
        Das Familiencafé und dem Nutzer zustande.
      </p>
    </section>
    <section className="max-w-3xl text-center">
      <Heading type={HeadingType.H3} className="mt-4">
        Hinweis zu externen Links
      </Heading>
      <p>
        Diese Website enthält Verknüpfungen zu Websites von anderen Anbietern.
        Die ANNA & OTTO - Das Familiencafé hat bei der erstmaligen Verknüpfung
        der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige
        Rechtsverstöße bestehen. Zu diesem Zeitpunkt waren keine Rechtsverstöße
        ersichtlich. Die ANNA & OTTO - Das Familiencafé hat keinen Einfluss auf
        die aktuelle und zukünftige Gestaltung und auf die Inhalte der
        verknüpften Seiten. Die Links werden regelmäßig auf rechtswidrige
        Inhalte geprüft und bei einer Rechtsverletzung unverzüglich entfernt.
        Die Bereitstellung der externen Links bedeutet nicht, dass sich ANNA &
        OTTO - Das Familiencafé den Inhalt der verlinkten Seite zu eigen machen.
      </p>
    </section>
    <section className="max-w-3xl text-center">
      <Heading type={HeadingType.H3} className="mt-4">
        Urheber- und Leistungsschutzrechte
      </Heading>
      <p>
        Die auf unserer Website veröffentlichen Inhalte unterliegen dem Urheber-
        und Leistungsschutzrecht. Die ANNA & OTTO - Das Familiencafé gestattet
        die Übernahme von Texten in Datenbestände, die ausschließlich für den
        privaten Gebrauch eines Nutzers bestimmt sind. Die Übernahme und Nutzung
        der Daten zu anderen Zwecken bedarf der schriftlichen Zustimmung von
        ANNA & OTTO - Das Familiencafé.
      </p>
    </section>
    <section className="max-w-3xl text-center">
      <Heading type={HeadingType.H3} className="mt-4">
        Kontakt
      </Heading>
      <p>
        Bei Problemen, Fragen oder Anregungen wenden Sie sich bitte an die oben
        genannte Adresse. Eine E-Mail oder ein Anruf, sind uns jederzeit
        herzlich willkommen. Die ständige Entwicklung des Internet macht von
        Zeit zu Zeit Anpassungen unserer Datenschutzerklärung erforderlich. Wir
        behalten uns vor, jederzeit entsprechende Änderungen vorzunehmen.
      </p>
    </section>
    <section className="max-w-3xl text-center">
      <Heading type={HeadingType.H3} className="mt-4">
        Kontaktdaten ANNA & OTTO - Das Familiencafé
      </Heading>
      <p>
        Die Verwendung der Kontaktdaten des Impressums zu gewerblicher Werbung
        ist ausdrücklich nicht erwünscht, es sei denn, die ANNA & OTTO - Das
        Familiencafé hatte zuvor seine schriftliche Einwilligung erteilt oder es
        besteht bereits eine Geschäftsbeziehung. Die ANNA & OTTO - Das
        Familiencafé und alle auf unserer Website genannten Personen
        widersprechen hiermit jeder kommerziellen Verwendung und Weitergabe
        ihrer Daten.
      </p>
    </section>
  </>
);

export default Impressum;
