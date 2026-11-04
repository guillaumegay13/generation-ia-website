import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "../components/LegalPage";
import { CONTACT_EMAIL, HOST_NAME, SITE_NAME, SITE_URL, alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${SITE_NAME}.`,
  alternates: alternatesFor("/mentions-legales"),
};

export default function MentionsLegales() {
  return (
    <LegalPage title="Mentions légales" updated="4 novembre 2026">
      <h2>Éditeur du site</h2>
      <p>
        Le site <a href={SITE_URL}>generationia.xyz</a> et le podcast {SITE_NAME} sont édités par {HOST_NAME}, à
        titre personnel.
      </p>
      <p>
        Contact : <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
      <p>Directeur de la publication : {HOST_NAME}.</p>

      <h2>Hébergement</h2>
      <p>
        Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis —{" "}
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          vercel.com
        </a>
        .
      </p>
      <p>
        Les épisodes audio sont hébergés par RSS.com, et les vidéos par YouTube (Google).
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        Les contenus du site (textes, transcriptions, visuels, logo) et du podcast sont la propriété de {HOST_NAME},
        sauf mention contraire. Toute reproduction sans autorisation est interdite. Les propos des invités
        n&apos;engagent qu&apos;eux-mêmes. Les marques et logos des plateformes d&apos;écoute appartiennent à leurs
        propriétaires respectifs.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Voir la <Link href="/confidentialite">politique de confidentialité</Link>.
      </p>
    </LegalPage>
  );
}
