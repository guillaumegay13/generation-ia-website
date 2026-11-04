"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PlayIcon } from "./icons";
import { playButtonClass } from "./ui";

export const PLAY_EVENT = "gia:play";

/**
 * Lightweight embed: shows the thumbnail and only loads the YouTube iframe on
 * click, or when the page's main play button dispatches PLAY_EVENT.
 */
export default function YouTubePlayer({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPlay = () => {
      setPlaying(true);
      ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    window.addEventListener(PLAY_EVENT, onPlay);
    return () => window.removeEventListener(PLAY_EVENT, onPlay);
  }, []);

  return (
    <div ref={ref} className="group relative mb-8 aspect-video overflow-hidden rounded-xl bg-black">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 size-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Lire la vidéo « ${title} »`}
          className="absolute inset-0 size-full cursor-pointer"
        >
          <Image
            src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
            alt=""
            fill
            sizes="(max-width: 860px) 100vw, 640px"
            className="object-cover opacity-85 transition-opacity group-hover:opacity-100"
            priority
          />
          <span className="absolute inset-0 m-auto grid size-[72px] place-items-center rounded-full bg-accent text-accent-ink shadow-[0_8px_24px_rgba(0,0,0,.35)] transition-transform group-hover:scale-105">
            <PlayIcon className="ml-1 size-7" />
          </span>
        </button>
      )}
    </div>
  );
}

export function PlayEpisodeButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(PLAY_EVENT))}
      aria-label="Lire l'épisode"
      className={playButtonClass}
    >
      <PlayIcon className="ml-[3px] size-[22px]" />
    </button>
  );
}
