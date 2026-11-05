// Figures for /partenariats. Sources: RSS.com exports + dashboard, YouTube Data API.
// Update STATS_DATE when you refresh the numbers.

export const STATS_DATE = "5 novembre 2026";

/** Podcast downloads per month (RSS.com). The last bar is highlighted. */
export const MONTHLY = [
  { month: "mai", value: 3933 },
  { month: "juin", value: 5179 },
  { month: "juil.", value: 3799 },
  { month: "août", value: 5627 },
  { month: "sept.", value: 7137 },
  { month: "oct.", value: 7587 },
];

export const KEY_STATS: { value: string; unit?: string; label: string }[] = [
  { value: "54 000", label: "écoutes et vues sur 90 jours, podcast + YouTube" },
  { value: "5 558", label: "auditeurs uniques en octobre" },
  { value: "34 000", label: "vues YouTube sur 90 jours, portées par les Shorts" },
  { value: "42 000", label: "écoutes depuis le lancement, sur 29 épisodes" },
  { value: "78", unit: "%", label: "de l'audience en France, 94 % dans des pays francophones" },
  { value: "93", unit: "%", label: "d'écoute sur mobile : transports, sport, voiture" },
  { value: "6 000", label: "écoutes sur l'épisode le plus écouté, consacré à Claude Code" },
  { value: "~1 h", label: "par épisode avec invité : une attention longue, rare en publicité" },
];

export const TOP_SHORTS = [
  { id: "L6fC4IX7wjQ", title: "10 000 agents en 88 heures : OpenAI a grillé tout le monde", views: 3810 },
  { id: "pyVMcuio3mc", title: "3 ans de thèse… faits en 2 jours par l'IA", views: 3579 },
  { id: "t-ALNOf42t4", title: "2 décisions de carrière en 30 ans… 5 avant 30 ans", views: 2145 },
];

export const GUESTS = [
  { name: "Christophe Aulnette", role: "Ex-PDG de Microsoft France · investisseur chez Seven2", episode: "Ton job remplacé par l'IA ? Comment te protéger", slug: "job-remplace-ia-christophe-aulnette", yt: "VAGwFipj-o4" },
  { name: "Laurent Daudet", role: "Directeur exécutif de l'IA à l'ENS · cofondateur de LightOn", episode: "L'IA bouleverse la recherche", slug: "ia-bouleverse-recherche-laurent-daudet", yt: "8hwsQsmQ_1o" },
  { name: "Stéphane Collot", role: "Ex-Meta, a contribué aux modèles Llama", episode: "Comment évaluer une IA ?", slug: "comment-evaluer-ia-stephane-collot", yt: "M58gvU2xlhY" },
  { name: "Benjamin Drighès", role: "CTO IA et associé chez Galadrim", episode: "Comment gérer le coût de l'IA pour une entreprise ?", slug: "cout-ia-entreprise-benjamin-drighes", yt: "DiRC-7vmL0M" },
  { name: "Vincent Godbert", role: "Dirige l'accélérateur de startups Elevation", episode: "Entreprendre à l'ère de l'IA", slug: "entreprendre-ere-ia-vincent-godbert", yt: "z7_DYqZ4lRc" },
  { name: "Thibault Fritsch", role: "Fondateur de RobinHood, conseil IA pour PME et ETI", episode: "L'IA au service des entreprises", slug: "ia-service-entreprises-thibault-fritsch", yt: "4OlWf_Vj6U4" },
];

type Row = { label: string; pct: number; highlight?: boolean };

export const AUDIENCE: { title: string; headline: string; rows: Row[] }[] = [
  {
    title: "Pays",
    headline: "France 78 %",
    rows: [
      { label: "France", pct: 78.5, highlight: true },
      { label: "Belgique", pct: 5 },
      { label: "Suisse", pct: 2.2 },
      { label: "Canada", pct: 1.9 },
      { label: "Maroc", pct: 1.2 },
      { label: "Autres", pct: 11.2 },
    ],
  },
  {
    title: "Plateformes",
    headline: "Spotify 52 %",
    rows: [
      { label: "Spotify", pct: 52.3, highlight: true },
      { label: "Apple", pct: 35, highlight: true },
      { label: "Navigateur", pct: 3.6 },
      { label: "Deezer", pct: 1.9 },
      { label: "Autres apps", pct: 7.1 },
    ],
  },
  {
    title: "Appareils",
    headline: "93 % mobile",
    rows: [
      { label: "iPhone", pct: 61.6, highlight: true },
      { label: "Android", pct: 30, highlight: true },
      { label: "Ordinateur", pct: 6.4 },
      { label: "Autres", pct: 2.1 },
    ],
  },
];

/** Downloads by weekday (rows) and hour 0–23 (columns), RSS.com. */
export const HEATMAP: [string, ...number[]][] = [
  ["Lun", 90, 68, 67, 77, 97, 135, 323, 409, 299, 271, 243, 260, 255, 264, 260, 344, 341, 356, 264, 143, 132, 201, 157, 135],
  ["Mar", 82, 105, 72, 66, 61, 196, 348, 496, 355, 231, 291, 325, 319, 261, 306, 303, 317, 335, 303, 218, 203, 193, 186, 137],
  ["Mer", 95, 80, 82, 78, 91, 190, 373, 461, 313, 300, 254, 252, 282, 247, 305, 291, 325, 358, 323, 202, 188, 168, 177, 157],
  ["Jeu", 111, 71, 79, 107, 122, 162, 331, 526, 353, 210, 211, 212, 287, 274, 269, 272, 292, 337, 239, 181, 165, 156, 144, 165],
  ["Ven", 124, 126, 80, 80, 124, 144, 279, 372, 287, 246, 264, 283, 232, 238, 220, 234, 301, 280, 204, 158, 134, 126, 152, 119],
  ["Sam", 100, 64, 54, 45, 77, 123, 124, 245, 229, 259, 251, 224, 242, 229, 204, 263, 222, 174, 140, 131, 110, 114, 122, 94],
  ["Dim", 70, 71, 46, 62, 61, 83, 111, 186, 271, 315, 276, 235, 148, 241, 267, 307, 235, 227, 213, 161, 141, 171, 188, 97],
];
