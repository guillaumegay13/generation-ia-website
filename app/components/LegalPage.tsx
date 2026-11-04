import type { ReactNode } from "react";
import Footer from "./Footer";
import TopBar from "./TopBar";
import { wrapClass } from "./ui";

/** Plain text page (mentions légales, confidentialité). */
export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-col">
      <TopBar title={title} />
      <main
        className={`${wrapClass} max-w-3xl pt-6 pb-20 [&_a]:text-accent [&_a]:underline [&_a]:decoration-accent/40 [&_a]:underline-offset-2 hover:[&_a]:decoration-accent [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-bold [&_li]:mb-1.5 [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-[#d9d9d9] [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:text-[#d9d9d9]`}
      >
        <h1 className="font-display text-[clamp(36px,6vw,56px)] leading-none">{title}</h1>
        <p className="mt-3 text-sm !text-faint">Dernière mise à jour : {updated}</p>
        {children}
      </main>
      <Footer />
    </div>
  );
}
