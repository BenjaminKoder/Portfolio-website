import { useState } from "react";
import { Linkedin, Github, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Replace with actual Make.com webhook URL
      const webhookUrl = "YOUR_MAKE_WEBHOOK_URL_HERE";
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        toast({
          title: "Melding sendt!",
          description: "Takk for din henvendelse. Du vil høre fra oss snart.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Noe gikk galt",
        description: "Kunne ikke sende meldingen. Vennligst prøv igjen senere.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Navn
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    placeholder="Ditt navn"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-post
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    placeholder="din@epost.no"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Melding
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    placeholder="Din melding..."
                    rows={5}
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
                >
                  <Send className="h-4 w-4" />
                  {isSubmitting ? "Sender..." : "Send melding"}
                </Button>
              </form>
            </div>

            {/* Social Links */}
            <div className="space-y-6 animate-fade-in">
              <div className="bg-gradient-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Finn meg også her
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
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span className="font-medium">Eller bruk kontaktskjemaet</span>
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

export default Contact;
