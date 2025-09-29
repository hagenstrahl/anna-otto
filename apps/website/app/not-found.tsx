import { Metadata } from "next";
import Heading, { HeadingVariant } from "../components/heading";

export const metadata: Metadata = {
  title: "Hoppla! - ANNA & OTTO - Das Familiencafé",
};
const Custom404 = (): React.ReactElement => (
  <>
    <Heading variant={HeadingVariant.H1} className="mt-8">
      Hoppla!
    </Heading>
    <Heading variant={HeadingVariant.H3}>
      Diese Seite konnte nicht gefunden werden.
    </Heading>
    <p>Es sieht so aus, als ob an diesem Ort nichts gefunden werden konnte.</p>
  </>
);

export default Custom404;
