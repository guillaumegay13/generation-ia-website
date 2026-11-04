import Image from "next/image";
import type { ReactNode } from "react";
import { wrapClass } from "./ui";

/**
 * Spotify-style header: orange gradient fading into the page, optional cover,
 * eyebrow, big display title and a "•"-separated meta line.
 * Sits under the sticky top bar (-mt-16).
 */
export default function Hero({
  cover,
  eyebrow,
  title,
  size = "show",
  meta,
}: {
  cover?: string;
  eyebrow: string;
  title: string;
  size?: "show" | "episode";
  meta: ReactNode[];
}) {
  return (
    <section
      className={`-mt-16 bg-linear-to-b to-background pt-20 pb-7 sm:pt-24 ${
        size === "show" ? "from-hero-from via-hero-via" : "from-hero-via via-hero-deep"
      }`}
    >
      <div className={`${wrapClass} flex flex-col gap-5 sm:flex-row sm:items-end sm:gap-7`}>
        {cover && (
          <Image
            src={cover}
            alt=""
            width={232}
            height={232}
            priority
            className="rise size-44 self-center rounded-lg object-cover shadow-[0_8px_40px_rgba(0,0,0,.55)] sm:size-58 sm:self-auto"
          />
        )}
        <div className="rise [animation-delay:.05s]">
          <p className="text-[13px] font-semibold">{eyebrow}</p>
          <h1
            className={
              size === "show"
                ? "mt-2 mb-4 font-display text-[clamp(48px,9vw,112px)] leading-[.92] uppercase"
                : "mt-2 mb-4 max-w-[22ch] font-display text-[clamp(32px,4.4vw,52px)] leading-[1.02]"
            }
          >
            {title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-white/75">
            {meta.map((m, i) => (
              <span key={i} className={i === 0 ? "font-bold text-foreground" : ""}>
                {i > 0 && <span className="mr-1.5 opacity-70">•</span>}
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
