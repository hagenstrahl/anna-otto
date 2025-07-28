"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Xmark } from "iconoir-react";
import { useState } from "react";
import MobileStickyFooter from "./mobile-footer";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <button
        className="fixed top-[50px] right-4 w-10 h-10 flex items-center justify-center z-50"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <Xmark
            data-testid="close-icon"
            className="w-10 h-10 text-orange"
            strokeWidth={2.5}
          />
        ) : (
          <Menu
            data-testid="menu-icon"
            className="w-10 h-10 text-orange"
            strokeWidth={2.5}
          />
        )}
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 0.5,
            }}
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <img
                src="/fao-web-assets-logo-vertical-colour.svg"
                alt="Logo"
                className="absolute w-[86.65px] h-[88.86px] top-16"
              />
              <nav
                data-testid="mobile-menu-nav"
                className="flex flex-col space-y-8 text-center"
              >
                <a
                  href="/cafe"
                  className="text-3xl font-text text-grau"
                  onClick={closeMenu}
                >
                  Café
                </a>
                <a
                  href="/shop"
                  className="text-3xl font-text text-grau"
                  onClick={closeMenu}
                >
                  Shop
                </a>
                <a
                  href="/beratung-kurse"
                  className="text-3xl font-text text-grau"
                  onClick={closeMenu}
                >
                  Beratung & Kurse
                </a>
                <a
                  href="/kontakt"
                  className="text-3xl font-text text-grau"
                  onClick={closeMenu}
                >
                  Kontakt
                </a>
              </nav>

              <div className="flex flex-col items-center mt-24 text-center">
                <div className="flex items-center space-x-4 text-lg text-grau font-text">
                  <a href="/impressum" onClick={closeMenu}>
                    Impressum
                  </a>
                  <span>|</span>
                  <a href="/datenschutz" onClick={closeMenu}>
                    Datenschutz
                  </a>
                  <span>|</span>
                  <a href="/" onClick={closeMenu}>
                    AGB
                  </a>
                </div>

                <div className="text-lg mt-9 text-grau font-text">—</div>

                <div className="text-lg mt-9 text-grau font-text">
                  täglich von 8:00-17:30 Uhr geöffnet
                </div>
              </div>

              <MobileStickyFooter />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
