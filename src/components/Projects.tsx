import ProjectCard from "./ProjectCard";
import { Code2, Globe, Coffee } from "lucide-react";

const Projects = () => {
  const pythonProjects = [
    {
      title: "Jazz-spill",
      description: "Rytmespill utviklet med Pygame og objektorientert programmering",
      url: "",
      comingSoon: true,
    },
    {
      title: "Hoppespill",
      description: "Plattformspill bygget med Pygame",
      url: "",
      comingSoon: true,
    },
    {
      title: "Flere Python-spill",
      description: "Spillprosjekter i utvikling",
      url: "",
      comingSoon: true,
    },
  ];

  const webProjects = [
    {
      title: "HTML5 Canvas spill",
      description: "Fysikkbasert spill bygget i HTML5 Canvas. Fokus på animasjon og collision detection.",
      url: "https://pilsulator.no/Spillsider/Canvasgamefreestyle/index.html",
    },
    {
      title: "Spinner (database)",
      description: "Dynamisk spinner med datalagring i Supabase",
      url: "",
      comingSoon: true,
    },
    {
      title: "Tallsystemer",
      description: "Interaktiv tallsystemkonverter",
      url: "",
      comingSoon: true,
    },
    {
      title: "Spinner (localStorage)",
      description: "Spinner med lokal datalagring i nettleseren",
      url: "",
      comingSoon: true,
    },
    {
      title: "Mario",
      description: "Klassisk plattformspill i nettleser",
      url: "",
      comingSoon: true,
    },
    {
      title: "Yatzy",
      description: "Digitalt terningspill med regellogikk",
      url: "",
      comingSoon: true,
    },
    {
      title: "Monty Hall",
      description: "Interaktiv simulering av Monty Hall-problemet",
      url: "",
      comingSoon: true,
    },
  ];

  const javaProjects = [
    {
      title: "Doodle Jump",
      description: "Plattformspill utviklet i JavaFX med objektorientert design",
      url: "",
      comingSoon: true,
    },
  ];

  const renderCategory = (
    title: string,
    icon: React.ElementType,
    projects: Array<{ title: string; description: string; url: string; comingSoon?: boolean }>
  ) => {
    const Icon = icon;
    return (
      <div className="mb-16 lg:mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-accent/10 rounded-lg">
            <Icon className="h-6 w-6 text-accent" />
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-primary">{title}</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="prosjekter" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Prosjekter
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tekniske prosjekter kategorisert etter programmeringsspråk og teknologi
            </p>
          </div>

          <div className="animate-fade-in-up">
            {renderCategory("Python-prosjekter", Code2, pythonProjects)}
            {renderCategory("Web – HTML, CSS & JavaScript", Globe, webProjects)}
            {renderCategory("Java-prosjekter", Coffee, javaProjects)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
