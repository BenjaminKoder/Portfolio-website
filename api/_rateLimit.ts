// Enkel grense for antall forespørsler per IP-adresse. Den lever i minnet til én serverinstans,
// så den stopper ikke et bestemt angrep, men hindrer at noen tilfeldig spammer endepunktet.
// Den egentlige kostnadsgrensen settes som månedlig grense i Anthropic Console.

const hits = new Map<string, number[]>();

export const isRateLimited = (request: Request, limit: number, windowMs: number) => {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "ukjent";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > limit;
};
