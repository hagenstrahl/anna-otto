"use client";

import { Menu, Xmark } from "iconoir-react";
import { useState } from "react";

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
          <Xmark className="w-6 h-6 text-orange" strokeWidth={2.5} />
        ) : (
          <Menu className="w-6 h-6 text-orange" strokeWidth={2.5} />
        )}
      </button>
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden">
          <div className="flex flex-col items-center justify-center h-full">
            <nav className="flex flex-col space-y-8 text-center">
              <a
                href="/"
                className="text-2xl font-soleil text-grau"
                onClick={closeMenu}
              >
                Café
              </a>
              <a
                href="/"
                className="text-2xl font-soleil text-grau"
                onClick={closeMenu}
              >
                Shop
              </a>
              <a
                href="/"
                className="text-2xl font-soleil text-grau"
                onClick={closeMenu}
              >
                Beratung & Kurse
              </a>
              <a
                href="/"
                className="text-2xl font-soleil text-grau"
                onClick={closeMenu}
              >
                Kontakt
              </a>
            </nav>
            <div className="flex items-center mt-12 space-x-4 text-lg text-grau font-soleil">
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
          </div>
        </div>
      )}
    </>
  );
}
