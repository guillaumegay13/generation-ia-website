import type { ReactNode } from "react";

/** Inline markdown: [links](url) and *italics*. */
function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*([^*]+)\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(
      m[1] ? (
        <a
          key={m.index}
          href={m[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline decoration-accent/40 underline-offset-2 transition-colors hover:decoration-accent"
        >
          {m[1]}
        </a>
      ) : (
        <em key={m.index}>{m[3]}</em>
      ),
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

/** The small markdown subset used in content/*.md: paragraphs, ## headings, links, italics. */
export default function Markdown({ source, className }: { source: string; className: string }) {
  return source
    .split("\n")
    .filter((line) => line.trim() && line.trim() !== "---")
    .map((line, i) =>
      line.startsWith("## ") ? (
        <h2 key={i} className="mt-8 mb-3 text-xl font-bold">
          {line.slice(3)}
        </h2>
      ) : (
        <p key={i} className={className}>
          {inline(line)}
        </p>
      ),
    );
}
