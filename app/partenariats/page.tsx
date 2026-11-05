import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import CopyEmail from "../components/CopyEmail";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import { wrapClass } from "../components/ui";
import { AUDIENCE, GUESTS, HEATMAP, KEY_STATS, MONTHLY, STATS_DATE, TOP_SHORTS } from "@/lib/partners";
import { CONTACT_EMAIL, HOST_NAME, SITE_NAME, alternatesFor } from "@/lib/site";

const DESCRIPTION =
  "Sponsoriser Génération IA ou proposer un invité : audience, chiffres et contact du podcast francophone sur l'IA générative.";

export const metadata: Metadata = {
  title: "Partenariats",
  description: DESCRIPTION,
  alternates: alternatesFor("/partenariats"),
  openGraph: { title: `Partenariats — ${SITE_NAME}`, description: DESCRIPTION, url: "/partenariats", images: ["/cover.jpg"] },
};

const fmt = (n: number) => n.toLocaleString("fr-FR").replace(/ /g, " ");
const mailto = (subject: string) => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

const btn =
  "inline-flex h-12 items-center gap-2.5 self-start rounded-full px-6 text-[15px] font-extrabold transition hover:scale-[1.03]";
const btnPrimary = `${btn} bg-accent text-accent-ink hover:bg-accent-hover active:bg-accent-press`;
const btnGhost = `${btn} border border-white/45 hover:border-foreground`;
const panel = "rounded-xl bg-surface p-5";

function Block({ kicker, title, sub, id, first, children }: {
  kicker: string;
  title?: string;
  sub?: string;
  id?: string;
  first?: boolean;
  children?: ReactNode;
}) {
  return (
    <section id={id} className={first ? "pt-6 pb-14" : "border-t border-line py-14"}>
      <p className="mb-2.5 text-xs font-extrabold tracking-[.08em] text-accent uppercase">{kicker}</p>
      {title && <h2 className="mb-2.5 text-[clamp(26px,3.4vw,36px)] leading-[1.1] font-extrabold tracking-tight">{title}</h2>}
      {sub && <p className="mb-8 max-w-[60ch] leading-relaxed text-subdued">{sub}</p>}
      {children}
    </section>
  );
}

function GrowthChart() {
  const max = Math.max(...MONTHLY.map((m) => m.value));
  const last = MONTHLY[MONTHLY.length - 1];
  return (
    <div className={`${panel} mb-3 sm:p-[22px]`}>
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <b className="block font-display text-5xl leading-none font-normal">{fmt(last.value)}</b>
          <span className="text-sm text-subdued">écoutes en octobre</span>
        </div>
        <span className="rounded-full bg-accent/14 px-3 py-1.5 text-[13px] font-extrabold text-accent">×2 vs juillet</span>
      </div>
      <div className="grid h-[180px] grid-cols-6 items-end gap-2 sm:gap-3">
        {MONTHLY.map((m, i) => (
          <div key={m.month} className="flex h-full flex-col items-center justify-end gap-2">
            <span className="text-[11px] font-bold sm:text-xs">{fmt(m.value)}</span>
            <i
              className={`block w-full max-w-[72px] rounded-t-md rounded-b-xs ${i === MONTHLY.length - 1 ? "bg-accent" : "bg-[#5a4a33]"}`}
              style={{ height: Math.round((m.value / max) * 120) }}
            />
            <em className="text-xs text-subdued not-italic">{m.month}</em>
          </div>
        ))}
      </div>
    </div>
  );
}

function Heatmap() {
  const max = Math.max(...HEATMAP.flatMap(([, ...v]) => v));
  return (
    <div className={`${panel} mt-3`}>
      <h3 className="mb-4 flex justify-between gap-3 text-sm font-extrabold">
        Moment d&apos;écoute <span className="text-right text-accent">en semaine, matin et fin de journée</span>
      </h3>
      <div className="grid grid-cols-[30px_repeat(24,minmax(0,1fr))] gap-[2px] text-[11px] text-faint sm:gap-[3px]">
        {HEATMAP.map(([day, ...values]) => (
          <div key={day} className="contents">
            <span className="self-center">{day}</span>
            {values.map((v, h) => (
              <i
                key={h}
                title={`${day} ${h} h : ${v}`}
                className="block h-[18px] rounded-[3px] bg-[rgb(253_185_90/var(--a))]"
                style={{ "--a": (0.08 + (0.92 * v) / max).toFixed(2) } as CSSProperties}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="mt-2 ml-8 flex justify-between text-[11px] text-faint">
        {["0 h", "6 h", "12 h", "18 h", "23 h"].map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <p className="mt-3 text-xs text-faint">
        77 % des écoutes ont lieu en semaine, avec deux temps forts : le matin et la fin de journée.
      </p>
    </div>
  );
}

export default function Partenariats() {
  return (
    <div className="flex min-h-full flex-col">
      <TopBar title="Partenariats" />

      <section className="-mt-16 bg-linear-to-b from-hero-from via-hero-via via-55% to-background pt-28 pb-14">
        <div className={`${wrapClass} rise`}>
          <p className="text-[13px] font-bold tracking-[.04em] text-white/80 uppercase">Partenariats</p>
          <h1 className="mt-3.5 mb-5 max-w-[14ch] font-display text-[clamp(44px,7.5vw,92px)] leading-[.95]">
            Parlez à ceux qui <span className="text-accent">font</span>{" "}l&apos;IA.
          </h1>
          <p className="max-w-[56ch] text-[clamp(17px,2vw,20px)] leading-normal text-white/85">
            {SITE_NAME}{" "}est le podcast francophone qui décrypte l&apos;IA générative sans jargon, avec des invités qui la
            construisent : dirigeants, chercheurs, fondateurs. Des conversations longues, pour un public curieux qui veut
            comprendre et agir.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className={btnPrimary}>Devenir sponsor</a>
            <a href="#contact" className={btnGhost}>Proposer un invité</a>
          </div>
        </div>
      </section>

      <main className={wrapClass}>
        <Block
          first
          kicker="En chiffres"
          title="Une audience qui grandit chaque mois depuis l'été."
          sub="Écoutes du podcast par mois, toutes plateformes (Spotify, Apple Podcasts, Deezer…)."
        >
          <GrowthChart />
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {KEY_STATS.map((s) => (
              <div key={s.label} className="rounded-xl bg-surface px-4 py-5 sm:px-5 sm:py-[22px]">
                <b className="block font-display text-4xl leading-none font-normal sm:text-[44px]">
                  {s.value}
                  {s.unit && <small className="ml-0.5 text-[.55em] text-accent">{s.unit}</small>}
                </b>
                <span className="mt-2.5 block text-sm leading-snug text-subdued">{s.label}</span>
              </div>
            ))}
          </div>
          <div className={`${panel} mt-3`}>
            <div className="mb-3.5 flex justify-between text-sm">
              <b>Les Shorts qui ont le plus tourné</b>
              <span className="text-faint">YouTube</span>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {TOP_SHORTS.map((s) => (
                <a
                  key={s.id}
                  href={`https://youtube.com/shorts/${s.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid grid-cols-[54px_1fr] items-center gap-3 rounded-lg p-1.5 transition-colors hover:bg-surface-hover"
                >
                  <Image
                    src={`https://i.ytimg.com/vi/${s.id}/hqdefault.jpg`}
                    alt=""
                    width={54}
                    height={96}
                    className="h-24 w-[54px] rounded-md object-cover"
                  />
                  <div>
                    <b className="line-clamp-3 text-[13px] leading-snug">{s.title}</b>
                    <span className="mt-1.5 block text-[13px] font-extrabold text-accent">{fmt(s.views)} vues</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <p className="mt-3.5 text-xs text-faint">
            Sources : RSS.com et YouTube, relevés le {STATS_DATE}. « Écoutes » = téléchargements comptés par RSS.com ; vues
            YouTube = vues des vidéos publiées sur les 90 derniers jours.
          </p>
        </Block>

        <Block
          kicker="Ils sont passés au micro"
          title="Des invités qui font l'IA."
          sub="Chaque invité apporte sa crédibilité et son audience : votre marque est associée à ces conversations."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GUESTS.map((g) => (
              <Link
                key={g.slug}
                href={`/articles/${g.slug}`}
                className="overflow-hidden rounded-xl bg-surface transition-colors hover:bg-surface-hover"
              >
                <Image
                  src={`https://i.ytimg.com/vi/${g.yt}/hqdefault.jpg`}
                  alt=""
                  width={480}
                  height={270}
                  className="aspect-video w-full object-cover"
                />
                <div className="px-[18px] pt-4 pb-[18px]">
                  <h3 className="text-[17px] font-extrabold">{g.name}</h3>
                  <p className="mt-0.5 text-[13px] font-semibold text-guest">{g.role}</p>
                  <p className="mt-2.5 text-[13px] leading-snug text-subdued">« {g.episode} »</p>
                </div>
              </Link>
            ))}
          </div>
        </Block>

        <Block
          kicker="Ce qu'on peut faire ensemble"
          title="Un format à définir ensemble."
          sub="Message lu par Guillaume dans un épisode, épisode construit autour de votre expertise, partenariat sur une saison : on choisit ensemble ce qui sert le mieux vos objectifs. Les messages restent dans l'épisode, qui continue d'être écouté après sa sortie."
        />

        <Block
          kicker="Profil d'audience"
          title="Qui écoute, où et quand."
          sub="Un public très majoritairement français, qui écoute sur mobile, surtout en semaine. Données RSS.com, mai → novembre 2026."
        >
          <div className="grid gap-3 md:grid-cols-3">
            {AUDIENCE.map((a) => (
              <div key={a.title} className={panel}>
                <h3 className="mb-4 flex justify-between text-sm font-extrabold">
                  {a.title} <span className="text-accent">{a.headline}</span>
                </h3>
                {a.rows.map((r) => (
                  <div key={r.label} className="mb-2.5 grid grid-cols-[88px_1fr_40px] items-center gap-2.5 text-[13px] text-subdued">
                    <span>{r.label}</span>
                    <i className="block h-2 overflow-hidden rounded bg-surface-hover">
                      <i
                        className={`block h-full rounded ${r.highlight ? "bg-accent" : "bg-[#6b6b6b]"}`}
                        style={{ width: `${r.pct}%` }}
                      />
                    </i>
                    <em className="text-right font-semibold text-foreground not-italic">{Math.round(r.pct)} %</em>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <Heatmap />
        </Block>

        <Block kicker="L'hôte">
          <div className="grid grid-cols-[72px_1fr] items-center gap-4 sm:grid-cols-[120px_1fr] sm:gap-6">
            <Image src="/host.jpg" alt={HOST_NAME} width={120} height={120} className="size-[72px] rounded-full object-cover sm:size-[120px]" />
            <div>
              <h3 className="text-[22px] font-extrabold">{HOST_NAME}</h3>
              <p className="mt-1 font-bold text-accent">Hôte du podcast</p>
              <p className="mt-1.5 max-w-[62ch] leading-relaxed text-subdued">
                Un regard technique et crédible sur l&apos;IA générative : les outils, les usages et les enjeux, expliqués
                par un ingénieur du domaine qui les utilise au quotidien.
              </p>
            </div>
          </div>
        </Block>

        <Block id="contact" kicker="Travaillons ensemble" title="Une idée ? Écrivez-moi.">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-3 rounded-2xl border border-[#6b4615] bg-linear-160 from-[#5a3a10] to-hero-deep to-70% p-7">
              <h3 className="font-display text-[34px] leading-none">Devenir sponsor</h3>
              <p className="flex-1 leading-relaxed text-white/80">
                Présentez votre produit à une audience francophone passionnée d&apos;IA. On construit ensemble le format qui
                vous correspond.
              </p>
              <a href={mailto(`Partenariat ${SITE_NAME}`)} className={`${btnPrimary} mt-2`}>
                Discutons partenariat
              </a>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-7">
              <h3 className="font-display text-[34px] leading-none">Proposer un invité</h3>
              <p className="flex-1 leading-relaxed text-white/80">
                Vous travaillez sur l&apos;IA et avez quelque chose à raconter ? Ou vous connaissez la personne idéale pour
                un épisode ? Proposez-la.
              </p>
              <a href={mailto(`Proposition d'invité ${SITE_NAME}`)} className={`${btnGhost} mt-2`}>
                Proposer un invité
              </a>
              <span className="text-[13px] text-subdued">Indiquez le nom, le sujet et pourquoi maintenant.</span>
            </div>
          </div>
          <CopyEmail email={CONTACT_EMAIL} />
        </Block>
      </main>

      <Footer />
    </div>
  );
}
