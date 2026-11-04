import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import { ChevronIcon, PlayIcon } from "../../components/icons";
import Markdown from "../../components/Markdown";
import PlatformLinks, { COMMUNITY, PLATFORMS } from "../../components/PlatformLinks";
import ShareButton from "../../components/ShareButton";
import TopBar from "../../components/TopBar";
import { playButtonClass, wrapClass } from "../../components/ui";
import YouTubePlayer, { PlayEpisodeButton } from "../../components/YouTubePlayer";
import { formatDate, formatDuration, getAllEpisodes, getEpisode, thumbnailOf } from "@/lib/episodes";
import { HOST_NAME, RSS_URL, SITE_NAME, SITE_URL, alternatesFor, jsonLd } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllEpisodes().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ep = getEpisode(slug);
  if (!ep) return {};
  const description = ep.summary || `Transcription de l'épisode "${ep.title}" du podcast ${SITE_NAME}.`;
  const image = ep.youtubeId ? thumbnailOf(ep, "maxres") : "/cover.jpg";
  return {
    title: ep.title,
    description,
    alternates: alternatesFor(`/articles/${ep.slug}`),
    openGraph: {
      type: "article",
      title: ep.title,
      description,
      url: `/articles/${ep.slug}`,
      siteName: SITE_NAME,
      locale: "fr_FR",
      publishedTime: ep.date,
      images: [ep.youtubeId ? { url: image, width: 1280, height: 720 } : { url: image, width: 600, height: 600 }],
    },
    twitter: {
      card: ep.youtubeId ? "summary_large_image" : "summary",
      title: ep.title,
      description,
      images: [image],
    },
  };
}

const TRANSCRIPT_NOTE =
  "Transcription brute générée automatiquement par Whisper — peut contenir des imprécisions.";

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const ep = getEpisode(slug);
  if (!ep) notFound();

  const spotify = PLATFORMS.find((p) => p.name === "Spotify")!.url;
  const url = `${SITE_URL}/articles/${ep.slug}`;
  const structured = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: ep.title,
    url,
    description: ep.summary,
    datePublished: ep.date,
    inLanguage: "fr-FR",
    ...(ep.durationMin ? { timeRequired: `PT${ep.durationMin}M` } : {}),
    author: { "@type": "Person", name: HOST_NAME },
    partOfSeries: { "@type": "PodcastSeries", name: SITE_NAME, url: SITE_URL, webFeed: RSS_URL },
    ...(ep.youtubeId
      ? {
          video: {
            "@type": "VideoObject",
            name: ep.title,
            description: ep.summary || ep.title,
            thumbnailUrl: thumbnailOf(ep, "maxres"),
            uploadDate: ep.date,
            ...(ep.durationMin ? { duration: `PT${ep.durationMin}M` } : {}),
            embedUrl: `https://www.youtube.com/embed/${ep.youtubeId}`,
            contentUrl: `https://www.youtube.com/watch?v=${ep.youtubeId}`,
          },
        }
      : {}),
  };

  return (
    <div className="flex min-h-full flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structured)} />
      <TopBar title={ep.title} />
      <Hero
        cover={ep.youtubeId ? undefined : "/cover.jpg"}
        eyebrow={ep.guest ? `Épisode · avec ${ep.guest}` : "Épisode"}
        title={ep.title}
        size="episode"
        meta={["Génération IA", formatDate(ep.date), formatDuration(ep.durationMin)].filter(Boolean)}
      />

      <div className={wrapClass}>
        <div className="rise flex items-center gap-5 py-6 [animation-delay:.1s]">
          {ep.youtubeId ? (
            <PlayEpisodeButton />
          ) : (
            <a href={spotify} target="_blank" rel="noopener noreferrer" aria-label="Écouter sur Spotify" className={playButtonClass}>
              <PlayIcon className="ml-[3px] size-[22px]" />
            </a>
          )}
          <ShareButton title={ep.title} />
        </div>

        <div className="grid gap-8 pb-20 md:grid-cols-[minmax(0,1fr)_300px] md:gap-12">
          <article className="rise min-w-0 [animation-delay:.15s]">
            {ep.youtubeId && <YouTubePlayer id={ep.youtubeId} title={ep.title} />}
            <div className="max-w-[65ch]">
              <Markdown source={ep.intro} className="mb-4 text-[17px] leading-[1.65] text-[#d9d9d9]" />
            </div>

            {ep.transcript && (
              <details className="group mt-8 border-t border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between py-[18px] text-lg font-bold [&::-webkit-details-marker]:hidden">
                  Transcription complète
                  <ChevronIcon className="size-5 text-subdued transition-transform group-open:rotate-180" />
                </summary>
                <div className="max-w-[65ch]">
                  <p className="mb-4 text-[13px] text-faint italic">{TRANSCRIPT_NOTE}</p>
                  <Markdown source={ep.transcript} className="mb-3.5 text-[15px] leading-[1.7] text-subdued" />
                </div>
              </details>
            )}
          </article>

          <aside className="self-start rounded-xl bg-surface p-5 md:sticky md:top-21">
            <h2 className="mb-2.5 font-bold">Écouter sur</h2>
            <PlatformLinks variant="list" />
            <h2 className="mt-5 mb-2.5 border-t border-line pt-5 font-bold">Communauté</h2>
            <PlatformLinks variant="list" items={COMMUNITY} />
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
