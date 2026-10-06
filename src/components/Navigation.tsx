import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Prosjekter", href: "#prosjekter" },
  { label: "Kompetanse", href: "#kompetanse" },
  { label: "CV", href: "#cv" },
  { label: "Kontakt", href: "#kontakt" },
];

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-3 z-50 px-3">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border-2 border-foreground bg-background/90 pl-5 pr-2 backdrop-blur shadow-[3px_3px_0_0_hsl(var(--foreground))]">
        <a href="#top" className="font-display text-lg font-extrabold">
          Benjamin <span className="text-blue">Eng</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-1.5 font-mono text-sm font-medium transition-colors hover:bg-periwinkle"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="mr-2 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Lukk meny" : "Åpne meny"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="pop mx-auto mt-2 flex max-w-6xl flex-col p-2 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-mono text-sm font-medium hover:bg-periwinkle"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
