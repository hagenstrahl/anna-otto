import { Facebook, Instagram } from "iconoir-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

const DesktopFooter = () => {
  return (
    <footer className="hidden py-6 bg-white border-t border-gray-200 shadow-lg md:block">
      <div className="flex items-center max-w-screen-xl px-4 mx-auto justify-evenly">
        <div className="flex justify-center px-3 mt-6">
          <Image
            src="/fao-web-assets-logo-horizontal-gray.svg"
            alt="Anna und Otto - Das Familiencafe Logo"
            width={195}
            height={81}
          />
        </div>
        <div className="flex space-x-8">
          <span className="text-grau">Café</span>

          <span className="text-grau">Shop</span>

          <span className="text-grau">Beratung</span>

          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href}>
              <span className="text-grau">{label}</span>
            </Link>
          ))}

          <span className="text-grau">AGB</span>
        </div>
        <div className="flex">
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
      </div>
    </footer>
  );
};

export default DesktopFooter;
