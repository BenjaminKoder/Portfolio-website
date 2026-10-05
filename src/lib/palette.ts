import type { PaletteColor } from "@/content/projects";

// Tailwind tar bare med klasser som står skrevet ut i koden, derfor en fast tabell
// i stedet for `bg-${color}`.
export const bgClass: Record<PaletteColor, string> = {
  blue: "bg-blue text-white",
  periwinkle: "bg-periwinkle",
  lavender: "bg-lavender",
  ice: "bg-ice",
};
