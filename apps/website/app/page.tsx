import Image from "next/image";

const Home = (): JSX.Element => {
  return (
    <>
      <Image
        src="/images/plate-with-waffle-and-berries.png"
        alt="Teller mit Waffeln und Blaubeeren"
        width={322}
        height={311}
        className="absolute -top-14 -left-24 drop-shadow-[5px_-5px_12px_rgba(0,0,0,0.25)]"
      />
      <Image
        src="/images/blue-berries.png"
        alt="Einzelne Blaubeeren"
        width={158}
        height={213}
        className="absolute top-6 right-3 -rotate-[295deg] drop-shadow-[2px_-2px_4px_rgba(0,0,0,0.25)]"
        //      className="absolute top-6 right-3 -rotate-[295deg] drop-shadow-custom" still testing
      />
    </>
  );
};
export default Home;
//2px_-2px_4px_rgba(0,0,0,0.25)
//0_1px_2px_rgba(0,0,0,0.44)
