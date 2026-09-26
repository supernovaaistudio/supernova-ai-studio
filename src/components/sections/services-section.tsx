import { services } from "@/data/studio-content";
import { ServiceCard } from "@/components/services/service-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-panel-raised py-20 sm:py-28"
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

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
