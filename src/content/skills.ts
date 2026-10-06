// Ferdigheter i to grupper. Hvilke prosjekter som hører til hver ferdighet,
// regnes ut fra `tech` i projects.ts, så du trenger bare å vedlikeholde ett sted.

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Språk",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "HTML og CSS"],
  },
  {
    title: "Verktøy og rammeverk",
    skills: [
      "React",
      "Supabase/Postgres",
      "LLM-API-er",
      "Resend",
      "Twilio",
      "Make.com",
      "Firebase",
      "JavaFX",
      "JUnit",
      "Pygame",
      "Lovable",
      "Git og GitHub",
    ],
  },
];
