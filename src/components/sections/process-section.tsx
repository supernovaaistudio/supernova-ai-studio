import { processSteps } from "@/data/studio-content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="section-hover section-hover--process section-tone-process bg-page py-16 sm:py-24 lg:py-28"
    >
      <Container>
        <SectionHeading
          id="process-heading"
          eyebrow="From first thought to final cut"
          title="How It Works"
          description="A simple path from your idea to an advertising video."
        />

        <ol className="scroll-reveal mt-10 grid gap-x-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-x-10">
          {processSteps.map((step, index) => (
            <li
              key={step.number}
              className="group relative border-t border-line pb-7 pt-5 sm:pb-10 sm:pt-6 lg:pb-0"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-[-1px] h-px w-9 bg-brand/75 transition-[width] duration-300 group-hover:w-16 motion-reduce:transition-none"
              />
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-medium tracking-[0.12em] text-brand">
                  {step.number}
                </span>
                {index < processSteps.length - 1 ? (
                  <span aria-hidden="true" className="hidden text-sm text-muted/70 lg:inline">
                    →
                  </span>
                ) : null}
              </div>
              <h3 className="mt-8 text-xl font-semibold tracking-[-0.035em] text-ink sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-muted sm:text-[15px]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
