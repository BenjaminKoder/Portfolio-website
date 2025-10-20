import ProjectCard from "./ProjectCard";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const earlyProjects = [
    {
      title: "HTML5 Canvas spill",
      description: "Fysikkbasert spill med animasjon og collision detection",
      url: "https://benjaminkoder.github.io/Spillsider/Canvasgamefreestyle/index.html",
    },
    {
      title: "Spinner (Database)",
      description: "Dynamisk spinner med datalagring",
      url: "https://benjaminkoder.github.io/Spillsider/SpinnerDatabase/index.html",
    },
    {
      title: "Spinner (LocalStorage)",
      description: "Spinner med lokal datalagring",
      url: "https://benjaminkoder.github.io/Spillsider/SpinnerLocal/index.html",
    },
    {
      title: "Tallsystemer",
      description: "Interaktiv tallsystemkonverter",
      url: "https://benjaminkoder.github.io/StorsteProsjekter/Tallsystemer/index.html",
    },
    {
      title: "Mario",
      description: "Plattformspill i nettleser",
      url: "https://benjaminkoder.github.io/StorsteProsjekter/Mario/index.html",
    },
    {
      title: "Yatzy",
      description: "Digitalt terningspill",
      url: "https://benjaminkoder.github.io/StorsteProsjekter/Yatzy/index.html",
    },
    {
      title: "Monty Hall",
      description: "Interaktiv simulering av Monty Hall-problemet",
      url: "https://benjaminkoder.github.io/StorsteProsjekter/MontyHall/index.html",
    },
    {
      title: "Mobil-demo",
      description: "Mobilresponsiv webdemo",
      url: "https://benjaminkoder.github.io/StorsteProsjekter/Mobil/index.html",
    },
  ];

  return (
    <section id="prosjekter" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Prosjekter
            </h2>
          </div>

          <div className="animate-fade-in-up">
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-muted-foreground mb-6">
                Tidlige prosjekter (utviklet på videregående)
              </h3>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {earlyProjects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            </div>

            <div className="text-center pt-8">
              <a
                href="https://github.com/BenjaminKoder/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2">
                  <Github className="h-4 w-4" />
                  Se også Python- og Java-prosjekter på GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
