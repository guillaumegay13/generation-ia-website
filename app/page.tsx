import Image from "next/image";
import Link from "next/link";
import PlatformLinks from "./components/PlatformLinks";
import { YOUTUBE_LINKS, YouTubeIcon } from "./youtube";

const EPISODES = [
  {
    title: "Ce que j'ai vu à San Francisco sur le développement de l'IA",
    date: "2 septembre 2026",
    slug: "san-francisco-developpement-ia",
  },
  {
    title: "Le comeback des modèles open source américains ? (Meta, Thinking Machines, Grok..)",
    date: "17 août 2026",
    slug: "comeback-modeles-open-source-americains",
  },
  {
    title: "Les derniers avancements de l'IA générative 🤯",
    date: "5 août 2026",
    slug: "derniers-avancements-ia-generative",
  },
  {
    title: "La guerre de l'intelligence : États-Unis vs Chine",
    date: "9 juillet 2026",
    slug: "guerre-intelligence-usa-chine",
  },
  {
    title: "Comment gérer le coût de l'IA pour une entreprise ? Avec Benjamin Drighès",
    date: "18 juin 2026",
    slug: "cout-ia-entreprise-benjamin-drighes",
  },
  {
    title: "On fait le point sur l'IA et le podcast ! Claude Fable 5, Génération IA, Modèle Routing",
    date: "11 juin 2026",
    slug: "point-ia-podcast-claude-fable-5",
  },
  {
    title: "Comment évaluer une IA ? Avec Stéphane Collot (ex-Meta)",
    date: "27 mai 2026",
    slug: "comment-evaluer-ia-stephane-collot",
  },
  {
    title: "L'IA au service des entreprises - avec Thibault Fritsch",
    date: "5 mai 2026",
    slug: "ia-service-entreprises-thibault-fritsch",
  },
  {
    title: "Gérer son entreprise avec un agent IA ?",
    date: "27 avril 2026",
    slug: "gerer-entreprise-agent-ia",
  },
  {
    title: "L'intelligence artificielle et moi",
    date: "20 avril 2026",
    slug: "intelligence-artificielle-et-moi",
  },
  {
    title: "Tout savoir sur Claude Code (skills, Mythos, leak code source, etc)",
    date: "13 avril 2026",
    slug: "tout-savoir-sur-claude-code",
  },
  {
    title: "Où en est l'IA en 2026 ? Claude Code, Cowork & Dispatch, OpenClaw,...",
    date: "25 mars 2026",
    slug: "ou-en-est-ia-2026",
  },
  {
    title: "Actu IA #6 : Lovable, Meta Superintelligence Lab, Modèles Chinois, gpt-oss, Veo 3",
    date: "7 août 2025",
    slug: "actu-ia-6",
  },
  {
    title: "Actu IA #5 : Claude Code et menace, H Company, Base44 solofounder $80M exit",
    date: "26 juin 2025",
    slug: "actu-ia-5",
  },
  {
    title: "Actu IA #4 : Mistral Agents, MyTrainer, Veo 3, Coût de l'IA, Évaluation des modèles",
    date: "12 juin 2025",
    slug: "actu-ia-4",
  },
  {
    title: "Actu IA #3 : \"Gadget\" IA, Claude 4, Vibe Coding, OpenAI - io, ChatGPT plus gratuit",
    date: "28 mai 2025",
    slug: "actu-ia-3",
  },
  {
    title: "Actu IA #2 : Google I/O, OpenAI Codex, Devstral & l'avis de Jancovici",
    date: "22 mai 2025",
    slug: "actu-ia-2",
  },
  {
    title: "Actu IA #1 : Manus, statut d'OpenAI, Le Chat Entreprise, Gemini & Super Intelligence",
    date: "15 mai 2025",
    slug: "actu-ia-1",
  },
  {
    title: "5 preuves que l'IA générative est créative",
    date: "12 mai 2025",
    slug: "5-preuves-ia-generative-creative",
  },
  {
    title: "Coder une application grâce à l'IA en partant de zéro ? Avec Frédéric",
    date: "10 mai 2025",
    slug: "coder-application-ia-zero",
  },
  {
    title: "Les intelligences artificielles sont-elles vraiment intelligentes ?",
    date: "6 mai 2025",
    slug: "ia-vraiment-intelligentes",
  },
  {
    title: "Comment parler à l'intelligence artificielle ?",
    date: "5 mai 2025",
    slug: "comment-parler-ia",
  },
  {
    title: "Les concurrents de ChatGPT",
    date: "2 mai 2025",
    slug: "concurrents-chatgpt",
  },
  {
    title: "J'ai montré ChatGPT à mes parents !",
    date: "28 avril 2025",
    slug: "chatgpt-mes-parents",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Hero */}
      <section className="flex flex-col items-center px-6 pt-16 pb-12">
        <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-lg shadow-accent/20 mb-8">
          <Image
            src="/cover.jpg"
            alt="Génération IA - Couverture du podcast"
            width={192}
            height={192}
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-center sm:text-5xl">
          Génération{" "}
          <span className="text-[#a78bfa]">IA</span>
        </h1>
        <p className="mt-4 max-w-lg text-center text-lg text-muted leading-relaxed">
          L&apos;IA générative telle que ChatGPT est une nouvelle révolution telle
          que l&apos;ont été l&apos;électricité ou internet. Conseils pratiques, outils,
          actualités et impact sociétal.
        </p>
        <p className="mt-2 text-sm text-muted">
          Par <span className="text-foreground">Guillaume Gay</span>
        </p>

        {/* Platform links */}
        <div className="mt-8">
          <PlatformLinks />
        </div>
      </section>

      {/* Épisodes */}
      <section className="mx-auto w-full max-w-2xl px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-6">Épisodes</h2>
        <ol className="flex flex-col divide-y divide-card-border">
          {EPISODES.map((ep) => {
            const youtube = YOUTUBE_LINKS[ep.slug];
            return (
              <li key={ep.slug} className="flex items-center gap-3">
                <Link
                  href={`/articles/${ep.slug}`}
                  className="flex flex-1 flex-col gap-1 py-4 transition-colors hover:text-accent-light"
                >
                  <span className="font-medium leading-snug">{ep.title}</span>
                  <span className="text-sm text-muted">{ep.date}</span>
                </Link>
                {youtube && (
                  <a
                    href={youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Regarder « ${ep.title} » sur YouTube`}
                    title="Regarder sur YouTube"
                    className="shrink-0 text-muted transition-colors hover:text-[#ff0000]"
                  >
                    <YouTubeIcon className="size-6 fill-current" />
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-card-border py-8 text-center text-sm text-muted">
        &copy; {new Date().getFullYear()} Génération IA &mdash; Guillaume Gay
      </footer>
    </div>
  );
}
