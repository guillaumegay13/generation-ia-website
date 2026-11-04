import { wrapClass } from "./ui";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line pt-8 pb-12 text-[13px] text-faint">
      <div className={wrapClass}>&copy; {new Date().getFullYear()} Génération IA — Guillaume Gay</div>
    </footer>
  );
}
