import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import fs from "fs";
import path from "path";

type Article = {
  title: string;
  date: string;
  description: string;
  content: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content");

function parseMarkdown(slug: string): Article | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return null;

  const frontmatter = match[1];
  const content = match[2].trim();

  const title =
    frontmatter.match(/title:\s*"(.*)"/)?.[1] ?? slug;
  const date =
    frontmatter.match(/date:\s*"(.*)"/)?.[1] ?? "";
  const description =
    frontmatter.match(/description:\s*"(.*)"/)?.[1] ?? "";

  return { title, date, description, content };
}

function getAllSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = parseMarkdown(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: `Transcription de l'épisode "${article.title}" du podcast Génération IA.`,
  };
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function renderContent(content: string) {
  // Split into sections by ## headings and paragraphs
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          className="text-2xl font-semibold mt-10 mb-4"
        >
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line === "---") {
      elements.push(
        <hr key={key++} className="my-8 border-card-border" />
      );
    } else if (line.trim() === "") {
      // skip empty lines (spacing handled by margins)
    } else {
      // Render paragraph with markdown links converted to <a> tags
      const parts: React.ReactNode[] = [];
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      let lastIndex = 0;
      let match;
      let partKey = 0;

      const text = line;
      while ((match = linkRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
          parts.push(text.slice(lastIndex, match.index));
        }
        parts.push(
          <a
            key={partKey++}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2 hover:text-accent-light"
          >
            {match[1]}
          </a>
        );
        lastIndex = match.index + match[0].length;
      }
      if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
      }

      // Handle *italic* text
      const processItalics = (nodes: React.ReactNode[]): React.ReactNode[] => {
        return nodes.map((node, i) => {
          if (typeof node !== "string") return node;
          const italicParts = node.split(/\*([^*]+)\*/g);
          if (italicParts.length === 1) return node;
          return italicParts.map((part, j) =>
            j % 2 === 1 ? <em key={`${i}-${j}`}>{part}</em> : part
          );
        });
      };

      elements.push(
        <p key={key++} className="mb-4 leading-relaxed text-foreground/90">
          {processItalics(parts)}
        </p>
      );
    }
  }

  return elements;
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = parseMarkdown(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="mx-auto w-full max-w-2xl px-6 py-16">
      <Link
        href="/"
        className="text-sm text-muted hover:text-accent-light transition-colors"
      >
        &larr; Retour aux épisodes
      </Link>
      <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
        {article.title}
      </h1>
      <p className="mt-2 text-sm text-muted">{formatDate(article.date)}</p>
      <div className="mt-8">{renderContent(article.content)}</div>
    </article>
  );
}
