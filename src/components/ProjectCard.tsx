import type { Project } from "@/content/projects";
import { bgClass } from "@/lib/palette";
import { projectImage } from "@/lib/projectImages";

interface ProjectCardProps {
  project: Project;
}

// Ett prosjektkort. Får et prosjekt-objekt fra projects.ts og viser bilde, én setning, teknologier og lenker.
const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article id={project.slug} className="pop pop-hover group flex h-full flex-col overflow-hidden">
      {/* Bildet står på en farget flate, som et nettleservindu */}
      <div className={`relative border-b-2 border-foreground p-4 pb-0 ${bgClass[project.color]}`}>
        {project.year && <span className="tag absolute right-3 top-3 z-10 rotate-3">{project.year}</span>}
        <div className="aspect-[16/10] overflow-hidden rounded-t-lg border-2 border-b-0 border-foreground bg-card">
          {project.image ? (
            <img
              src={projectImage(project.image)}
              alt={`Skjermbilde av ${project.title}`}
              loading="lazy"
              className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${
                project.imageFit === "contain" ? "bg-[#c5e3fb] object-contain" : "object-cover object-top"
              }`}
            />
          ) : (
            <div className="flex h-full items-center justify-center p-6">
              <span className="text-center font-display text-3xl font-extrabold leading-tight opacity-90">
                {project.tech[0]}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-2xl font-bold leading-tight tracking-tight">{project.title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{project.summary}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Teknologier">
          {project.tech.map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-5">
          {project.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="link-arrow">
              {link.label} ↗
            </a>
          ))}
          {project.codeNote && <span className="font-mono text-xs text-muted-foreground">{project.codeNote}</span>}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
