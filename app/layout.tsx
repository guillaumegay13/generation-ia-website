import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Anton, Figtree } from "next/font/google";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, alternatesFor } from "@/lib/site";

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
  metadataBase: new URL(SITE_URL),
  alternates: alternatesFor("/"),
  title: {
    default: "Génération IA - Le podcast sur l'intelligence artificielle",
    template: "%s | Génération IA",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    siteName: SITE_NAME,
    url: "/",
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
