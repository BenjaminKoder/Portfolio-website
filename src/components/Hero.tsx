import profileImage from "@/assets/profile.png";
import { profile } from "@/content/profile";
import { skillGroups } from "@/content/skills";

const links = [
  { label: "GitHub", href: profile.github, color: "bg-blue text-white" },
  { label: "LinkedIn", href: profile.linkedin, color: "bg-periwinkle" },
  { label: "CV", href: profile.cv, color: "bg-ice" },
  { label: "E-post", href: `mailto:${profile.email}`, color: "bg-lavender" },
];

// Alle ferdighetene i én liste, til båndet som ruller under toppen.
const ticker = skillGroups.flatMap((group) => group.skills);

const Hero = () => {
  return (
    <header id="top" className="relative overflow-hidden pt-28 lg:pt-36">
      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="tag -rotate-2 bg-periwinkle">NTNU</span>
              <span className="tag rotate-1 bg-lavender">Indøk</span>
              <span className="tag -rotate-1 bg-ice">Web + AI</span>
            </div>
            <h1 className="isolate font-display text-[clamp(3.25rem,11vw,8.5rem)] font-extrabold leading-[0.9] tracking-tight">
              Benjamin
              <br />
              <span className="relative inline-block">
                <span className="absolute inset-x-[-0.08em] -bottom-[0.02em] top-[0.55em] -z-10 -rotate-1 rounded-md bg-periwinkle" aria-hidden />
                <span className="text-blue">Eng</span>
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed sm:text-xl">{profile.tagline}</p>

            <ul className="mt-10 flex flex-wrap gap-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className={`btn ${link.color}`}
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-52 sm:w-64 lg:w-72">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rotate-3 rounded-[2rem] border-2 border-foreground bg-blue" aria-hidden />
            <img
              src={profileImage}
              alt={profile.name}
              className="relative aspect-square w-full -rotate-2 rounded-[2rem] border-2 border-foreground object-cover"
            />
          </div>
        </div>
      </div>

      {/* Båndet er bredere enn skjermen og har luft under, så skråstillingen aldri kutter det */}
      <div className="-mx-[5vw] mb-8 mt-20 w-[110vw] -rotate-1 overflow-hidden border-y-2 border-foreground bg-foreground py-3 text-background lg:mt-28">
        <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-8 whitespace-nowrap font-mono text-sm">
          {/* Listen ligger to ganger etter hverandre, så animasjonen kan gå i loop uten hopp */}
          {[...ticker, ...ticker].map((skill, i) => (
            <span key={i} className="flex items-center gap-8">
              {skill}
              <span className="text-periwinkle" aria-hidden>
                ✳
              </span>
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Hero;
