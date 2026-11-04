import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { PlayIcon } from "./components/icons";
import PlatformLinks, { BrandMark, COMMUNITY } from "./components/PlatformLinks";
import TopBar from "./components/TopBar";
import { pillClass, playButtonClass, wrapClass } from "./components/ui";
import { formatDate, formatDuration, getAllEpisodes, thumbnailOf, type Episode } from "@/lib/episodes";
import { HOST_LINKEDIN, HOST_NAME, RSS_URL, SITE_DESCRIPTION, SITE_NAME, SITE_URL, jsonLd } from "@/lib/site";
import { PLATFORMS } from "./components/PlatformLinks";

const ABOUT = SITE_DESCRIPTION;

function Badge({ tone, children }: { tone: "new" | "guest"; children: React.ReactNode }) {
  return (
    <span
      className={`mr-1.5 mb-1.5 inline-block rounded-sm px-[7px] py-0.5 text-[11px] font-bold tracking-wider uppercase ${
        tone === "new" ? "bg-accent/12 text-accent" : "bg-guest/12 text-guest"
      }`}
    >
      {children}
    </span>
  );
}

function EpisodeRow({ ep, isLatest, index }: { ep: Episode; isLatest: boolean; index: number }) {
  return (
    <li className="group/row relative -mx-3 border-line [&+&]:border-t">
      <Link
        href={`/articles/${ep.slug}`}
        style={{ animationDelay: `${Math.min(0.12 + index * 0.03, 0.5)}s` }}
        className="rise grid grid-cols-[96px_minmax(0,1fr)] gap-3.5 rounded-lg px-3 py-4 transition-colors hover:bg-surface-hover sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-[18px]"
      >
        <Image
          src={thumbnailOf(ep)}
          alt=""
          width={140}
          height={79}
          className="aspect-video w-full rounded-sm bg-surface object-cover"
        />
        <div className="min-w-0">
          {isLatest && <Badge tone="new">Nouveau</Badge>}
          {ep.guest && <Badge tone="guest">Invité · {ep.guest}</Badge>}
          <h3 className="mb-1 leading-snug font-bold group-hover/row:underline group-hover/row:underline-offset-2">
            {ep.title}
          </h3>
          <p className="line-clamp-2 text-sm leading-[1.45] text-subdued">{ep.summary}</p>
          <div className="mt-2.5 flex items-center gap-3.5 text-[13px] text-subdued">
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-foreground text-background transition-transform group-hover/row:scale-105">
              <PlayIcon className="ml-0.5 size-3" />
            </span>
            <span>{formatDate(ep.date)}</span>
            {ep.durationMin > 0 && (
              <span>
                <span className="mr-1.5 opacity-70">•</span>
                {formatDuration(ep.durationMin)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
}

export default function Home() {
  const episodes = getAllEpisodes();
  const latest = episodes[0];
  const [discord, linkedin] = COMMUNITY;
  const hours = Math.round(episodes.reduce((sum, e) => sum + e.durationMin, 0) / 60);

  const series = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    image: `${SITE_URL}/cover.jpg`,
    inLanguage: "fr-FR",
    webFeed: RSS_URL,
    author: { "@type": "Person", name: HOST_NAME, sameAs: [HOST_LINKEDIN] },
    sameAs: PLATFORMS.map((p) => p.url),
    episode: episodes.slice(0, 10).map((e) => ({
      "@type": "PodcastEpisode",
      name: e.title,
      url: `${SITE_URL}/articles/${e.slug}`,
      datePublished: e.date,
    })),
  };

  return (
    <div className="flex min-h-full flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(series)} />
      <TopBar />
      <Hero
        cover="/cover.jpg"
        eyebrow="Podcast"
        title="Génération IA"
        meta={["Guillaume Gay", `${episodes.length} épisodes`, `${hours} h d'écoute`]}
      />

      <div className={wrapClass}>
        <div className="rise flex flex-wrap items-center gap-3.5 py-6 [animation-delay:.1s] sm:gap-5">
          <Link href={`/articles/${latest.slug}`} aria-label="Écouter le dernier épisode" className={playButtonClass}>
            <PlayIcon className="ml-[3px] size-[22px]" />
          </Link>
          <a
            href="https://www.youtube.com/@guillaumegay9547?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className={pillClass}
          >
            S&apos;abonner
          </a>
          <div className="w-full sm:ml-auto sm:w-auto">
            <PlatformLinks variant="icons" />
          </div>
        </div>

        <div className="grid gap-6 pb-20 md:grid-cols-[minmax(0,1fr)_300px] md:gap-12">
          <section>
            <h2 className="mt-2 mb-3 text-2xl font-bold tracking-tight">Tous les épisodes</h2>
            <ol>
              {episodes.map((ep, i) => (
                <EpisodeRow key={ep.slug} ep={ep} isLatest={i === 0} index={i} />
              ))}
            </ol>
          </section>

          <aside className="rise self-start rounded-xl bg-surface p-5 [animation-delay:.15s] md:sticky md:top-21">
            <h2 className="mb-2.5 font-bold">À propos</h2>
            <p className="text-sm leading-relaxed text-subdued">{ABOUT}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Tech", "Société", "Français"].map((tag) => (
                <span key={tag} className="rounded-full bg-surface-hover px-2.5 py-1.5 text-xs font-semibold text-subdued">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={discord.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center gap-2.5 rounded-full bg-surface-hover px-4 py-2.5 text-sm font-bold transition-colors hover:bg-line"
            >
              <BrandMark p={discord} colored />
              {discord.label}
            </a>
            <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
              <Image
                src="/cover.jpg"
                alt=""
                width={44}
                height={44}
                className="size-11 rounded-full object-cover object-[70%_20%]"
              />
              <div>
                <p className="text-sm font-bold">Guillaume Gay</p>
                <p className="text-[13px] text-subdued">Hôte du podcast</p>
              </div>
              <a
                href={linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={linkedin.label}
                title={linkedin.label}
                className="ml-auto grid size-10 place-items-center rounded-full transition-colors hover:bg-surface-hover"
              >
                <BrandMark p={linkedin} colored />
              </a>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
