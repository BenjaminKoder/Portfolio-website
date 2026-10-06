import { useEffect, useMemo, useRef, useState } from "react";
import { MousePointerClick } from "lucide-react";
import { timeline, type TimelineEntry, type TimelineKind } from "@/content/timeline";
import { profile } from "@/content/profile";
import SectionHeader from "./SectionHeader";

// Tidslinjen går fra FIRST_YEAR til LAST_YEAR. Alt annet regnes ut fra datoene i timeline.ts.
const FIRST_YEAR = 2017;
const LAST_YEAR = 2030;
const SPAN = LAST_YEAR - FIRST_YEAR;

// "2024-08" → 2024.58. null betyr «pågår», og blir dagens dato.
const toYear = (date: string | null) => {
  if (!date) {
    const now = new Date();
    return now.getFullYear() + now.getMonth() / 12;
  }
  const [y, m] = date.split("-").map(Number);
  return y + (m - 1) / 12;
};

// Posisjon i prosent av bredden
const toPercent = (year: number) => ((year - FIRST_YEAR) / SPAN) * 100;

// Radene i tidslinjen, og hvilke kategorier som havner i hver rad
const lanes: { title: string; kinds: TimelineKind[] }[] = [
  { title: "Utdanning", kinds: ["Utdanning"] },
  { title: "Arbeid", kinds: ["Arbeid", "Prosjekt"] },
  { title: "Forsvaret", kinds: ["Forsvaret"] },
  { title: "Verv", kinds: ["Verv"] },
];

// Omtrent hvor mange år én bokstav i navnet tar opp. Navnet står over linjen og kan være
// lengre enn selve linjen, så det må regnes med når linjene fordeles på rader.
const YEARS_PER_CHAR = 0.15;
const visualEnd = (entry: TimelineEntry) =>
  Math.max(toYear(entry.end), toYear(entry.start) + entry.short.length * YEARS_PER_CHAR + 0.3);

// Fordeler oppføringene i en kategori på underrader, så linjer som overlapper havner under hverandre.
const packRows = (entries: TimelineEntry[]) => {
  const rows: TimelineEntry[][] = [];
  const sorted = [...entries].sort((a, b) => toYear(a.start) - toYear(b.start));
  for (const entry of sorted) {
    const row = rows.find((r) => visualEnd(r[r.length - 1]) <= toYear(entry.start));
    if (row) row.push(entry);
    else rows.push([entry]);
  }
  return rows;
};

const years = Array.from({ length: SPAN + 1 }, (_, i) => FIRST_YEAR + i);

const CV = () => {
  // Oppføringen som vises i detaljpanelet. Starter på den nyeste jobben.
  const [selected, setSelected] = useState<TimelineEntry>(timeline[1]);
  const today = toPercent(toYear(null));

  // På smale skjermer scrolles tidslinjen helt til høyre ved start, så det nyeste vises først.
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollLeft = el.scrollWidth;
  }, []);

  // useMemo: pakkingen regnes bare ut én gang, ikke ved hver hover.
  const packedLanes = useMemo(
    () => lanes.map((lane) => ({ ...lane, rows: packRows(timeline.filter((e) => lane.kinds.includes(e.kind))) })),
    [],
  );

  return (
    <section id="cv" className="section">
      <div className="container-wide">
        <SectionHeader index="03" title="CV" color="bg-lavender" />

        <div className="pop overflow-hidden">
          <p className="flex items-center gap-2 border-b-2 border-foreground bg-ice px-4 py-2.5 font-mono text-xs sm:px-6">
            <MousePointerClick className="h-4 w-4 text-blue" aria-hidden />
            Hold over eller trykk på en linje
          </p>

          {/* Tidslinjen kan scrolles sidelengs på smale skjermer */}
          <div ref={scrollRef} className="overflow-x-auto">
            <div className="relative min-w-[760px] px-4 pb-6 pt-3 sm:px-6">
              {/* Årstall langs toppen, med svake streker ned gjennom tidslinjen */}
              <div className="relative ml-28 h-6">
                {years.map((year) => (
                  <span
                    key={year}
                    className="absolute top-0 -translate-x-1/2 font-mono text-[11px] text-muted-foreground"
                    style={{ left: `${toPercent(year)}%` }}
                  >
                    {year}
                  </span>
                ))}
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-28 right-0">
                  {years.map((year) => (
                    <div
                      key={year}
                      className="absolute inset-y-0 border-l border-dashed border-foreground/15"
                      style={{ left: `${toPercent(year)}%` }}
                    />
                  ))}
                  {/* Strek for dagens dato */}
                  <div className="absolute inset-y-0 w-0.5 bg-blue" style={{ left: `${today}%` }}>
                    <span className="absolute -top-5 left-1.5 whitespace-nowrap rounded bg-blue px-1 font-mono text-[10px] text-white">
                      i dag
                    </span>
                  </div>
                </div>

                {packedLanes.map((lane) => (
                  <div key={lane.title} className="flex border-t border-foreground/15 py-2 first:border-t-0">
                    <span className="w-28 shrink-0 pt-3 font-mono text-xs font-medium uppercase tracking-wide">
                      {lane.title}
                    </span>
                    <div className="relative flex-1">
                      {lane.rows.map((row, r) => (
                        <div key={r} className="relative h-11">
                          {row.map((entry, i) => {
                            const start = toPercent(toYear(entry.start));
                            const end = toPercent(toYear(entry.end));
                            const isSelected = selected === entry;
                            // Andelen av linjen som ligger etter i dag, vises stiplet
                            const pastShare = Math.max(0, Math.min(1, (today - start) / (end - start)));

                            return (
                              <button
                                key={entry.title}
                                onMouseEnter={() => setSelected(entry)}
                                onFocus={() => setSelected(entry)}
                                onClick={() => setSelected(entry)}
                                aria-pressed={isSelected}
                                aria-label={`${entry.title}, ${entry.period}`}
                                className="group absolute inset-y-0 cursor-pointer text-left outline-none"
                                style={{ left: `${start}%`, width: `${end - start}%` }}
                              >
                                {/* Navnet over linjen */}
                                <span
                                  className={`absolute left-0 top-0.5 whitespace-nowrap font-mono text-[11px] transition-colors ${
                                    isSelected ? "font-semibold text-blue" : "group-hover:text-blue"
                                  }`}
                                >
                                  {entry.short}
                                </span>

                                {/* Selve linjen. Tegnes fra venstre når siden lastes. */}
                                <span
                                  className="absolute inset-x-0 bottom-2.5 flex origin-left animate-draw-line items-center"
                                  style={{ animationDelay: `${i * 80}ms` }}
                                >
                                  <span
                                    className={`rounded-l-full transition-all duration-200 ${
                                      isSelected ? "bg-blue" : "bg-foreground group-hover:bg-blue"
                                    } ${isSelected ? "h-2.5" : "h-1.5 group-hover:h-2.5"} ${pastShare === 1 ? "rounded-r-full" : ""}`}
                                    style={{ width: `${pastShare * 100}%` }}
                                  />
                                  {pastShare < 1 && (
                                    <span
                                      className={`flex-1 rounded-r-full border-t-[3px] border-dashed transition-colors ${
                                        isSelected ? "border-blue" : "border-foreground/50 group-hover:border-blue"
                                      }`}
                                    />
                                  )}
                                  {/* Endepunkter som markerer start og slutt */}
                                  <span
                                    className={`absolute -left-1 h-3 w-3 rounded-full border-2 transition-all ${
                                      isSelected
                                        ? "scale-125 border-blue bg-blue"
                                        : "border-foreground bg-card group-hover:border-blue"
                                    }`}
                                  />
                                  <span
                                    className={`absolute -right-1 h-3 w-3 rounded-full border-2 transition-all ${
                                      isSelected
                                        ? "scale-125 border-blue bg-card"
                                        : "border-foreground bg-card group-hover:border-blue"
                                    }`}
                                  />
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detaljer for den valgte oppføringen */}
          <div
            key={selected.title}
            className="animate-float-out border-t-2 border-foreground bg-background p-6 opacity-0 sm:p-8"
          >
            <p className="font-mono text-xs text-muted-foreground">
              {selected.period} <span className="ml-2 uppercase text-blue">{selected.kind}</span>
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold">{selected.title}</h3>
            <p className="text-muted-foreground">{selected.org}</p>
            <ul className="mt-4 max-w-3xl space-y-2 leading-relaxed">
              {selected.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="font-mono text-blue" aria-hidden>
                    –
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            {selected.link && (
              <a href={selected.link.href} className="link-arrow mt-4">
                {selected.link.label} ↑
              </a>
            )}
          </div>
        </div>

        <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="btn mt-8 bg-blue text-white">
          Last ned CV som PDF ↗
        </a>
      </div>
    </section>
  );
};

export default CV;
