import Image from "next/image";

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
          className="relative bottom-6 -right-28"
        />
      </div>
      {/*
        <h2 className="absolute z-20 bottom-20 text-lg font-text text-grau bg-[rgba(255,255,255,0.75)]">
          Mo,Mi-Fr 12:00-17:30 Sa,So 08:00-17:30
        </h2>
      </div>
      <div className="flex items-center justify-center space-x-4 bottom-28">
        <button
          type="button"
          className="px-5 text-white rounded-3xl hover:bg-gruen bg-blau font-text min-h-[48px]"
        >
          Anrufen
        </button>
        <button
          type="button"
          className="px-5 text-white rounded-3xl hover:bg-gruen bg-blau font-text min-h-[48px]"
        >
          Route anzeigen
        </button>
      </div>
      */}
    </>
  );
};
export default Home;
//2px_-2px_4px_rgba(0,0,0,0.25)
//0_1px_2px_rgba(0,0,0,0.44)
//drop-shadow-[5px_-5px_5px_rgb(255,255,255)]
