import { portfolioItems } from "@/data/portfolio";
import { PortfolioCarousel } from "@/components/portfolio/portfolio-carousel";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function PortfolioSection() {
  return (
    <section id="work" aria-labelledby="work-heading" className="section-hover section-hover--work section-tone-page-to-raised bg-page py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <SectionHeading
            id="work-heading"
            eyebrow="Selected work"
            title="Our Work"
            description="See what we&apos;ve been creating with AI."
          />
          <p className="max-w-sm border-l border-brand/60 pl-4 text-sm leading-6 text-muted">
            Demo entries are shown for now. Add real YouTube URLs in the portfolio data when videos are ready.
          </p>
        </div>

        <div className="scroll-reveal mt-9 sm:mt-12">
          <PortfolioCarousel items={portfolioItems} />
          <p className="mt-2 flex items-center gap-2 text-xs font-medium text-muted md:hidden">
            Swipe to explore <span aria-hidden="true" className="text-brand">→</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
