import ProjectCard from "./ProjectCard";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Pilsulator",
      description: "Nettløsning med backend-integrasjoner og brukerautentisering",
      url: "https://pilsulator.no",
    },
    {
      title: "Canvas Game Freestyle",
      description: "JavaScript-basert spillprosjekt med canvas-rendering",
      url: "https://pilsulator.no/Spillsider/Canvasgamefreestyle/index.html",
    },
    {
      title: "DigiSaga",
      description: "Webutvikling og AI-integrasjon for gründerprosjekt",
      url: "https://digisaga.no",
    },
  ];

  return (
    <section id="prosjekter" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Prosjekter
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Utvalgte tekniske prosjekter som demonstrerer kompetanse innen
              web, backend og AI-integrasjoner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 animate-fade-in-up">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          <div className="text-center animate-fade-in">
            <a
              href="https://github.com/BenjaminKoder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors group"
            >
              <Github className="h-5 w-5" />
              <span className="font-medium">Se flere prosjekter på GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
