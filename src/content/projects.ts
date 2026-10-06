// Alt innhold om prosjektene ligger her, adskilt fra komponentene som viser det.
// Teknologinavnene i `tech` må stå skrevet likt som i skills.ts, ellers kobles de ikke sammen.
// Filen er ren data uten importer, så AI-assistenten på serveren kan lese den samme informasjonen.

export type PaletteColor = "blue" | "periwinkle" | "lavender" | "ice";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  /** Én setning om hva prosjektet er. */
  summary: string;
  tech: string[];
  links: ProjectLink[];
  /** Vises når koden ikke er offentlig. */
  codeNote?: string;
  /** Filnavn i src/assets/projects. */
  image?: string;
  /** "contain" for høye skjermbilder som ikke skal beskjæres. */
  imageFit?: "cover" | "contain";
  color: PaletteColor;
  /** Skjules fra prosjektrutenettet, men vises fortsatt under Kompetanse. */
  hidden?: boolean;
}

const GITHUB_PAGES = "https://benjaminkoder.github.io";

export const projects: Project[] = [
  {
    slug: "peer",
    title: "Peer",
    year: "2026",
    summary: "Timebestilling og CRM for helseklinikker, med oversikt over behandlere, pasienter og avtaler, og SMS-varsler.",
    tech: ["TypeScript", "React", "Twilio"],
    links: [
      { label: "Booking", href: "https://peer-booking.lovable.app" },
      { label: "Peer CRM", href: "https://peer-crm.lovable.app" },
    ],
    codeNote: "Sammen med Emil Skotner",
    image: "peer.jpg",
    color: "blue",
  },
  {
    slug: "campuswear",
    title: "CampusWear",
    year: "2026",
    summary: "Gruppebestilling av skole-, revy- og russeklær, med designstudio for egen logo.",
    tech: ["TypeScript", "React", "Supabase/Postgres"],
    links: [
      { label: "Åpne", href: "https://campuswear-azure.vercel.app" },
      { label: "Kode", href: "https://github.com/BenjaminKoder/everyday-hello-bot" },
    ],
    image: "campuswear.jpg",
    color: "lavender",
  },
  {
    slug: "nyhetsbriefing",
    title: "Nyhetsbriefing for Innovasjon Norge",
    year: "2026",
    summary: "AI-agent som overvåker nyheter og sender daglige briefinger til Innovasjon Norges kontor i Houston.",
    tech: ["TypeScript", "React", "Supabase/Postgres", "Resend", "LLM-API-er"],
    links: [],
    codeNote: "Privat kode",
    image: "nyhetsbriefing.jpg",
    color: "periwinkle",
  },
  {
    slug: "anbudsportal",
    title: "Anbudsportal",
    year: "2025",
    summary: "Kobler privatpersoner med håndverkere: beskriv jobben og få tilbud fra leverandører.",
    tech: ["TypeScript", "React"],
    links: [{ label: "Åpne", href: "https://anbudsportal.lovable.app" }],
    codeNote: "Sammen med Emil Skotner",
    image: "anbudsportal.jpg",
    color: "ice",
  },
  {
    slug: "digisaga",
    title: "DigiSaga",
    year: "2024–",
    summary: "Nettsider og AI-automatisering for norske bedrifter.",
    tech: ["TypeScript", "React", "Make.com", "LLM-API-er"],
    links: [{ label: "digisaga.no", href: "https://digisaga.no" }],
    codeNote: "Sammen med Emil Skotner",
    image: "digisaga.jpg",
    color: "periwinkle",
  },
  {
    slug: "houston-venues",
    title: "Houston Venues",
    year: "2026",
    summary: "Kart og database over lokaler og leverandører til arrangementer for Innovasjon Norge i Houston.",
    tech: ["TypeScript", "React", "Supabase/Postgres", "LLM-API-er"],
    links: [
      { label: "Åpne", href: "https://houston-venues.vercel.app" },
      { label: "Kode", href: "https://github.com/BenjaminKoder/houston-venues" },
    ],
    image: "houston-venues.jpg",
    color: "lavender",
  },
  {
    slug: "pilsulator",
    title: "Pilsulator",
    year: "2022",
    summary: "Promillekalkulator som regner ut omtrentlig promille med Widmarks formel.",
    tech: ["JavaScript", "HTML og CSS"],
    links: [
      { label: "Prøv", href: `${GITHUB_PAGES}/Spillsider/PilsKalkulator/index.html` },
      { label: "Kode", href: "https://github.com/BenjaminKoder/BenjaminKoder.github.io/tree/main/Spillsider/PilsKalkulator" },
    ],
    codeNote: "Illustrasjoner av Felix Johanssen",
    image: "pilsulator.jpg",
    color: "blue",
  },
  {
    slug: "javafx-spill",
    title: "Plattformspill i JavaFX",
    year: "2025",
    summary: "Doodle Jump-inspirert spill med innlogging, lagring og JUnit-tester, laget i TDT4100.",
    tech: ["Java", "JavaFX", "JUnit"],
    links: [
      { label: "Kode", href: "https://github.com/BenjaminKoder/jumpyjump-javafx" },
    ],
    image: "javafx-spill.jpg",
    imageFit: "contain",
    color: "ice",
  },
  {
    slug: "geometry-dash-ish",
    title: "Geometry Dash ish",
    year: "2022",
    summary: "Plattformspill på HTML5 Canvas med 15 baner og ledertavle i Firebase.",
    tech: ["JavaScript", "HTML og CSS", "Firebase"],
    links: [
      { label: "Spill", href: `${GITHUB_PAGES}/Spillsider/Canvasgamefreestyle/index.html` },
      { label: "Kode", href: "https://github.com/BenjaminKoder/BenjaminKoder.github.io/tree/main/Spillsider/Canvasgamefreestyle" },
    ],
    image: "canvas-spill.jpg",
    color: "blue",
  },
  {
    slug: "shake-that-jazz",
    title: "Shake That Jazz",
    year: "2023",
    summary: "Pygame-spill med sprites jeg har tegnet selv og en butikk for oppgraderinger.",
    tech: ["Python", "Pygame"],
    links: [
      { label: "Kode", href: "https://github.com/BenjaminKoder/shake-that-jazz" },
    ],
    image: "shake-that-jazz.jpg",
    color: "periwinkle",
  },
  {
    slug: "portefolje",
    title: "Denne nettsiden",
    year: "2025–",
    summary: "Porteføljen du ser på, med en AI-assistent som svarer på spørsmål om meg.",
    tech: ["TypeScript", "React", "LLM-API-er", "Resend"],
    links: [{ label: "Kode", href: "https://github.com/BenjaminKoder/portfolio" }],
    color: "periwinkle",
    hidden: true,
  },
];

export interface ArchiveItem {
  title: string;
  year: string;
  description: string;
  href: string;
  /** "web" kan kjøres i nettleseren (href), "kode" har bare kildekode. */
  kind: "web" | "kode";
  /** Lenke til kildekoden på GitHub. */
  code: string;
  /** Filnavn i src/assets/projects. */
  image?: string;
}

export const archive: ArchiveItem[] = [
  {
    title: "Tallsystemer",
    year: "2022",
    description: "Nettside om tallsystemer, bits og bytes",
    href: `${GITHUB_PAGES}/StorsteProsjekter/Tallsystemer/index.html`,
    kind: "web",
    code: "https://github.com/BenjaminKoder/BenjaminKoder.github.io/tree/main/StorsteProsjekter/Tallsystemer",
    image: "tallsystemer.jpg",
  },
  {
    title: "Benjamins prosjekter",
    year: "2021–2022",
    description: "De første prosjektene jeg lagde, som viser utviklingen min",
    href: `${GITHUB_PAGES}/StorsteProsjekter/StorsteProsjekter.html`,
    kind: "web",
    code: "https://github.com/BenjaminKoder/BenjaminKoder.github.io/tree/main/StorsteProsjekter",
    image: "benjamins-prosjekter.jpg",
  },
  {
    title: "Lykkehjul med database",
    year: "2022",
    description: "Spinner med innlogging og ledertavle",
    href: `${GITHUB_PAGES}/Spillsider/SpinnerTob/saannBenjiVil/index.html`,
    kind: "web",
    code: "https://github.com/BenjaminKoder/BenjaminKoder.github.io/tree/main/Spillsider/SpinnerTob/saannBenjiVil",
    image: "spinner-db.jpg",
  },
  {
    title: "Lykkehjul med localStorage",
    year: "2022",
    description: "Spinner som lagrer i nettleseren",
    href: `${GITHUB_PAGES}/Spillsider/SpinnerTycoon/Spinner.html`,
    kind: "web",
    code: "https://github.com/BenjaminKoder/BenjaminKoder.github.io/tree/main/Spillsider/SpinnerTycoon",
    image: "spinner-ls.jpg",
  },
  {
    title: "Sirkelspillet",
    year: "2022",
    description: "Skytespill i Pygame",
    href: "https://github.com/BenjaminKoder/forste-pygame",
    kind: "kode",
    code: "https://github.com/BenjaminKoder/forste-pygame",
    image: "sirkelspillet.jpg",
  },
];
