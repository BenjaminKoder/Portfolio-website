import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import CV from "@/components/CV";
import Contact from "@/components/Contact";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <main>
        <Projects />
        <Skills />
        <CV />
        <Contact />
      </main>
      <ChatWidget />

      <footer className="border-t-2 border-foreground bg-foreground py-8 text-background">
        <div className="container-wide flex flex-wrap justify-between gap-2 font-mono text-xs">
          <span>© {new Date().getFullYear()} Benjamin Eng</span>
          <a href="https://github.com/BenjaminKoder/portfolio" className="underline underline-offset-4 hover:text-periwinkle">
            Kildekoden til siden ↗
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
