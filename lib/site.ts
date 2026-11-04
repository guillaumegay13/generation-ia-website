import type { Metadata } from "next";

export const SITE_URL = "https://generationia.xyz";
export const RSS_URL = "https://media.rss.com/generation-ia/feed.xml";
export const SITE_NAME = "Génération IA";
export const HOST_NAME = "Guillaume Gay";
// Already public in the RSS.com episode descriptions.
export const CONTACT_EMAIL = "guillaume.gay@protonmail.com";
export const HOST_LINKEDIN = "https://www.linkedin.com/in/guillaume-gay-aa0ba6133/";
export const SITE_DESCRIPTION =
  "L'IA générative telle que ChatGPT est une nouvelle révolution telle que l'ont été l'électricité ou internet. Conseils pratiques, outils, actualités et impact sociétal.";

/** Canonical URL + the podcast RSS feed, for a page's `alternates` metadata. */
export function alternatesFor(path: string): Metadata["alternates"] {
  return {
    canonical: path,
    types: { "application/rss+xml": [{ url: RSS_URL, title: `${SITE_NAME} (RSS)` }] },
  };
}

/** Serialize JSON-LD safely for a <script> tag (escapes "<"). */
export function jsonLd(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
