import { Map, Phone } from "iconoir-react";
import Image from "next/image";
import Button from "../components/button";

const Home = (): JSX.Element => {
  return (
    <>
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
            className="relative top-6 right-3 -rotate-[295deg] drop-shadow-[2px_-2px_4px_rgba(0,0,0,0.25)]"
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
          className="relative -z-10 bottom-6 -right-36"
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
        <h2 className="text-lg font-text text-grau">
          Mo,Mi-Fr 12:00-17:30 Sa,So 08:00-17:30
        </h2>
      </div>
    </>
  );
};
export default Home;
//2px_-2px_4px_rgba(0,0,0,0.25)
//0_1px_2px_rgba(0,0,0,0.44)
//drop-shadow-[5px_-5px_5px_rgb(255,255,255)]
//className="flex px-5 text-white rounded-3xl hover:bg-gruen bg-blau font-text min-h-[48px]"
