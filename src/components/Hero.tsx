import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hjem"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Benjamin Eng
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Benjamin Eng er student innen datateknologi ved NTNU og utvikler
            innen web og AI-integrasjoner.
          </p>
          
          <button
            onClick={() => scrollToSection("prosjekter")}
            className="mt-12 inline-flex items-center gap-2 text-accent hover:text-primary transition-colors group"
            aria-label="Scroll til prosjekter"
          >
            <span className="text-sm font-medium">Se prosjekter</span>
            <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
