import { formatDate, getAllEpisodes } from "@/lib/episodes";
import { HOST_NAME, RSS_URL, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

// llms.txt (https://llmstxt.org): a Markdown index of the site for LLMs.
// Built from the episodes at build time, like the sitemap.
export const dynamic = "force-static";

export function GET() {
  const episodes = getAllEpisodes()
    .map((e) => `- [${e.title}](${SITE_URL}/articles/${e.slug}) (${formatDate(e.date)}): ${e.summary}`)
    .join("\n");

  const body = `# ${SITE_NAME}

> Podcast francophone sur l'intelligence artificielle générative, animé par ${HOST_NAME}. ${SITE_DESCRIPTION}

Chaque page d'épisode contient la description et la transcription complète.

## Épisodes

${episodes}

## Liens

- [Accueil](${SITE_URL}): liste des épisodes et plateformes d'écoute
- [Flux RSS](${RSS_URL}): flux officiel du podcast
- [Partenariats](${SITE_URL}/partenariats): audience et offres de partenariat
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
