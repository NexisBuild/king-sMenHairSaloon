import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-bebas",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "King's Men Hair Saloon — Sharp Cuts, Royal Standard",
  description:
    "Gentlemen's grooming house since 2012. Signature haircuts, skin fades, beard sculpting and hot towel shaves. Book instantly on WhatsApp.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
