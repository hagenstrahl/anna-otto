import { Metadata } from "next";
import "./globals.scss";
import Link from "next/link";
import Image from "next/image";
import ExternalLink from "../components/external-link";
import { Instagram, Facebook } from "iconoir-react";
import logo from "/public/fao-web-assets-logo-vertical-colour.svg";
import { getMetadata } from "../libs/metadata";

export const metadata: Metadata = getMetadata({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="px-8">
          <header>
            <div className="flex justify-center mt-8">
              <Link href="/" className="w-2/3 max-w-xs" passHref>
                <Image
                  src={logo}
                  width={46}
                  height={47}
                  layout="responsive"
                  alt="ANNA & OTTO - Das Familiencafé"
                />
              </Link>
            </div>
          </header>
          <main className="flex flex-col items-center text-lg font-text text-grau">
            {children}
          </main>
          <footer className="mt-8">
            <div className="flex justify-center gap-4 mb-20">
              <ExternalLink href="https://www.instagram.com/anna_und_otto/">
                <Instagram width={64} height={64} />
              </ExternalLink>
              <ExternalLink href="https://www.facebook.com/annaundotto/">
                <Facebook width={64} height={64} />
              </ExternalLink>
            </div>
            <div className="fixed bottom-0 left-0 flex justify-center w-full gap-4 p-2 text-lg border-t bg-white/80 border-grau text-grau font-text">
              <Link href="/impressum">Impressum</Link>
              <Link href="/datenschutz">Datenschutz</Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
