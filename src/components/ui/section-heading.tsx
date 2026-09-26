type SectionHeadingProps = Readonly<{
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
}>;

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
}: SectionHeadingProps) {
  const isInverse = tone === "inverse";

  return (
    <div
      className={`scroll-reveal ${
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }`}
    >
      <p
        className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand"
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl ${
          isInverse ? "text-hero-ink" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-7 sm:text-lg ${
            isInverse ? "text-hero-muted" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
