import { Container } from "@/components/ui/container";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";

export function FinalCtaSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-page pb-16 sm:pb-24 lg:pb-28">
      <Container>
        <div className="section-hover section-hover--cta scroll-reveal-emphasis relative isolate grid overflow-hidden rounded-[1.25rem] border border-hero-line bg-hero px-6 py-10 text-hero-ink sm:px-10 sm:py-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-12 lg:px-14 lg:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-2/3 bg-[radial-gradient(ellipse_at_90%_50%,rgba(31,163,195,0.12),transparent_50%)]"
          />
          <div className="relative max-w-3xl">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-100/80 sm:text-xs">
              Your next ad starts with a conversation
            </p>
            <h2
              id="contact-heading"
              className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.055em]"
            >
              Let&apos;s Build Your First AI Ad Video.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-hero-muted sm:text-lg">
              Have a product, service or idea you want to advertise?
            </p>
          </div>
          <WhatsAppLink className="relative mt-7 w-fit lg:mb-1 lg:mt-0">
            Talk on WhatsApp
          </WhatsAppLink>
        </div>
      </Container>
    </section>
  );
}
