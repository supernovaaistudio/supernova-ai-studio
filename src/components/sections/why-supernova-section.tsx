import { studioPrinciples } from "@/data/studio-content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhySuperNovaSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate overflow-hidden bg-hero py-20 text-hero-ink sm:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_88%_48%,rgba(20,150,190,0.16),transparent_48%)]"
      />
      <Container className="relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <SectionHeading
            id="about-heading"
            eyebrow="Our approach"
            title="Why SuperNova"
            description="Creative thinking leads. AI expands what we can make."
            tone="inverse"
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {studioPrinciples.map((principle) => (
            <article
              key={principle.number}
              className="rounded-[1.25rem] border border-hero-line bg-hero-raised/65 p-5 transition-colors duration-200 hover:bg-hero-raised sm:p-6"
            >
              <p className="text-xs font-semibold tracking-[0.14em] text-brand">
                {principle.number}
              </p>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-hero-ink">
                {principle.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-hero-muted">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
