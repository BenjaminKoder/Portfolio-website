import { Code2, Globe, Cpu, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programmering",
      skills: ["Python", "Java", "JavaScript", "HTML", "CSS"],
    },
    {
      icon: Globe,
      title: "Web",
      skills: ["Supabase", "REST API-er", "Node.js", "Backend-integrasjoner"],
    },
    {
      icon: Cpu,
      title: "Automatisering og AI",
      skills: ["Make.com", "OpenAI API", "Webhooker", "AI-integrasjoner"],
    },
    {
      icon: Wrench,
      title: "Verktøy og Metodikk",
      skills: ["Git/GitHub", "Lovable", "Figma", "Problemløsning", "Systemutvikling"],
    },
  ];

  return (
    <section id="kompetanse" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Kompetanse
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Teknisk kompetanse innen utvikling, systemdesign og moderne verktøy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 animate-fade-in-up">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-card border border-border rounded-lg p-6 lg:p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-secondary text-foreground rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
