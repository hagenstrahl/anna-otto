import { Facebook, Instagram } from "iconoir-react";
import Image from "next/image";
import Link from "next/link";
import ExternalLink from "../components/external-link";

const DesktopFooter = () => {
  return (
    <footer className="hidden py-6 bg-white border-t border-gray-200 shadow-lg md:block">
      <div className="flex items-center justify-between max-w-screen-xl px-4 mx-auto">
        <div className="flex justify-center mt-6">
          <Image
            src="/svg/flowers.svg"
            alt="Bunte Blumen"
            width={195}
            height={81}
          />
        </div>
        <div className="flex space-x-8">
          <ExternalLink href="/cafe">
            <span className="text-grau">Café</span>
          </ExternalLink>
          <ExternalLink href="/shop">
            <span className="text-grau">Shop</span>
          </ExternalLink>
          <Link href="/beratung">
            <span className="text-grau">Beratung</span>
          </Link>
          <Link href="/impressum">
            <span className="text-grau">Impressum</span>
          </Link>
          <ExternalLink href="/datenschutz">
            <span className="text-grau">Datenschutz</span>
          </ExternalLink>
          <ExternalLink href="/agb">
            <span className="text-grau">AGB</span>
          </ExternalLink>
        </div>
        <a
          href="https://www.facebook.com/annaundotto/?locale=de_DE"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-grau"
        >
          <Facebook className="w-6 h-6" />
        </a>

        <a
          href="https://www.instagram.com/anna_und_otto/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-grau"
        >
          <Instagram className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
};

export default DesktopFooter;
