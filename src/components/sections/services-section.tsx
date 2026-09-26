import { services } from "@/data/studio-content";
import { ServiceCard } from "@/components/services/service-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-hover section-hover--services section-tone-raised-to-hero bg-panel-raised py-16 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <SectionHeading
            id="services-heading"
            eyebrow="The studio menu"
            title="What We Create"
            description="AI-powered video formats shaped around what you want to advertise."
          />
          <p className="max-w-sm text-sm leading-6 text-muted">
            One clear creative direction, expressed in formats made for products, social feeds, and brands.
          </p>
        </div>

        <div className="scroll-reveal mt-8 grid gap-x-8 sm:grid-cols-2 sm:gap-x-10 lg:mt-12 lg:gap-x-14">
          {services.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
