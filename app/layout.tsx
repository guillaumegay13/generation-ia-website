import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
