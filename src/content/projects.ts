// Alt innhold om prosjektene ligger her, adskilt fra komponentene som viser det.
// Teknologinavnene i `tech` må stå skrevet likt som i skills.ts, ellers kobles de ikke sammen.

import nyhetsbriefing from "@/assets/projects/nyhetsbriefing.jpg";
import campuswear from "@/assets/projects/campuswear.jpg";
import houstonVenues from "@/assets/projects/houston-venues.jpg";
import digisaga from "@/assets/projects/digisaga.jpg";
import shakeThatJazz from "@/assets/projects/shake-that-jazz.jpg";
import javafxSpill from "@/assets/projects/javafx-spill.jpg";
import consulteng from "@/assets/projects/consulteng.jpg";
import pilsulator from "@/assets/projects/pilsulator.jpg";
import canvasSpill from "@/assets/projects/canvas-spill.jpg";
import tallsystemer from "@/assets/projects/tallsystemer.jpg";
import mario from "@/assets/projects/mario.jpg";
import montyHall from "@/assets/projects/monty-hall.jpg";
import spinnerDb from "@/assets/projects/spinner-db.jpg";
import spinnerLs from "@/assets/projects/spinner-ls.jpg";
import mobil from "@/assets/projects/mobil.jpg";

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
    slug: "nyhetsbriefing",
    title: "Nyhetsbriefing for Innovasjon Norge",
    year: "2026",
    summary: "AI-agent som overvåker nyheter og sender daglige briefinger til Innovasjon Norges kontor i Houston.",
    tech: ["TypeScript", "React", "Supabase/Postgres", "Resend", "LLM-API-er", "Lovable"],
    links: [],
    codeNote: "Privat kode",
    image: nyhetsbriefing,
    color: "periwinkle",
  },
  {
    slug: "campuswear",
    title: "CampusWear",
    year: "2026",
    summary: "Gruppebestilling av skole-, revy- og russeklær, med designstudio for egen logo.",
    tech: ["TypeScript", "React", "Supabase/Postgres", "Lovable"],
    links: [{ label: "Åpne", href: "https://everyday-hello-bot.lovable.app" }],
    codeNote: "Privat kode",
    image: campuswear,
    color: "lavender",
  },
  {
    slug: "consulteng",
    title: "ConsultEng",
    year: "2024–",
    summary: "Webstudio for nyetablerte bedrifter, som jeg driver sammen med en medstudent.",
    tech: ["TypeScript", "React", "Supabase/Postgres", "Make.com", "LLM-API-er", "Lovable"],
    links: [{ label: "consulteng.no", href: "https://consulteng.no" }],
    image: consulteng,
    color: "periwinkle",
  },
  {
    slug: "digisaga",
    title: "DigiSaga",
    year: "2024–",
    summary: "Studentdrevet satsing som lager nettsider og AI-automatisering for norske bedrifter.",
    tech: ["TypeScript", "React", "Make.com", "LLM-API-er", "Lovable"],
    links: [{ label: "digisaga.no", href: "https://digisaga.no" }],
    image: digisaga,
    color: "ice",
  },
  {
    slug: "houston-venues",
    title: "Houston Venues",
    year: "2026",
    summary: "Kart og database over lokaler og leverandører til arrangementer for Innovasjon Norge i Houston.",
    tech: ["TypeScript", "React", "Supabase/Postgres", "LLM-API-er", "Lovable"],
    links: [{ label: "Åpne", href: "https://houston-venues.lovable.app" }],
    image: houstonVenues,
    color: "lavender",
  },
  {
    slug: "pilsulator",
    title: "Pilsulator",
    year: "2022",
    summary: "Promillekalkulator som regner ut omtrentlig promille med Widmarks formel.",
    tech: ["JavaScript", "HTML og CSS"],
    links: [{ label: "Prøv", href: `${GITHUB_PAGES}/` }],
    image: pilsulator,
    color: "blue",
  },
  {
    slug: "javafx-spill",
    title: "Plattformspill i JavaFX",
    year: "2025",
    summary: "Doodle Jump-inspirert spill med innlogging, lagring og JUnit-tester, laget i TDT4100.",
    tech: ["Java", "JavaFX", "JUnit"],
    links: [
      { label: "Kode", href: "https://github.com/BenjaminKoder/Portfolio/tree/main/Java%20prosjekter/OOPprosjekt" },
    ],
    image: javafxSpill,
    imageFit: "contain",
    color: "ice",
  },
  {
    slug: "geometry-dash-ish",
    title: "Geometry Dash ish",
    year: "2022",
    summary: "Plattformspill på HTML5 Canvas med 15 baner og ledertavle i Firebase.",
    tech: ["JavaScript", "HTML og CSS", "Firebase"],
    links: [{ label: "Spill", href: `${GITHUB_PAGES}/Spillsider/Canvasgamefreestyle/index.html` }],
    image: canvasSpill,
    color: "blue",
  },
  {
    slug: "shake-that-jazz",
    title: "Shake That Jazz",
    year: "2023",
    summary: "Pygame-spill med egne sprites, musikk og en butikk for oppgraderinger.",
    tech: ["Python", "Pygame"],
    links: [
      { label: "Kode", href: "https://github.com/BenjaminKoder/Portfolio/tree/main/Python%20prosjekter/Prosjekt" },
    ],
    image: shakeThatJazz,
    color: "periwinkle",
  },
  {
    slug: "portefolje",
    title: "Denne nettsiden",
    year: "2025–",
    summary: "Porteføljen du ser på, med en AI-assistent som svarer på spørsmål om meg.",
    tech: ["TypeScript", "React", "LLM-API-er", "Resend", "Lovable"],
    links: [{ label: "Kode", href: "https://github.com/BenjaminKoder/Portfolio-website" }],
    color: "periwinkle",
    hidden: true,
  },
];

export interface ArchiveItem {
  title: string;
  year: string;
  description: string;
  href: string;
  /** "web" kan kjøres i nettleseren, "kode" lenker til kildekoden. */
  kind: "web" | "kode";
  image?: string;
}

export const archive: ArchiveItem[] = [
  {
    title: "Tallsystemer",
    year: "2022",
    description: "Nettside om tallsystemer, bits og bytes",
    href: `${GITHUB_PAGES}/StorsteProsjekter/Tallsystemer/index.html`,
    kind: "web",
    image: tallsystemer,
  },
  {
    title: "Mario",
    year: "2022",
    description: "Plattformspill i nettleseren",
    href: `${GITHUB_PAGES}/StorsteProsjekter/shyguy/index.html`,
    kind: "web",
    image: mario,
  },
  {
    title: "Lykkehjul med database",
    year: "2022",
    description: "Spinner med innlogging og ledertavle",
    href: `${GITHUB_PAGES}/Spillsider/SpinnerTob/saannBenjiVil/index.html`,
    kind: "web",
    image: spinnerDb,
  },
  {
    title: "Lykkehjul med localStorage",
    year: "2022",
    description: "Spinner som lagrer i nettleseren",
    href: `${GITHUB_PAGES}/Spillsider/SpinnerTycoon/Spinner.html`,
    kind: "web",
    image: spinnerLs,
  },
  {
    title: "Monty Hall",
    year: "2022",
    description: "Simulering av Monty Hall-problemet",
    href: `${GITHUB_PAGES}/StorsteProsjekter/4B%20Hendelser/4B%20timearbeid/MontyHall.html`,
    kind: "web",
    image: montyHall,
  },
  {
    title: "Mobil-demo",
    year: "2022",
    description: "Responsiv nettside",
    href: `${GITHUB_PAGES}/StorsteProsjekter/Mobil.html`,
    kind: "web",
    image: mobil,
  },
  {
    title: "Sirkelspillet",
    year: "2023",
    description: "Skytespill i Pygame",
    href: "https://github.com/BenjaminKoder/Portfolio/tree/main/Python%20prosjekter/forstePygame",
    kind: "kode",
  },
  {
    title: "Klassequiz",
    year: "2023",
    description: "Quiz i Pygame",
    href: "https://github.com/BenjaminKoder/Portfolio/tree/main/Python%20prosjekter/forstePygame",
    kind: "kode",
  },
];
