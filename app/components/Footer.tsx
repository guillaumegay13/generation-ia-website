import Link from "next/link";
import { wrapClass } from "./ui";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line pt-8 pb-12 text-[13px] text-faint">
      <div className={`${wrapClass} flex flex-wrap items-center justify-between gap-x-6 gap-y-2`}>
        <span>&copy; {new Date().getFullYear()} Génération IA — Guillaume Gay</span>
        <nav className="flex gap-5">
          <Link href="/mentions-legales" className="transition-colors hover:text-foreground">
            Mentions légales
          </Link>
          <Link href="/confidentialite" className="transition-colors hover:text-foreground">
            Confidentialité
          </Link>
        </nav>
      </div>
    </footer>
  );
}
