import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WhySuperNovaSection } from "@/components/sections/why-supernova-section";

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-page text-ink transition-colors duration-300">
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <PortfolioSection />
        <ServicesSection />
        <WhySuperNovaSection />
        <ProcessSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
