import { processSteps } from "@/data/studio-content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="bg-page py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          id="process-heading"
          eyebrow="From first thought to final cut"
          title="How It Works"
          description="A simple path from your idea to an advertising video."
        />

        <div className="relative mt-10 lg:mt-14">
          <div
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-line lg:block"
          />
          <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {processSteps.map((step) => (
              <li key={step.number} className="relative rounded-2xl border border-line bg-panel p-5 sm:p-6 lg:border-0 lg:bg-transparent lg:p-0">
                <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-6">
                  <span className="relative z-10 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-panel text-sm font-semibold text-brand shadow-sm">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-ink sm:text-lg">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
