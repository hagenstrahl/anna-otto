import { Facebook, Instagram, Mail, Map, Phone } from "iconoir-react";

const MobileStickyFooter = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-20 bg-white border-t border-gray-200 md:hidden">
      <div className="h-full max-w-screen-xl px-4 mx-auto">
        <div className="flex items-center justify-around h-full">
          <a
            href="tel:+4939812293575"
            className="flex flex-col items-center text-grau"
          >
            <Phone className="w-6 h-6" />
          </a>

          <a
            href="mailto:post@anna-otto.de"
            className="flex flex-col items-center text-grau"
          >
            <Mail className="w-6 h-6" />
          </a>

          <a
            href="https://www.google.de/maps/dir//Markt+15,+17235+Neustrelitz"
            className="flex flex-col items-center text-grau"
          >
            <Map className="w-6 h-6" />
          </a>

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

export default MobileStickyFooter;
