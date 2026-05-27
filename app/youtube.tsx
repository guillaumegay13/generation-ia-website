// YouTube video link per episode (slug -> watch URL).
// Single source of truth shared by the homepage list and article pages.
export const YOUTUBE_LINKS: Record<string, string> = {
  "comment-evaluer-ia-stephane-collot": "https://youtu.be/M58gvU2xlhY",
  "ia-service-entreprises-thibault-fritsch": "https://youtu.be/4OlWf_Vj6U4",
  "gerer-entreprise-agent-ia": "https://youtu.be/z8Dqli1KbrQ",
  "intelligence-artificielle-et-moi": "https://youtu.be/E3xutgn5JmQ",
  "tout-savoir-sur-claude-code": "https://youtu.be/MYFPvVSZ2lg",
  "ou-en-est-ia-2026": "https://youtu.be/_T5QR38fsh0",
  "actu-ia-6": "https://youtu.be/QqiCHoC79Dk",
  "actu-ia-5": "https://youtu.be/M1bhxnpiiyo",
  "actu-ia-4": "https://youtu.be/H4eXnl6LAxg",
  "actu-ia-3": "https://youtu.be/VBvRnnrcMrU",
  "actu-ia-2": "https://youtu.be/Q8iaCYxguYQ",
  "actu-ia-1": "https://youtu.be/vWaJYqlMaBc",
  "5-preuves-ia-generative-creative": "https://youtu.be/Dq9K7qFUiKM",
  "coder-application-ia-zero": "https://youtu.be/LuQPboMCnCg",
  "ia-vraiment-intelligentes": "https://youtu.be/yU8J_cREDr4",
  "comment-parler-ia": "https://youtu.be/Dz5oABNOiKU",
  "concurrents-chatgpt": "https://youtu.be/c_g6FVFfCiM",
  "chatgpt-mes-parents": "https://youtu.be/iV1K_MEDneg",
};

export function YouTubeIcon({ className = "size-5 fill-current" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
    </svg>
  );
}
