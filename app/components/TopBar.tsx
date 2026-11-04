"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BackIcon } from "./icons";
import { wrapClass } from "./ui";

/** Transparent over the hero, solid once the page scrolls past it. */
export default function TopBar({ title }: { title?: string }) {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 180);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex h-16 items-center transition-colors ${
        solid ? "border-b border-line bg-background/90 backdrop-blur-md" : ""
      }`}
    >
      <div className={`${wrapClass} flex items-center gap-4`}>
        {title ? (
          <>
            <Link
              href="/"
              aria-label="Retour aux épisodes"
              className="grid size-8 shrink-0 place-items-center rounded-full bg-black/50 transition-colors hover:bg-black/75"
            >
              <BackIcon />
            </Link>
            <span
              className={`truncate font-bold transition-opacity ${solid ? "opacity-100" : "opacity-0"}`}
            >
              {title}
            </span>
          </>
        ) : (
          <Link href="/" className="font-display text-xl uppercase">
            Génération <span className="text-accent">IA</span>
          </Link>
        )}
      </div>
    </header>
  );
}
