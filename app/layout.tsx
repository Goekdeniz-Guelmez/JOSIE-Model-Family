import type { Metadata } from "next";
import { Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { publicAsset } from "./publicAsset";

const sans = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://goekdeniz-guelmez.github.io/JOSIE-Model-Family/"),
  title: "JOSIE — Growing Intelligence",
  description:
    "The JOSIE family of uncensored, high-performance, personality-driven language models by Gökdeniz Gülmez.",
  openGraph: {
    title: "JOSIE — Growing Intelligence",
    description:
      "Three generations of uncensored, high-performance, personality-driven language models.",
    images: [{ url: publicAsset("og.png"), width: 1200, height: 630, alt: "JOSIE — Growing Intelligence" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JOSIE — Growing Intelligence",
    description: "The JOSIE model family by Gökdeniz Gülmez.",
    images: [publicAsset("og.png")],
  },
  icons: {
    icon: publicAsset("favicon.svg"),
    shortcut: publicAsset("favicon.svg"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable}`}>{children}</body>
    </html>
  );
}
