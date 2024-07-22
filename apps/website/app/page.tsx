import Heading, { HeadingType } from "../components/heading";

const Home = (): JSX.Element => {
  return (
  <>
      <Heading type={HeadingType.H1} className="mt-8">Coming Soon!</Heading>
      <section className="max-w-3xl text-center">
        Ob wärmende Strahlen der ersten Frühlingssonne oder bewölkter Himmel mit
        Nieselregen – ab jetzt gibt es mindestens einen guten Grund, auch bei
        Schietwetter vor die Tür zu gehen. Das Ziel: unser süßes, gemütliches
        Café am Neustrelitzer Markt. Bei ANNA & OTTO findet ihr endlich wieder
        Zeit für die kleinen Dinge des Lebens. Duftender, selbst gebackener
        Kuchen, Gespräche über die kleinen und großen Wunder des Alltags oder
        ausgiebiges Faxen machen in unserer großen Spielecke.
      </section>
      <section className="max-w-3xl mt-5 text-center">
        Übrigens: In einem separaten Beratungs- und Seminarraum erfahrt ihr
        alles rund um die Themen Schwangerschaft und Familie.
      </section>
      <section className="max-w-3xl mt-5 text-center">
        Wir freuen uns auf euch. Bis bald!
      </section>
      </>
  );
};
export default Home;
