import { portfolioItems } from "@/data/portfolio";
import { PortfolioVideoCard } from "@/components/portfolio/portfolio-video-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function PortfolioSection() {
  return (
    <section id="work" aria-labelledby="work-heading" className="bg-page py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <SectionHeading
            id="work-heading"
            eyebrow="Selected work"
            title="Our Work"
            description="See what we&apos;ve been creating with AI."
          />
          <p className="max-w-sm rounded-xl border border-line bg-panel px-4 py-3 text-xs leading-5 text-muted sm:text-sm">
            Demo entries are shown for now. Add real YouTube URLs in the portfolio data when videos are ready.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-6 lg:mt-14">
          {portfolioItems.map((item, index) => (
            <PortfolioVideoCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
