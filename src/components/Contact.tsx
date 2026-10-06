import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { profile } from "@/content/profile";
import SectionHeader from "./SectionHeader";

const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Navn er påkrevd").max(100, "Navnet må være kortere enn 100 tegn"),
  email: z.string().trim().email("Ugyldig e-postadresse").max(255, "E-postadressen må være kortere enn 255 tegn"),
  message: z.string().trim().min(1, "Melding er påkrevd").max(1000, "Meldingen må være kortere enn 1000 tegn"),
  // Skjult felt mot spam. Mennesker ser det ikke, roboter fyller det ut.
  // Navnet er valgt så nettleserens autofyll ikke kjenner det igjen.
  hp_field_x: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const inputClass =
  "mt-1.5 w-full rounded-lg border-2 border-foreground bg-card px-3 py-2 text-[15px] outline-none transition-shadow focus:shadow-[3px_3px_0_0_hsl(var(--foreground))]";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to send message");

      toast({ title: "Melding sendt", description: "Takk! Jeg svarer så snart jeg kan." });
      reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Noe gikk galt",
        description: `Meldingen ble ikke sendt. Send gjerne e-post til ${profile.email}.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    toast({ title: "E-postadressen er kopiert" });
  };

  return (
    <section id="kontakt" className="section">
      <div className="container-wide">
        <SectionHeader index="04" title="Kontakt" color="bg-ice" />

        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <div className="pop space-y-6 bg-periwinkle p-6 sm:p-8">
            <div>
              <p className="mb-2 font-mono text-xs font-medium uppercase tracking-wide">E-post</p>
              <a href={`mailto:${profile.email}`} className="link-arrow break-all">
                {profile.email}
              </a>
              <button onClick={copyEmail} className="ml-3 font-mono text-xs underline underline-offset-2">
                [kopier]
              </button>
            </div>
            <div>
              <p className="mb-2 font-mono text-xs font-medium uppercase tracking-wide">Profiler</p>
              <div className="flex flex-col items-start gap-2">
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link-arrow">
                  LinkedIn ↗
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link-arrow">
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="pop space-y-5 p-6 sm:p-8" noValidate>
            <div>
              <label htmlFor="name" className="label">
                Navn
              </label>
              <input id="name" {...register("name")} className={inputClass} autoComplete="name" />
              {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="label">
                E-post
              </label>
              <input id="email" type="email" {...register("email")} className={inputClass} autoComplete="email" />
              {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="label">
                Melding
              </label>
              <textarea id="message" {...register("message")} className={`${inputClass} min-h-[140px]`} />
              {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
            </div>
            <input
              {...register("hp_field_x")}
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn bg-blue text-white disabled:opacity-50"
            >
              {isSubmitting ? "Sender…" : "Send melding →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
