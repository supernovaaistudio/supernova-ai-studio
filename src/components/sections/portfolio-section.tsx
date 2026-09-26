import { portfolioItems } from "@/data/portfolio";
import { PortfolioVideoCard } from "@/components/portfolio/portfolio-video-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function PortfolioSection() {
  return (
    <section id="work" aria-labelledby="work-heading" className="bg-page py-16 sm:py-24 lg:py-28">
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

        <div className="mt-9 sm:mt-12">
          <div
            aria-label="Portfolio videos"
            role="region"
            tabIndex={0}
            className="portfolio-carousel -mx-5 flex w-[calc(100%+2.5rem)] snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth px-5 pb-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:-mx-8 sm:w-[calc(100%+4rem)] sm:gap-5 sm:px-8 md:mx-0 md:grid md:w-full md:snap-none md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3 lg:gap-6"
          >
            {portfolioItems.map((item, index) => (
              <PortfolioVideoCard key={item.id} item={item} index={index} />
            ))}
          </div>
          <p className="mt-2 flex items-center gap-2 text-xs font-medium text-muted md:hidden">
            Swipe to explore <span aria-hidden="true" className="text-brand">→</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
