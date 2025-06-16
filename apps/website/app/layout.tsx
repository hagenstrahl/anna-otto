import { Menu } from "iconoir-react";
import { Metadata } from "next";
import DesktopFooter from "../components/desktop-footer";
import MobileStickyFooter from "../components/mobile-footer";
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
        <button className="fixed top-[50px] right-4 w-10 h-10 flex item-center justify-center z-50">
          <Menu className="w-6 h-6 " />
        </button>
        {children}
        <MobileStickyFooter />
        <DesktopFooter />
      </body>
    </html>
  );
}
