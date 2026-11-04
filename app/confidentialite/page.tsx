import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import { CONTACT_EMAIL, HOST_NAME, SITE_NAME, alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Comment le site ${SITE_NAME} traite vos données.`,
  alternates: alternatesFor("/confidentialite"),
};

export default function Confidentialite() {
  return (
    <LegalPage title="Politique de confidentialité" updated="4 novembre 2026">
      <p className="mt-8">
        En bref : ce site ne dépose aucun cookie, ne vous demande aucune donnée et ne mesure son audience que de
        façon anonyme.
      </p>

      <h2>Responsable du traitement</h2>
      <p>
        {HOST_NAME} — <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>

      <h2>Mesure d&apos;audience</h2>
      <p>
        Le site utilise Vercel Web Analytics pour compter les visites. Cet outil ne dépose pas de cookie et ne
        permet pas de vous identifier : les visiteurs sont distingués par une empreinte calculée à partir de la
        requête, supprimée au bout de 24 heures. Seules des statistiques agrégées sont conservées : page visitée,
        site de provenance, pays, type d&apos;appareil, navigateur et système d&apos;exploitation.
      </p>
      <p>
        Base légale : intérêt légitime à connaître l&apos;audience du site (art. 6.1.f du RGPD). Cette mesure étant
        anonyme et sans cookie, elle ne nécessite pas votre consentement.
      </p>

      <h2>Hébergement</h2>
      <p>
        Comme tout hébergeur, Vercel traite techniquement votre adresse IP pour vous afficher le site et le
        protéger contre les abus. Vercel peut traiter ces données aux États-Unis, dans le cadre du Data Privacy
        Framework UE–États-Unis et de clauses contractuelles types.
      </p>

      <h2>Vidéos YouTube</h2>
      <p>
        Les vidéos des épisodes ne se chargent que lorsque vous cliquez sur « Lire », via le mode « confidentialité
        renforcée » de YouTube (youtube-nocookie.com). À partir de ce clic, YouTube (Google) peut collecter des
        données selon sa propre{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          politique de confidentialité
        </a>
        .
      </p>

      <h2>Liens externes</h2>
      <p>
        Les liens vers Spotify, Apple Podcasts, Deezer, YouTube, Discord ou LinkedIn mènent vers des services
        tiers, qui appliquent leurs propres règles.
      </p>

      <h2>Vos droits</h2>
      <p>
        Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, d&apos;opposition et de
        limitation sur vos données. Écrivez à <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Vous pouvez
        aussi déposer une réclamation auprès de la{" "}
        <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer">
          CNIL
        </a>
        .
      </p>
    </LegalPage>
  );
}
