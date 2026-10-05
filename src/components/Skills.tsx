import { useState } from "react";
import { skillGroups } from "@/content/skills";
import { projects } from "@/content/projects";
import SectionHeader from "./SectionHeader";

const Skills = () => {
  // Hvilken ferdighet som er aktiv (hover, fokus eller klikk). null = ingen.
  const [active, setActive] = useState<string | null>(null);
  // Ferdigheter langt til høyre åpner boksen mot venstre, så den ikke går utenfor skjermen.
  const [alignRight, setAlignRight] = useState(false);

  const open = (name: string, element: HTMLElement) => {
    setAlignRight(element.getBoundingClientRect().left > window.innerWidth / 2);
    setActive(name);
  };

  return (
    <section id="kompetanse" className="section">
      <div className="container-wide">
        <SectionHeader index="02" title="Kompetanse" color="bg-periwinkle" />

        <div className="grid gap-8 lg:grid-cols-2">
          {skillGroups.map((group, g) => (
            <div key={group.title} className={`pop p-6 sm:p-8 ${g === 0 ? "bg-ice" : "bg-lavender"}`}>
              <h3 className="font-display text-2xl font-bold">{group.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => {
                  // Prosjektene som bruker denne ferdigheten, regnet ut fra projects.ts
                  const used = projects.filter((p) => p.tech.includes(skill));
                  const isActive = active === skill;

                  return (
                    <li
                      key={skill}
                      className="relative"
                      onMouseEnter={(e) => open(skill, e.currentTarget)}
                      onMouseLeave={() => setActive(null)}
                    >
                      <button
                        onClick={(e) => open(skill, e.currentTarget)}
                        onFocus={(e) => open(skill, e.currentTarget)}
                        onBlur={() => setActive(null)}
                        aria-expanded={used.length > 0 ? isActive : undefined}
                        className={`rounded-full border-2 border-foreground px-4 py-1.5 font-mono text-sm font-medium transition-transform ${
                          isActive ? "-translate-y-0.5 bg-foreground text-background" : "bg-card"
                        }`}
                      >
                        {skill}
                      </button>

                      {isActive && used.length > 0 && (
                        <div className={`absolute top-full z-20 pt-2 ${alignRight ? "right-0" : "left-0"}`}>
                          <ul className="pop w-64 max-w-[calc(100vw-2rem)] p-2">
                            {used.map((project, i) => (
                              <li
                                key={project.slug}
                                className="animate-float-out opacity-0"
                                style={{ animationDelay: `${i * 50}ms` }}
                              >
                                <a
                                  // Skjulte prosjekter har ikke noe kort å hoppe til, så de lenker rett til koden
                                  href={project.hidden ? project.links[0]?.href : `#${project.slug}`}
                                  target={project.hidden ? "_blank" : undefined}
                                  rel="noopener noreferrer"
                                  onMouseDown={(e) => e.preventDefault()}
                                  className="flex items-baseline justify-between gap-3 rounded-md px-2 py-1.5 text-sm hover:bg-periwinkle"
                                >
                                  <span>{project.title}</span>
                                  <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
