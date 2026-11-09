<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Episodes

Each episode is one file in `content/<slug>.md`. The homepage list and the article pages both read these files through `lib/episodes.ts`, so there is no second list to update.

- Frontmatter: `title`, `date` (`YYYY-MM-DD`), `duration` (minutes, from the RSS `itunes:duration`), `description`.
- Body: the intro (shown on the page; its first paragraph becomes the meta description and the homepage summary), then `---`, then `## Transcription` and the transcript (collapsed on the page, still in the HTML for SEO).
- YouTube link: add the slug to `app/youtube.tsx`. Without one, the page shows the cover and no player.
- A guest is detected from a title ending in `avec <Nom>` or `(<Nom>)`.

## SEO

- Site constants (URL, RSS feed, host, description) live in `lib/site.ts`; don't hardcode them in pages.
- `app/robots.ts`, `app/sitemap.ts` and `app/llms.txt/route.ts` (the LLM index at `/llms.txt`) are generated from the episodes; nothing to update by hand.
- Every page sets `alternates: alternatesFor(path)` (canonical URL + RSS feed link). A page's `alternates` replaces the layout's, so always go through this helper.
- JSON-LD: `PodcastSeries` on the homepage, `PodcastEpisode` (+ `VideoObject` when there is a YouTube video) on episode pages. Serialize with `jsonLd()`.

## Short links

`/discord` redirects to the current Discord invite (see `redirects()` in `next.config.ts`). Discord invites expire: when the invite changes, update only that destination. Link to `https://generationia.xyz/discord` everywhere (site, YouTube, RSS), never to a raw invite.

## Design system

Dark, Spotify-like. Tokens live in `app/globals.css` (`@theme`): use them, never raw hex values in pages.

- Surfaces `background` / `surface` / `surface-hover` / `line`; text `foreground` / `subdued` / `faint`.
- `accent` (cover orange `#FDB95A`) is the only accent: play buttons, links, "Nouveau". One orange element per area.
- `guest` (purple) is for guest badges only.
- Fonts: Anton (`font-display`) for big titles only; Figtree (`font-sans`) for everything else.
- Radii: `rounded-sm` thumbnails, `rounded-lg` covers and rows, `rounded-xl` panels; the play button is the only circle.
- Shared pieces: `app/components/` (`Hero`, `TopBar`, `PlatformLinks`, `YouTubePlayer`, `Markdown`, `Footer`) and class strings in `app/components/ui.ts`.
