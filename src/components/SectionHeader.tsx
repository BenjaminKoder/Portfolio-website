interface SectionHeaderProps {
  index: string;
  title: string;
  color: string;
  intro?: string;
}

// Felles overskrift for alle seksjonene, så de ser like ut.
const SectionHeader = ({ index, title, color, intro }: SectionHeaderProps) => (
  <div className="mb-12 flex flex-wrap items-end gap-x-6 gap-y-3 lg:mb-16">
    <span
      className={`flex h-14 w-14 -rotate-6 items-center justify-center rounded-full border-2 border-foreground font-mono text-lg font-medium ${color}`}
    >
      {index}
    </span>
    <h2 className="font-display text-5xl font-extrabold tracking-tight sm:text-6xl">{title}</h2>
    {intro && <p className="w-full max-w-2xl text-muted-foreground">{intro}</p>}
  </div>
);

export default SectionHeader;
