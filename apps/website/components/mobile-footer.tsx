import { Facebook, Instagram, Mail, Map, Phone } from "iconoir-react";
import ExternalLink from "./external-link";

const MobileStickyFooter = () => {
  return (
    <footer
      className="fixed bottom-0 left-0 right-0 h-20 bg-white border-t border-gray-200 md:hidden"
      data-testid="footer"
    >
      <div className="h-full max-w-screen-xl px-4 mx-auto">
        <div className="flex items-center justify-around h-full">
          <a
            href="tel:+4939812293575"
            className="flex flex-col items-center text-grau"
            data-testid="phone-link"
          >
            <Phone className="w-6 h-6" />
          </a>

          <a
            href="mailto:post@anna-otto.de"
            className="flex flex-col items-center text-grau"
            data-testid="mail-link"
          >
            <Mail className="w-6 h-6" />
          </a>

          <a
            href="https://www.google.de/maps/dir//Markt+15,+17235+Neustrelitz"
            className="flex flex-col items-center text-grau"
            data-testid="map-link"
          >
            <Map className="w-6 h-6" />
          </a>

          <ExternalLink
            href="https://www.facebook.com/annaundotto/?locale=de_DE"
            className="flex flex-col items-center text-grau"
            testId="facebook-link"
          >
            <Facebook className="w-6 h-6" />
          </ExternalLink>

          <ExternalLink
            href="https://www.instagram.com/anna_und_otto/"
            className="flex flex-col items-center text-grau"
            testId="instagram-link"
          >
            <Instagram className="w-6 h-6" />
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
};

export default MobileStickyFooter;