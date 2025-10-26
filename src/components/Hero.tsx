import { ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hjem" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient with smooth transition */}
      <div className="absolute inset-0 bg-gradient-section opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>

      {/* Smooth bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background/80"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="mb-6 flex justify-center">
            <img
              src={profileImage}
              alt="Benjamin Eng"
              className="w-32 h-32 rounded-full object-cover border-2 border-primary/20 shadow-elegant"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">Benjamin Eng</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Jeg er student innen datateknologi ved NTNU og utvikler innen web og AI-integrasjoner. Dette er min
            portefølje.
          </p>

          <button
            onClick={() => scrollToSection("prosjekter")}
            className="mt-12 inline-flex items-center gap-2 text-accent hover:text-primary transition-colors group"
            aria-label="Scroll til prosjekter"
          >
            <span className="text-sm font-medium">Se hva jeg holder på med</span>
            <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
