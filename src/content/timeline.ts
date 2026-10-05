// CV-en som tidslinje, nyeste først. Teksten bygger på CV.pdf.

export type TimelineKind = "Utdanning" | "Arbeid" | "Prosjekt" | "Forsvaret" | "Verv";

export interface TimelineEntry {
  period: string;
  /** "ÅÅÅÅ-MM". Brukes til å plassere stolpen på tidslinjen. */
  start: string;
  /** "ÅÅÅÅ-MM", eller null hvis den pågår. */
  end: string | null;
  title: string;
  /** Kort navn som står på stolpen i tidslinjen. */
  short: string;
  org: string;
  kind: TimelineKind;
  points: string[];
  /** Lenke til et anker på siden, f.eks. "#prosjekter". */
  link?: { label: string; href: string };
}

export const timeline: TimelineEntry[] = [
  {
    period: "08.2026 – 05.2027",
    start: "2026-08",
    end: "2027-05",
    title: "Utvekslingsår",
    short: "UNSW",
    org: "University of New South Wales, Sydney",
    kind: "Utdanning",
    points: ["Emner innen ledelse, ingeniørmatematikk, økonomi og finans."],
  },
  {
    period: "01.2026 – 06.2026",
    start: "2026-01",
    end: "2026-06",
    title: "Business Advisor Trainee",
    short: "Innovasjon Norge",
    org: "Innovasjon Norge, Houston",
    kind: "Arbeid",
    points: [
      "Prosjektleder for en kunde, et norsk energi- og AI-selskap på vei inn i det amerikanske markedet. Definerte målkundeprofil, kartla og prioriterte amerikanske selskaper og identifiserte beslutningstakere.",
      "Skrev en strategisk rapport til den norske ambassaden om Texas som industrimarked.",
      "Skrev kontorets veiledning for etablering i det amerikanske markedet.",
      "Bygget et internt nyhets- og etterretningsverktøy og en oversikt over lokaler og leverandører til arrangementer.",
      "Håndterte lokaler og logistikk for delegasjonsbesøk og arrangementer med 40 til 200 deltakere.",
    ],
    link: { label: "Se prosjektene", href: "#prosjekter" },
  },
  {
    period: "01.2026 – 06.2026",
    start: "2026-01",
    end: "2026-06",
    title: "Årsstudium i bærekraftig økonomi og ledelse",
    short: "NMBU",
    org: "NMBU",
    kind: "Utdanning",
    points: [
      "Finansregnskap og rapportering, økonomistyring, Excel for økonomistyring og ledelse.",
      "Tatt ved siden av fulltidsinternship i Houston. 30 studiepoeng fullført.",
    ],
  },
  {
    period: "08.2024 – i dag",
    start: "2024-08",
    end: null,
    title: "Utvikler",
    short: "ConsultEng",
    org: "ConsultEng og DigiSaga",
    kind: "Prosjekt",
    points: [
      "Utvikler nettsider og webapplikasjoner sammen med en medstudent, med Supabase, OpenAI API og Make.com.",
      "Flere av prosjektene på denne siden er laget her.",
    ],
    link: { label: "Se prosjektene", href: "#prosjekter" },
  },
  {
    period: "08.2024 – 06.2029",
    start: "2024-08",
    end: "2029-06",
    title: "Sivilingeniør, industriell økonomi og teknologiledelse",
    short: "NTNU Indøk",
    org: "NTNU, Trondheim",
    kind: "Utdanning",
    points: [
      "Femårig integrert master som kombinerer ingeniørfag, økonomi og ledelse.",
      "Emner så langt i matematikk, lineær algebra, statistikk, fysikk og programmering, blant annet TDT4100 Objektorientert programmering.",
    ],
  },
  {
    period: "09.2024 – 05.2025",
    start: "2024-09",
    end: "2025-05",
    title: "PR-ansvarlig",
    short: "Abakusrevyen",
    org: "Abakusrevyen, NTNU",
    kind: "Verv",
    points: [
      "Ansvarlig for promoteringsvideo og sosiale medier.",
      "Bidro til produksjon av logo, klær og profileringsmateriell.",
    ],
  },
  {
    period: "08.2024 – 08.2025",
    start: "2024-08",
    end: "2025-08",
    title: "Styremedlem",
    short: "IronAba",
    org: "IronAba, Abakus",
    kind: "Verv",
    points: ["Triatlongruppe i studentforeningen Abakus. Organiserte fellestrening mot Ironman."],
  },
  {
    period: "07.2023 – 07.2024",
    start: "2023-07",
    end: "2024-07",
    title: "Grensejeger",
    short: "Forsvaret",
    org: "Jegerbataljonen GSV, Hæren",
    kind: "Forsvaret",
    points: [
      "Fullførte opptak til fallskjermjegertroppen hos Forsvarets spesialkommando (FSK).",
      "Sanitetssoldat i en firemannspatrulje på den norsk-russiske grensen i Jarfjord.",
    ],
  },
  {
    period: "08.2020 – 06.2023",
    start: "2020-08",
    end: "2023-06",
    title: "Videregående skole",
    short: "Nadderud VGS",
    org: "Nadderud VGS",
    kind: "Utdanning",
    points: ["Fordypning i matematikk, IT og spansk."],
  },
  {
    period: "2017 – 2025",
    start: "2017-08",
    end: "2025-08",
    title: "Undervisnings- og lederroller",
    short: "Undervisning og ledelse",
    org: "Ulike",
    kind: "Verv",
    points: [
      "Kirketjener i Holmenkollen kapell og Ris menighet (2021–2025).",
      "Læringsassistent på ungdomsskole og videregående, privatlærer i engelsk og frivillig ungdomsleder i Norge og Spania.",
    ],
  },
];
