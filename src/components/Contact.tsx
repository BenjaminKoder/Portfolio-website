import { useState } from "react";
import { Linkedin, Github, Mail, Copy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Contact = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const emailAddress = "bennyeng0612@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    toast({
      title: "E-postadresse kopiert!",
      description: "E-postadressen er kopiert til utklippstavlen.",
    });
  };

  return (
    <section id="kontakt" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 lg:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Kontakt
            </h2>
            <p className="text-muted-foreground text-lg">
              Ta kontakt for samarbeid eller spørsmål
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="space-y-6 animate-fade-in">
              <div className="bg-gradient-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Finn meg her
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://www.linkedin.com/in/benjamin-eng-5a8385323/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                  >
                    <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <span className="font-medium">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/BenjaminKoder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                  >
                    <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Github className="h-5 w-5" />
                    </div>
                    <span className="font-medium">GitHub</span>
                  </a>
                  <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                      <button className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group w-full">
                        <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                          <Mail className="h-5 w-5" />
                        </div>
                        <span className="font-medium">Send e-post</span>
                      </button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Kontakt meg via e-post</DialogTitle>
                        <DialogDescription>
                          Du kan sende meg en e-post direkte eller kopiere adressen.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="flex items-center justify-center gap-2 p-4 bg-muted rounded-lg">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{emailAddress}</span>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button
                            onClick={() => window.open(`mailto:${emailAddress}`, '_blank')}
                            className="gap-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Åpne e-postklient
                          </Button>
                          <Button
                            variant="outline"
                            onClick={copyToClipboard}
                            className="gap-2"
                          >
                            <Copy className="h-4 w-4" />
                            Kopier e-postadresse
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
