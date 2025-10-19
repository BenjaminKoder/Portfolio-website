import { GraduationCap, Briefcase, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const CV = () => {
  return (
    <section id="cv" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 lg:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              CV
            </h2>
            <p className="text-muted-foreground text-lg">
              Utdanning og relevant erfaring
            </p>
          </div>

          <div className="space-y-8 animate-fade-in-up">
            {/* Education */}
            <div className="bg-gradient-card border border-border rounded-lg p-6 lg:p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Utdanning
                  </h3>
                  <div className="space-y-2">
                    <p className="text-foreground font-medium">
                      NTNU – Datateknologi
                    </p>
                    <p className="text-muted-foreground">2024 – 2029</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-gradient-card border border-border rounded-lg p-6 lg:p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Briefcase className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Erfaring
                  </h3>
                  <div className="space-y-2">
                    <p className="text-foreground font-medium">
                      Utvikler – DigiSaga
                    </p>
                    <p className="text-muted-foreground">
                      AI-integrerte websystemer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
            >
              <Download className="h-5 w-5" />
              Last ned CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
