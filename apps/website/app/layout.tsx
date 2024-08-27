import { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}
