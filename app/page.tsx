import Image from "next/image";
import Link from "next/link";

const EPISODES = [
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

const PLATFORMS = [
  {
    name: "Apple Podcasts",
    url: "https://podcasts.apple.com/us/podcast/g%C3%A9n%C3%A9ration-ia/id1811120641",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 fill-current">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 3.17 1.474 5.994 3.77 7.828-.032-.9-.06-2.282.013-3.264.066-.887.427-3.789.427-3.789s-.109-.218-.109-.54c0-.506.293-.883.658-.883.31 0 .46.233.46.512 0 .312-.199.778-.302 1.21-.086.363.182.66.54.66.648 0 1.146-.683 1.146-1.67 0-.873-.628-1.483-1.525-1.483-1.039 0-1.649.779-1.649 1.583 0 .313.12.649.271.832a.109.109 0 0 1 .025.105l-.101.418c-.016.067-.053.081-.122.049-.456-.212-.74-.878-.74-1.413 0-1.152.837-2.21 2.414-2.21 1.267 0 2.251.903 2.251 2.11 0 1.259-.793 2.272-1.894 2.272-.37 0-.718-.192-.837-.42l-.228.868c-.082.318-.305.717-.455.96A10 10 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Z" />
      </svg>
    ),
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/show/generation-ia",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 fill-current">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm4.586 14.424a.623.623 0 0 1-.857.207c-2.348-1.435-5.304-1.76-8.786-.964a.623.623 0 1 1-.277-1.215c3.809-.87 7.076-.496 9.712 1.115a.623.623 0 0 1 .208.857Zm1.224-2.723a.78.78 0 0 1-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 1 1-.453-1.492c3.632-1.102 8.147-.568 11.234 1.329a.78.78 0 0 1 .256 1.072Zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.935.935 0 1 1-.543-1.79c3.532-1.072 9.404-.865 13.115 1.338a.935.935 0 0 1-1.054 1.608Z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@generationia",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 fill-current">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
      </svg>
    ),
  },
  {
    name: "RSS",
    url: "https://media.rss.com/generation-ia/feed.xml",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 fill-current">
        <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248Zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82Zm0-8.18v4.819c10.781.075 19.51 8.796 19.586 19.581h4.815c-.075-13.493-11.012-24.413-24.401-24.4Z" />
      </svg>
    ),
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
          L'IA générative telle que ChatGPT est une nouvelle révolution telle
          que l'ont été l'électricité ou internet. Conseils pratiques, outils,
          actualités et impact sociétal.
        </p>
        <p className="mt-2 text-sm text-muted">
          Par <span className="text-foreground">Guillaume Gay</span>
        </p>

        {/* Platform links */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {PLATFORMS.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-card-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent-light"
            >
              {p.icon}
              {p.name}
            </a>
          ))}
        </div>
      </section>

      {/* Épisodes */}
      <section className="mx-auto w-full max-w-2xl px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-6">Épisodes</h2>
        <ol className="flex flex-col divide-y divide-card-border">
          {EPISODES.map((ep) => (
            <li key={ep.slug}>
              <Link
                href={`/articles/${ep.slug}`}
                className="flex flex-col gap-1 py-4 transition-colors hover:text-accent-light"
              >
                <span className="font-medium leading-snug">{ep.title}</span>
                <span className="text-sm text-muted">{ep.date}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-card-border py-8 text-center text-sm text-muted">
        &copy; {new Date().getFullYear()} Génération IA &mdash; Guillaume Gay
      </footer>
    </div>
  );
}
