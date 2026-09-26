import { Container } from "@/components/ui/container";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";

export function FinalCtaSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-page pb-20 sm:pb-28">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[1.8rem] bg-hero px-6 py-12 text-hero-ink sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-0 -z-10 w-full bg-[radial-gradient(ellipse_at_86%_45%,rgba(31,163,195,0.2),transparent_40%)] sm:w-2/3"
          />
          <div className="relative max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.19em] text-cyan-100/80">
              Your next ad starts with a conversation
            </p>
            <h2
              id="contact-heading"
              className="text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl"
            >
              Let&apos;s Build Your First AI Ad Video.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-hero-muted sm:text-lg">
              Have a product, service or idea you want to advertise?
            </p>
            <WhatsAppLink className="mt-8 min-h-14 px-6 sm:px-7">
              Talk on WhatsApp
            </WhatsAppLink>
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -right-16 hidden h-64 w-64 rounded-full border border-cyan-100/10 sm:block lg:h-80 lg:w-80"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-12 -right-4 hidden h-48 w-48 rounded-full border border-cyan-100/10 sm:block lg:h-64 lg:w-64"
          />
        </div>
      </Container>
    </section>
  );
}
