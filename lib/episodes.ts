import fs from "fs";
import path from "path";
import { YOUTUBE_LINKS } from "@/app/youtube";

export type Episode = {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  durationMin: number;
  intro: string; // markdown, shown on the page
  summary: string; // first intro paragraph, plain text
  transcript: string; // markdown, collapsed on the page
  youtubeId: string | null;
  guest: string | null;
};

const CONTENT_DIR = path.join(process.cwd(), "content");

const field = (fm: string, name: string) =>
  fm.match(new RegExp(`^${name}:\\s*"?(.*?)"?\\s*$`, "m"))?.[1]?.replace(/\\"/g, '"') ?? "";

const stripMarkdown = (s: string) =>
  s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*([^*]+)\*/g, "$1");

// Lines of the intro that are calls to action, not a description of the episode.
const CTA = /^(\*Transcription brute|Rejoins|N'hésitez|Tous mes liens|Mes liens|Pour )/;

function parse(slug: string): Episode | null {
  const file = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf-8");
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return null;
  const [, fm, body] = match;

  const [introRaw, transcriptRaw = ""] = body.split(/\n---\s*\n+## Transcription\s*\n/);
  const intro = introRaw
    .split("\n")
    .filter((line) => !line.startsWith("*Transcription brute"))
    .join("\n")
    .trim();
  const firstPara = intro.split(/\n\s*\n/).find((p) => p.trim() && !CTA.test(p.trim())) ?? "";

  const title = field(fm, "title") || slug;
  const yt = YOUTUBE_LINKS[slug]?.match(/youtu\.be\/([\w-]+)/)?.[1] ?? null;
  const guest =
    title.match(/avec ([^)]+?)\s*$/i)?.[1] ?? title.match(/\(([^)]+)\)\s*$/)?.[1] ?? null;

  return {
    slug,
    title,
    date: field(fm, "date"),
    durationMin: Number(field(fm, "duration")) || 0,
    intro,
    summary: stripMarkdown(firstPara.trim()),
    transcript: transcriptRaw.trim(),
    youtubeId: yt,
    guest,
  };
}

export function getEpisode(slug: string) {
  return parse(slug);
}

export function getAllEpisodes(): Episode[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => parse(f.replace(/\.md$/, "")))
    .filter((e): e is Episode => e !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
}

const MONTHS = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];

export function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

export function formatDuration(min: number) {
  if (!min) return "";
  return min >= 60 ? `${Math.floor(min / 60)} h ${String(min % 60).padStart(2, "0")} min` : `${min} min`;
}

export const thumbnailOf = (e: Episode, size: "hq" | "maxres" = "hq") =>
  e.youtubeId ? `https://i.ytimg.com/vi/${e.youtubeId}/${size}default.jpg` : "/cover.jpg";
