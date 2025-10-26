import { useState } from "react";
import { Linkedin, Github, Mail, Copy, ExternalLink, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Navn er påkrevd").max(100, "Navnet må være mindre enn 100 tegn"),
  email: z.string().trim().email("Ugyldig e-postadresse").max(255, "E-postadressen må være mindre enn 255 tegn"),
  message: z.string().trim().min(1, "Melding er påkrevd").max(1000, "Meldingen må være mindre enn 1000 tegn"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const emailAddress = "bennyeng0612@gmail.com";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://hook.eu2.make.com/9d4l5c7bbixikqrnc0tteltkriq6ysxb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Melding sendt!",
          description: "Takk for din henvendelse. Jeg vil svare så snart som mulig.",
        });
        reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Noe gikk galt",
        description: "Kunne ikke sende meldingen. Vennligst prøv igjen senere.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
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

            <div className="animate-fade-in">
              <div className="bg-gradient-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Send en melding
                </h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Navn</Label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="Ditt navn"
                      className="mt-1.5"
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email">E-post</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="din@epost.no"
                      className="mt-1.5"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="message">Melding</Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Skriv din melding her..."
                      className="mt-1.5 min-h-[120px]"
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full gap-2">
                    {isSubmitting ? (
                      <>Sender...</>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send melding
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
