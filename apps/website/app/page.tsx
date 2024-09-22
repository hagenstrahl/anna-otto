import { Map, Phone } from "iconoir-react";
import Image from "next/image";
import Button, { OutlineButton } from "../components/button";
import Heading, { HeadingType } from "../components/heading";

const Home = (): JSX.Element => {
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
            //      className="absolute top-6 right-3 -rotate-[295deg] drop-shadow-custom" still testing
          />
        </div>
      </div>

      <div className="flex items-center justify-center -mt-6">
        <Image
          src="/fao-web-assets-logo-vertical-colour.svg"
          alt="Anna und Otto - Das Familiencafe Logo"
          width={269}
          height={275}
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
          <Button icon={Phone}>Anrufen</Button>
        </a>
        <a
          href="https://www.google.de/maps/dir//Markt+15,+17235+Neustrelitz"
          target="_blank"
          rel="noreferrer"
          className="flex"
        >
          <Button icon={Map}>Route anzeigen</Button>
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

      <div className="flex justify-center p-6 ml-8 bg-white rounded-xl w-80">
        <section>
          <Heading type={HeadingType.H2} className="mt-4 text-5xl text-left">
            Das Café
          </Heading>
          <p className="mt-4 mb-4 text-lg text-left font-text text-grau">
            Duftender, selbst gebackener Kuchen oder ausgiebiges Faxen machen -
            genau das lässt unser Familiencafé zum Wohlfühlort werden.
          </p>
          <OutlineButton>Coming Soon!</OutlineButton>
        </section>
      </div>
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
        <div>
          <Image
            src="/svg/birch-left.svg"
            alt="Birkenstamm"
            width={121}
            height={473}
            className="relative -top-56 -left-12 -z-20"
          />
        </div>
        <div>
          <Image
            src="/svg/twig.svg"
            alt="Ast mit grünen Blätter"
            width={94}
            height={69}
            className="relative right-24 top-6"
          />
        </div>
      </div>
      <div className="relative -mt-96">
        <div className="flex justify-center p-6 ml-auto mr-10 bg-white rounded-xl w-80">
          <section>
            <Heading type={HeadingType.H2} className="mt-4 text-5xl text-right">
              Der Shop
            </Heading>
            <p className="mt-4 mb-4 text-lg text-right font-text text-grau">
              Holzspielzeug, Tragetuch oder Kuscheltier - hier gibt es immer
              etwas Neues zu entdecken.
            </p>
            <div className="flex justify-end">
              <OutlineButton>Coming Soon!</OutlineButton>
            </div>
          </section>
        </div>
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
        <div>
          <Image
            src="/images/rattle-toy.png"
            alt="Holz Rassel"
            width={168}
            height={281}
            className="relative rotate-[58deg] -left-7"
          />
        </div>
        <div>
          <Image
            src="/svg/birch-left.svg"
            alt="Birkenstamm"
            width={121}
            height={473}
            className="relative -left-7 -top-56 -z-20"
          />
        </div>
      </div>
      <div className="relative -mt-72">
        <div className="flex justify-center p-6 ml-8 bg-white rounded-xl w-80">
          <section>
            <Heading type={HeadingType.H2} className="mt-4 text-5xl text-left">
              Beratungen & Kurse
            </Heading>
            <p className="mt-4 mb-4 text-lg text-left font-text text-grau">
              Das neue Glück bring viele Veränderungen mit sich. Lasst euch in
              unseren verschiedenen Kursen beraten.
            </p>
            <OutlineButton>Coming Soon!</OutlineButton>
          </section>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <Image
              src="/images/mother-and-baby.png"
              alt="Mutter und Baby"
              width={828}
              height={1200}
              className="relative -top-52 max-w-none -z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
