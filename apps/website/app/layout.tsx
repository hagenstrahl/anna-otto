import { Metadata } from "next";
import DesktopFooter from "../components/desktop-footer";
import MobileStickyFooter from "../components/mobile-footer";
import MobileMenu from "../components/mobile-menu";
import { getMetadata } from "../libs/metadata";
import "./globals.scss";

export const metadata: Metadata = getMetadata({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <MobileMenu />
        {children}
        <MobileStickyFooter />
        <DesktopFooter />
      </body>
    </html>
  );
}
