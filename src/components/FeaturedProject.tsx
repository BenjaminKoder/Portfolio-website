import { ExternalLink, Code2, Database, Workflow } from "lucide-react";

const FeaturedProject = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-hero">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-background/95 backdrop-blur-sm border border-border rounded-2xl p-8 lg:p-12 shadow-lg animate-fade-in">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                  Hovedprosjekt
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
                  DigiSaga
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Utvikling av profesjonelle IT-løsninger med AI-integrasjon. Arbeid med Supabase, Make.com, og automatiserte backend-flyter. Del av studentstartup-prosjekt.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-lg">
                    <Database className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium">Supabase</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-lg">
                    <Workflow className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium">Make.com</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-lg">
                    <Code2 className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium">AI-integrasjon</span>
                  </div>
                </div>

                <a
                  href="https://digisaga.no"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors group"
                >
                  Besøk DigiSaga
                  <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              
              <div className="flex-1 w-full lg:w-auto">
                <div className="aspect-video bg-secondary/50 rounded-lg border border-border flex items-center justify-center">
                  <Code2 className="h-16 w-16 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
