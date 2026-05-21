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
    url: "https://open.spotify.com/show/7os802bMoGvWtkrNcpgz64",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 fill-current">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm4.586 14.424a.623.623 0 0 1-.857.207c-2.348-1.435-5.304-1.76-8.786-.964a.623.623 0 1 1-.277-1.215c3.809-.87 7.076-.496 9.712 1.115a.623.623 0 0 1 .208.857Zm1.224-2.723a.78.78 0 0 1-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 1 1-.453-1.492c3.632-1.102 8.147-.568 11.234 1.329a.78.78 0 0 1 .256 1.072Zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.935.935 0 1 1-.543-1.79c3.532-1.072 9.404-.865 13.115 1.338a.935.935 0 0 1-1.054 1.608Z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@guillaumegay9547",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 fill-current">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
      </svg>
    ),
  },
  {
    name: "Deezer",
    url: "https://www.deezer.com/show/1001839271",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 fill-current">
        <path d="M18.81 4.16h4.92v2.36h-4.92zM18.81 7.74h4.92V10.1h-4.92zM12.54 7.74h4.92V10.1h-4.92zM18.81 11.32h4.92v2.36h-4.92zM12.54 11.32h4.92v2.36h-4.92zM6.27 11.32h4.92v2.36H6.27zM18.81 14.9h4.92v2.36h-4.92zM12.54 14.9h4.92v2.36h-4.92zM6.27 14.9h4.92v2.36H6.27zM.01 14.9h4.92v2.36H.01zM18.81 18.48h4.92v2.36h-4.92zM12.54 18.48h4.92v2.36h-4.92zM6.27 18.48h4.92v2.36H6.27zM.01 18.48h4.92v2.36H.01z" />
      </svg>
    ),
  },
  {
    name: "Pocket Casts",
    url: "https://pocketcasts.com/podcast/g%C3%A9n%C3%A9ration-ia/4e1be740-2895-013e-e07d-0e1ab590d6db",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 fill-current">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19.2A7.2 7.2 0 1 1 19.2 12h-2.4a4.8 4.8 0 1 0-4.8 4.8v2.4z" />
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

export default function PlatformLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
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
  );
}
