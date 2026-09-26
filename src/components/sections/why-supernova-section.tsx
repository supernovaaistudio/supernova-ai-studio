import { studioPrinciples } from "@/data/studio-content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhySuperNovaSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-hover section-hover--why section-tone-hero-to-page relative isolate overflow-hidden bg-hero py-16 text-hero-ink sm:py-24 lg:py-28"
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

        <div className="scroll-reveal grid gap-x-8 sm:grid-cols-2 sm:gap-x-10 lg:gap-x-14">
          {studioPrinciples.map((principle) => (
            <article
              key={principle.number}
              className="group border-t border-hero-line py-6 transition-colors duration-300 hover:border-brand/65 motion-reduce:transition-none sm:py-7"
            >
              <p className="font-mono text-xs font-medium tracking-[0.14em] text-brand">
                {principle.number}
              </p>
              <h3 className="mt-7 text-xl font-semibold tracking-[-0.025em] text-hero-ink sm:text-2xl">
                {principle.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-hero-muted sm:text-[15px]">
                {principle.description}
              </p>
              <div className="mt-6 h-px w-7 bg-brand/70 transition-[width] duration-300 group-hover:w-12 motion-reduce:transition-none" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
