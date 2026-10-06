// Henter alle skjermbildene i src/assets/projects, så prosjektdataene kan vise til dem med filnavn.
const images = import.meta.glob<string>("/src/assets/projects/*.jpg", { eager: true, import: "default" });

export const projectImage = (file?: string) => (file ? images[`/src/assets/projects/${file}`] : undefined);
