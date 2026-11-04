import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Anton, Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Génération IA - Le podcast sur l'intelligence artificielle",
    template: "%s | Génération IA",
  },
  description:
    "L'IA générative telle que ChatGPT est une nouvelle révolution telle que l'ont été l'électricité ou internet. Conseils pratiques, outils, actualités et impact sociétal.",
  openGraph: {
    title: "Génération IA",
    description:
      "Le podcast francophone sur l'intelligence artificielle générative",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/cover.jpg", width: 600, height: 600 }],
  },
  twitter: {
    card: "summary",
    title: "Génération IA",
    description:
      "Le podcast francophone sur l'intelligence artificielle générative",
    images: ["/cover.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${figtree.variable} ${anton.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
