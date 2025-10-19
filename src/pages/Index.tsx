import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import CV from "@/components/CV";
import Contact from "@/components/Contact";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <CV />
        <Contact />
      </main>
      <ChatWidget />
      
      <footer className="bg-secondary/30 border-t border-border py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p className="text-sm">
              © {new Date().getFullYear()} Benjamin Eng. Alle rettigheter reservert.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
