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
          <ExternalLink
            href="tel:+4939812293575"
            className="flex  items-center justify-center min-w-[48px] min-h-[48px] text-grau"
            testId="phone"
          >
            <Phone className="w-6 h-6" />
          </ExternalLink>

          <ExternalLink
            href="mailto:post@anna-otto.de"
            className="flex  items-center justify-center min-w-[48px] min-h-[48px] text-grau"
            testId="mail"
          >
            <Mail className="w-6 h-6" />
          </ExternalLink>

          <ExternalLink
            href="https://www.google.de/maps/dir//Markt+15,+17235+Neustrelitz"
            className="flex  items-center justify-center min-w-[48px] min-h-[48px] text-grau"
            testId="map"
          >
            <Map className="w-6 h-6" />
          </ExternalLink>

          <ExternalLink
            href="https://www.facebook.com/annaundotto/?locale=de_DE"
            className="flex items-center justify-center min-w-[48px] min-h-[48px] text-grau"
            testId="facebook"
          >
            <Facebook className="w-6 h-6" />
          </ExternalLink>

          <ExternalLink
            href="https://www.instagram.com/anna_und_otto/"
            className="flex items-center justify-center min-w-[48px] min-h-[48px] text-grau"
            testId="instagram"
          >
            <Instagram className="w-6 h-6" />
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
};

export default MobileStickyFooter;
