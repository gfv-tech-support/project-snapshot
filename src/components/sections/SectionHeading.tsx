/** Centered, uppercase section heading with optional eyebrow + subtitle. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="font-display text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-display text-2xl font-black uppercase leading-tight tracking-[0.01em] text-foreground sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  );
}
