import { Facebook, Instagram } from "iconoir-react";
import Image from "next/image";
import Link from "next/link";
import ExternalLink from "./external-link";

const navLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

const DesktopFooter = () => {
  return (
    <footer
      className="hidden py-6 bg-white border-gray-200 shadow-lg md:block"
      data-testid="footer"
    >
      <div className="flex items-center max-w-screen-xl px-4 mx-auto justify-evenly">
        <div className="flex px-3" data-testid="footer-logo">
          <Link href="/">
            <Image
              src="/fao-web-assets-logo-horizontal-gray.svg"
              alt="Anna und Otto - Das Familiencafe Logo"
              width={195}
              height={81}
            />
          </Link>
        </div>
        <div className="flex space-x-8">
          <span className="p-3 text-grau">Café</span>

          <span className="p-3 text-grau">Shop</span>

          <span className="p-3 text-grau">Beratung</span>

          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              data-testid={`nav-link-${label.toLowerCase()}`}
            >
              <span className="inline-block p-3 text-grau">{label}</span>
            </Link>
          ))}

          <span className="inline-block p-3 text-grau">AGB</span>
        </div>
        <div className="flex">
          <ExternalLink
            href="https://www.facebook.com/annaundotto/?locale=de_DE"
            className="flex justify-center p-3 text-grau"
            testId="facebook-link"
          >
            <Facebook className="w-6 h-6" />
          </ExternalLink>

          <ExternalLink
            href="https://www.instagram.com/anna_und_otto/"
            className="flex justify-center p-3 text-grau"
            testId="instagram-link"
          >
            <Instagram className="w-6 h-6" />
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
};

export default DesktopFooter;
