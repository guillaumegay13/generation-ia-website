"use client";

import { useState } from "react";

/** Shows an address with a copy button: mailto links do nothing without a mail app. */
export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 rounded-xl bg-surface px-[18px] py-3.5 text-sm text-subdued">
      <span>Ou écrivez directement à</span>
      <b className="font-bold break-all text-foreground select-all">{email}</b>
      <button
        type="button"
        onClick={copy}
        className={`ml-auto inline-flex h-[34px] cursor-pointer items-center gap-1.5 rounded-full border px-3.5 text-[13px] font-bold transition-colors ${
          copied ? "border-accent text-accent" : "border-line text-foreground hover:border-subdued"
        }`}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="9" y="9" width="12" height="12" rx="2" />
          <path d="M5 15V5a2 2 0 0 1 2-2h10" />
        </svg>
        <span aria-live="polite">{copied ? "Copié" : "Copier"}</span>
      </button>
    </div>
  );
}
