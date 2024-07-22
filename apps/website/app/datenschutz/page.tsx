import ExternalLink from "../../components/external-link";
import Heading, { HeadingType } from "../../components/heading";
import { Metadata } from "next";
import { getMetadata } from "../../libs/metadata";

export const metadata: Metadata = getMetadata({
  title: "Datenschutz",
});

const Datenschutz = (): JSX.Element => (
  <>
    <Heading type={HeadingType.H1} className="mt-8">
      Datenschutz
    </Heading>
    <section className="max-w-3xl text-center">
      <Heading type={HeadingType.H2}>Allgemeine Hinweise</Heading>
      <p>
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
        Ihren personenbezogenen Daten passiert, wenn Sie unsere Website
        besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
        persönlich identifiziert werden können. Ausführliche Informationen zum
        Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
        Datenschutzerklärung.
      </p>
    </section>
    <section className="max-w-3xl text-center">
      <Heading type={HeadingType.H3} className="mt-4">
        Datenerfassung auf unserer Website
      </Heading>
      <p>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
      <p className="mt-4">
        Die Datenverarbeitung auf dieser Website erfolgt durch den
        Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser
        Website entnehmen.
      </p>
    </section>
    <section className="max-w-3xl text-center">
      <Heading type={HeadingType.H3} className="mt-4">
        Wie erfassen wir Ihre Daten?
      </Heading>
      <p>
        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
        mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein
        Kontaktformular eingeben.
      </p>
      <p className="mt-4">
        Andere Daten werden automatisch beim Besuch der Website durch unsere
        IT-Systeme erfasst. Das sind vor allem technische Daten (z.B.
        Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
        Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website
        betreten.
      </p>
    </section>
    <section className="max-w-3xl text-center">
      <Heading type={HeadingType.H3} className="mt-4">
        Wofür nutzen wir Ihre Daten?
      </Heading>
      <p>
        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der
        Website zu gewährleisten. Andere Daten können zur Analyse Ihres
        Nutzerverhaltens verwendet werden.
      </p>
    </section>
    <section className="max-w-3xl text-center">
      <Heading type={HeadingType.H3} className="mt-4">
        Welche Rechte haben Sie bezüglich Ihrer Daten?
      </Heading>
      <p>
        Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft,
        Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
        erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder
        Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum
        Thema Datenschutz können Sie sich jederzeit unter der im Impressum
        angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein
        Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
      </p>
    </section>
    <section className="max-w-3xl text-center">
      <Heading type={HeadingType.H2} className="mt-4">
        Allgemeine Hinweise und Pflichtinformationen
      </Heading>
      <Heading type={HeadingType.H3} className="mt-4">
        Datenschutz
      </Heading>
      <p>
        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
        sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
        entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
        Datenschutzerklärung.
      </p>
      <p className="mt-4">
        Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
        Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
        persönlich identifiziert werden können. Die vorliegende
        Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
        sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
      </p>
      <p className="mt-4">
        Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei
        der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
        lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
        möglich.
      </p>
    </section>
    <section className="max-w-3xl text-center">
      <Heading type={HeadingType.H3} className="mt-4">
        Hinweis zur verantwortlichen Stelle
      </Heading>
      <p>
        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website
        ist:
      </p>
      <p className="mt-4">
        ANNA & OTTO – Das Familiencafé
        <br />
        Markt 15 · 17235 Neustrelitz
      </p>
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
        Verantwortliche Stelle ist die natürliche oder juristische Person, die
        allein oder gemeinsam mit anderen über die Zwecke und Mittel der
        Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o.
        Ä.) entscheidet.
      </p>
    </section>
    <section className="max-w-3xl text-center">
      <Heading type={HeadingType.H3} className="mt-4">
        Widerruf Ihrer Einwilligung zur Datenverarbeitung
      </Heading>
      <p>
        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
        Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
        jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an
        uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung
        bleibt vom Widerruf unberührt.
      </p>
    </section>
    <section className="max-w-3xl text-center">
      <Heading type={HeadingType.H3} className="mt-4">
        Kinder und Jugendliche
      </Heading>
      <p>
        Personen unter 18 Jahren sollten ohne Zustimmung der Eltern oder
        Erziehungsberechtigten keine personenbezogenen Daten an uns übermitteln.
        Wir fordern keine personenbezogenen Daten von Kindern und Jugendlichen
        an, sammeln diese nicht und geben sie nicht an Dritte weiter.
      </p>
    </section>
    <section className="max-w-3xl text-center">
      <Heading type={HeadingType.H3} className="mt-4">
        Beschwerderecht bei der zuständigen Aufsichtsbehörde
      </Heading>
      <p>
        Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein
        Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige
        Aufsichtsbehörde in datenschutzrechtlichen Fragen ist der
        Landesdatenschutzbeauftragte des Bundeslandes, in dem unser Unternehmen
        seinen Sitz hat. Eine Liste der Datenschutzbeauftragten sowie deren
        Kontaktdaten können folgendem Link entnommen werden:
      </p>
      <p className="mt-4">
        <ExternalLink href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html">
          Internetauftritt der Bundesbeauftragten für den Datenschutz und die
          Informationsfreiheit – Anschriften und Links
        </ExternalLink>
      </p>
    </section>
    <section className="max-w-3xl text-center">
      <Heading type={HeadingType.H3} className="mt-4">
        Recht auf Datenübertragbarkeit
      </Heading>
      <p>
        Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
        oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder
        an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen
        zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen
        Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch
        machbar ist.
      </p>
    </section>
    <section className="max-w-3xl text-center">
      <Heading type={HeadingType.H3} className="mt-4">
        SSL- bzw. TLS-Verschlüsselung
      </Heading>
      <p>
        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
        vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die
        Sie an uns als Seitenbetreiber senden, eine SSL-bzw.
        TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran,
        dass die Adresszeile des Browsers von “http://” auf “https://” wechselt
        und an dem Schloss-Symbol in Ihrer Browserzeile.
      </p>
      <p className="mt-4">
        Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten,
        die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
      </p>
    </section>
    <section className="max-w-3xl text-center">
      <Heading type={HeadingType.H3} className="mt-4">
        Auskunft, Sperrung, Löschung
      </Heading>
      <p>
        Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
        das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
        personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
        Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder
        Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
        personenbezogene Daten können Sie sich jederzeit unter der im Impressum
        angegebenen Adresse an uns wenden.
      </p>
    </section>
    <section className="max-w-3xl text-center">
      <Heading type={HeadingType.H3} className="mt-4">
        Widerspruch gegen Werbe-Mails
      </Heading>
      <p>
        Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
        Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
        Werbung und Informationsmaterialien wird hiermit widersprochen. Die
        Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im
        Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
        Spam-E-Mails, vor.
      </p>
    </section>
    <section className="max-w-3xl text-center">
      <Heading type={HeadingType.H2} className="mt-4">
        Datenerfassung auf unserer Webseite
      </Heading>
      <Heading type={HeadingType.H3} className="mt-4">
        Cookies
      </Heading>
      <p>
        Die Internetseiten verwenden teilweise so genannte Cookies. Cookies
        richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren.
        Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und
        sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem
        Rechner abgelegt werden und die Ihr Browser speichert.
      </p>
      <p className="mt-4">
        Die meisten der von uns verwendeten Cookies sind so genannte
        “Session-Cookies”. Sie werden nach Ende Ihres Besuchs automatisch
        gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie
        diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim
        nächsten Besuch wiederzuerkennen.
      </p>
      <p className="mt-4">
        Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
        Cookies informiert werden und Cookies nur im Einzelfall erlauben, die
        Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie
        das automatische Löschen der Cookies beim Schließen des Browser
        aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität
        dieser Website eingeschränkt sein.
      </p>
      <p className="mt-4">
        Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs
        oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen
        (z.B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von
        Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der Websitebetreiber hat ein
        berechtigtes Interesse an der Speicherung von Cookies zur technisch
        fehlerfreien und optimierten Bereitstellung seiner Dienste. Soweit
        andere Cookies (z.B. Cookies zur Analyse Ihres Surfverhaltens)
        gespeichert werden, werden diese in dieser Datenschutzerklärung
        gesondert behandelt.
      </p>
    </section>
    <section className="max-w-3xl text-center">
      <Heading type={HeadingType.H3} className="mt-4">
        Server-Log-Dateien
      </Heading>
      <p>
        Der Provider der Seiten erhebt und speichert automatisch Informationen
        in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns
        übermittelt. Dies sind:
      </p>
      <div className="flex justify-center mt-4">
        <ul className="text-left list-disc list-inside">
          <li>Browsertyp und Browserversion</li>
          <li>verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse</li>
        </ul>
      </div>
      <p className="mt-4">
        Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
        vorgenommen.
      </p>
      <p className="mt-4">
        Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der
        die Verarbeitung von Daten zur Erfüllung eines Vertrags oder
        vorvertraglicher Maßnahmen gestattet.
      </p>
    </section>
    <section className="max-w-3xl text-center">
      <Heading type={HeadingType.H2} className="mt-4">
        Plugins und Tools
      </Heading>
      <Heading type={HeadingType.H3} className="mt-4">
        Adobe Font
      </Heading>
      <p>
        Auf dieser Webseite kommen Adobe Webfonts zum Einsatz. Adobe Font ist
        ein Dienst, der von der Firma Adobe angeboten wird. Dieser Dienst stellt
        Schriftarten zur Verfügung, die im Webbrowser des Nutzers nach einem
        Serveraufruf bei Adobe (in den USA) dargestellt werden. Hierbei wird
        zumindest die IP-Adresse des Browsers des Endgerätes des Nutzers dieser
        Webseite von Adobe gespeichert. Nähere Informationen finden Sie in den
        Datenschutzhinweisen von Adobe Font, die Sie hier abrufen können:{" "}
        <ExternalLink href="https://www.adobe.com/de/privacy/policies/adobe-fonts.html">
          Adobe Font Datenschutzhinweise
        </ExternalLink>
      </p>
    </section>
  </>
);

export default Datenschutz;
