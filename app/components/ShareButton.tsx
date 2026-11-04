"use client";

import { useState } from "react";
import { pillClass } from "./ui";

/** Native share sheet on mobile, copy-link fallback elsewhere. */
export default function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // user closed the share sheet
      }
      return;
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button type="button" onClick={share} className={pillClass}>
      {copied ? "Lien copié" : "Partager"}
    </button>
  );
}
