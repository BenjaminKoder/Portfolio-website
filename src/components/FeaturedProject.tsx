import { ExternalLink, Code2, Database, Workflow } from "lucide-react";

const FeaturedProject = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-featured relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-background/80 backdrop-blur-xl border border-border/50 rounded-3xl p-8 lg:p-12 shadow-premium animate-fade-in relative overflow-hidden group">
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center relative z-10">
              <div className="flex-1 space-y-6">
                <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-2 shadow-sm">
                  Hovedprosjekt
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text">
                  DigiSaga
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Utvikling av profesjonelle IT-løsninger med AI-integrasjon. Arbeid med Supabase, Make.com, og automatiserte backend-flyter. Del av studentstartup-prosjekt.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary/80 backdrop-blur-sm rounded-lg border border-border/50 hover:border-accent/30 transition-colors">
                    <Database className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium">Supabase</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary/80 backdrop-blur-sm rounded-lg border border-border/50 hover:border-accent/30 transition-colors">
                    <Workflow className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium">Make.com</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary/80 backdrop-blur-sm rounded-lg border border-border/50 hover:border-accent/30 transition-colors">
                    <Code2 className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium">AI-integrasjon</span>
                  </div>
                </div>

                <a
                  href="https://digisaga.no"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:shadow-glow transition-all duration-300 group/btn"
                >
                  Besøk DigiSaga
                  <ExternalLink className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
              
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative group/image">
                  {/* Premium frame effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-2xl blur-lg opacity-60 group-hover/image:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Image container with motherboard placeholder */}
                  <div className="relative aspect-video bg-gradient-to-br from-accent/10 via-background to-primary/10 rounded-xl border border-border/50 overflow-hidden shadow-lg">
                    {/* Grid pattern overlay for tech aesthetic */}
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: 'linear-gradient(hsl(var(--accent) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent) / 0.1) 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}></div>
                    
                    {/* Placeholder for motherboard image */}
                    <div className="relative w-full h-full flex items-center justify-center p-8">
                      <div className="relative">
                        <Code2 className="h-20 w-20 text-accent/40 animate-pulse" />
                        <div className="absolute inset-0 blur-xl bg-accent/20"></div>
                      </div>
                    </div>
                    
                    {/* Corner accents */}
                    <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-accent/30"></div>
                    <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-accent/30"></div>
                    <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-accent/30"></div>
                    <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-accent/30"></div>
                  </div>
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
