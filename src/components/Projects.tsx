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
      url: "https://pilsulator.no/Spillsider/SpinnerTob/saannBenjiVil/index.html",
    },
    {
      title: "Spinner (LocalStorage)",
      description: "Spinner med lokal datalagring",
      url: " https://pilsulator.no/Spillsider/SpinnerTycoon/Spinner.html",
    },
    {
      title: "Tallsystemer",
      description: "Interaktiv tallsystemkonverter",
      url: "https://pilsulator.no/StorsteProsjekter/Tallsystemer/index.html",
    },
    {
      title: "Mario",
      description: "Plattformspill i nettleser (Refresh for omstart)",
      url: "https://pilsulator.no/StorsteProsjekter/shyguy/index.html",
    },
    {
      title: "Monty Hall",
      description: "Interaktiv simulering av Monty Hall-problemet",
      url: "https://pilsulator.no/StorsteProsjekter/4B%20Hendelser/4B%20timearbeid/MontyHall.html",
    },
    {
      title: "Mobil-demo",
      description: "Mobilresponsiv webdemo",
      url: "https://pilsulator.no/StorsteProsjekter/Mobil.html",
    },
  ];

  return (
    <section id="prosjekter" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">Prosjekter</h2>
          </div>

          <div className="animate-fade-in-up">
            <div className="mb-16">
              <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary/20 rounded-lg p-8 mb-12">
                <div className="max-w-3xl mx-auto text-center space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Nyeste prosjekter fra universitetet
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Python- og Java-prosjekter utviklet under studiene ved NTNU
                  </p>
                  <a href="https://github.com/BenjaminKoder/Portfolio" target="_blank" rel="noopener noreferrer" className="inline-block">
                    <Button size="lg" className="gap-3 text-base px-8 py-6 mt-2">
                      <Github className="h-5 w-5" />
                      Se prosjekter på GitHub
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-semibold text-muted-foreground mb-6">
                Utvalgte småprosjekter i web (utviklet på videregående)
              </h3>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {earlyProjects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
