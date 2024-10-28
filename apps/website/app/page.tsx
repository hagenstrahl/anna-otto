import { Map, Phone } from "iconoir-react";
import Image from "next/image";
import Button from "../components/button";
import Card from "../components/card";

const Home = () => {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <div className="relative flex justify-between">
        <div className="relative w-[70%] max-w-[322px]">
          <Image
            src="/images/plate-with-waffle-and-berries.png"
            alt="Teller mit Waffeln und Blaubeeren"
            width={322}
            height={311}
            className="relative -top-[16.66666%] -left-[30%] sm:-top-14 sm:-left-24 drop-shadow-[5px_-5px_12px_rgba(0,0,0,0.25)]"
          />
        </div>
        <div className="relative w-[30%] max-w-[158px]">
          <Image
            src="/images/blue-berries.png"
            alt="Einzelne Blaubeeren"
            width={158}
            height={213}
            className="relative top-6 right-6 -rotate-[295deg] drop-shadow-[2px_-2px_4px_rgba(0,0,0,0.25)]"
          />
        </div>
      </div>

      <div className="flex items-center justify-center -mt-6">
        <Image
          src="/fao-web-assets-logo-vertical-colour.svg"
          alt="Anna und Otto - Das Familiencafe Logo"
          width={650}
          height={975}
          className="px-6"
        />
      </div>
      <div className="relative flex justify-end -mt-[10%] sm:-mt-12">
        <Image
          src="/images/coffee-beans.png"
          alt="Haufen von Kaffeebohnen"
          width={386}
          height={386}
          style={{ objectPosition: "144px 0px" }}
          className="relative -z-10 bottom-6"
        />
      </div>
      <div className="flex justify-center space-x-4 -mt-44">
        <a href="tel:+4939812293575" className="flex">
          <Button type="primary" icon={Phone}>
            Anrufen
          </Button>
        </a>
        <a
          href="https://www.google.de/maps/dir//Markt+15,+17235+Neustrelitz"
          target="_blank"
          rel="noreferrer"
          className="flex"
        >
          <Button type="primary" icon={Map}>
            Route anzeigen
          </Button>
        </a>
      </div>
      <div className="flex justify-center mt-6">
        <p className="text-lg font-text text-grau">
          Mo,Mi-Fr 12:00-17:30 Sa,So 08:00-17:30
        </p>
      </div>
      <div className="flex justify-center mt-20 mb-12">
        <Image
          src="/svg/flowers.svg"
          alt="Bunte Blumen"
          width={195}
          height={81}
        />
      </div>

      <Card
        title="Das Café"
        content="Duftender, selbst gebackener Kuchen oder ausgiebiges Faxen machen - genau das lässt unser Familiencafé zum Wohlfühlort werden."
        buttonText="Coming Soon!"
        alignment="left"
      />

      <div className="flex justify-center -mt-56">
        <div className="relative w-[900px] h-[600px]">
          <Image
            src="/images/two-girls-eating-cake.png"
            alt="Zwei Mädchen essen Kuchen"
            width={900}
            height={600}
            className="relative max-w-none -left-[22%] -z-10"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <Image
          src="/svg/birch-left.svg"
          alt="Birkenstamm"
          width={121}
          height={473}
          className="relative -top-56 -left-12 -z-20"
        />
        <Image
          src="/svg/twig.svg"
          alt="Ast mit grünen Blätter"
          width={94}
          height={69}
          className="relative right-24 top-6"
        />
      </div>

      <div className="relative -mt-96">
        <Card
          title=" Der Shop"
          content="Holzspielzeug, Tragetuch oder Kuscheltier - hier gibt es immer etwas Neues zu entdecken."
          buttonText="Coming Soon!"
          alignment="right"
        />
        <div className="relative justify-center">
          <div className="relative w-[561px] h-[600px]">
            <Image
              src="/images/chairs-between-birches.png"
              alt="Stühle zwischen Birken Baumstämme"
              width={561}
              height={600}
              className="relative -top-32 max-w-none -z-10"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between -mt-40">
        <Image
          src="/images/rattle-toy.png"
          alt="Holz Rassel"
          width={168}
          height={281}
          className="relative rotate-[58deg] -left-7"
        />
        <Image
          src="/svg/birch-right.svg"
          alt="Birkenstamm"
          width={121}
          height={473}
          className="relative -left-7 -top-8 -z-20"
        />
      </div>

      <div className="relative -mt-44">
        <Card
          title="Beratungen & Kurse"
          content="Das neue Glück bringt viele Veränderungen mit sich. Lasst euch in unseren verschiedenen Kursen beraten."
          buttonText="Coming Soon!"
          alignment="left"
        />
        <div className="flex justify-center -mt-44">
          <div className="relative h-[600px] overflow-hidden">
            <Image
              src="/images/mother-and-baby.png"
              alt="Mutter und Baby"
              width={650}
              height={975}
              style={{ objectPosition: "-32px -130px" }}
              className="relative -top-24 max-w-none -z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
