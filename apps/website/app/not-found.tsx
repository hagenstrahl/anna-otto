import Heading, { HeadingType } from "../components/heading";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hoppla! - ANNA & OTTO - Das Familiencafé',
}
const Custom404 = (): JSX.Element => (
  <>
    <Heading type= {HeadingType.H1} className="mt-8">
      Hoppla!
    </Heading>
    <Heading type={HeadingType.H3}>
      Diese Seite konnte nicht gefunden werden.
    </Heading>
    <p>Es sieht so aus, als ob an diesem Ort nichts gefunden werden konnte.</p>
  </>
);

export default Custom404;
