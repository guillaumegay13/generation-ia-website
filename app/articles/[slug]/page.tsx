import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// This will be replaced by a proper data source (MDX files, CMS, etc.)
// For now, it serves as a placeholder for future transcript articles.
const ARTICLES: Record<string, { title: string; date: string; content: string }> = {};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES[slug];
  if (!article) return {};
  return {
    title: article.title,
    description: `Transcription de l'épisode "${article.title}" du podcast Génération IA.`,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES[slug];

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
      <p className="mt-2 text-sm text-muted">{article.date}</p>
      <div className="mt-8 prose prose-invert prose-zinc max-w-none">
        {article.content}
      </div>
    </article>
  );
}
