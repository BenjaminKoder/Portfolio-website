import { useState } from "react";
import { projects, archive, type ArchiveItem } from "@/content/projects";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

const Projects = () => {
  // Raden musen holder over, og hvor musen er. Brukes til forhåndsvisningen som følger pekeren.
  const [hovered, setHovered] = useState<ArchiveItem | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <section id="prosjekter" className="section">
      <div className="container-wide">
        <SectionHeader index="01" title="Prosjekter" color="bg-blue text-white" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter((project) => !project.hidden)
            .map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <h3 className="mt-24 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Tidligere prosjekter</h3>
        <p className="mt-2 text-muted-foreground">Fra 2021 til 2023. De fleste kjører i nettleseren.</p>

        {/* Hver rad viser et skjermbilde ved siden av musen ved hover */}
        <ul
          className="pop mt-8 divide-y-2 divide-foreground overflow-hidden"
          onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
          onMouseLeave={() => setHovered(null)}
        >
          {archive.map((item) => (
            <li key={item.title} onMouseEnter={() => setHovered(item)}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-4 py-3 transition-colors hover:bg-periwinkle sm:px-6"
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    className="h-10 w-16 shrink-0 rounded border-[1.5px] border-foreground object-cover object-top md:hidden"
                  />
                )}
                <span className="font-mono text-xs text-muted-foreground">{item.year}</span>
                <span className="flex-1">
                  <span className="font-medium">{item.title}</span>
                  <span className="hidden text-muted-foreground sm:inline"> {item.description}</span>
                </span>
                <span className="tag shrink-0">{item.kind === "web" ? "Kjør ↗" : "Kode ↗"}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Forhåndsvisning som følger musen, bare på store skjermer */}
      {hovered?.image && (
        <img
          src={hovered.image}
          alt=""
          className="pointer-events-none fixed z-50 hidden w-72 -rotate-2 rounded-lg border-2 border-foreground shadow-[6px_6px_0_0_hsl(var(--foreground))] md:block"
          style={{ left: mouse.x + 24, top: mouse.y - 90 }}
        />
      )}
    </section>
  );
};

export default Projects;
