import Image from "next/image";
import { Container } from "@/components/ui/container";
import { getWhatsAppHref } from "@/config/site";

function StudioVisual() {
  return (
    <div
      className="hero-enter hero-enter-delay mx-auto w-full max-w-[560px] motion-reduce:animate-none"
    >
      <div
        aria-hidden="true"
        className="relative w-full overflow-hidden rounded-2xl border border-[color:var(--hero-line)] bg-hero-raised shadow-[0_18px_48px_rgba(0,0,0,0.18)] transition-[transform,border-color,box-shadow] duration-300 ease-out hover:scale-[1.02] hover:border-cyan-100/45 hover:shadow-[0_22px_60px_rgba(8,119,201,0.17)] motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:hover:border-[color:var(--hero-line)] motion-reduce:hover:shadow-[0_18px_48px_rgba(0,0,0,0.18)]"
      >
        <video
          src="/hero.mp4.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="block aspect-video h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-hero text-hero-ink">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_12%_0%,rgba(20,135,171,0.16),transparent_35%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_82%_35%,rgba(20,135,171,0.10),transparent_32%)]"
      />
      <Container className="relative flex flex-col items-center py-12 sm:py-16 lg:py-20">
        <StudioVisual />
        <h1 className="hero-enter hero-enter-delay mt-5 max-w-[18ch] text-center text-balance text-[clamp(2.35rem,5.5vw,4rem)] font-semibold leading-[0.96] tracking-[-0.065em] transition-[text-shadow] duration-300 ease-out hover:[text-shadow:0_0_24px_rgba(68,178,255,0.24)] motion-reduce:animate-none motion-reduce:transition-none motion-reduce:hover:[text-shadow:none] sm:mt-6">
          Ideas In.{" "}
          <span className="whitespace-nowrap text-cyan-200">Ad Creative Out.</span>
        </h1>
        <p className="hero-enter hero-enter-delay-2 mt-5 max-w-lg text-center text-base leading-7 text-hero-muted motion-reduce:animate-none sm:mt-6 sm:text-[17px] sm:leading-8">
          We turn products, services and ideas into cinematic AI-powered
          advertising videos built to capture attention.
        </p>
        <div className="hero-enter hero-enter-delay-3 mt-8 flex w-full max-w-lg flex-col items-stretch gap-3 motion-reduce:animate-none sm:flex-row sm:items-center sm:justify-center">
          <a
            href={getWhatsAppHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand px-5 text-sm font-semibold text-brand-foreground transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-brand/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand motion-reduce:transition-none sm:w-auto"
          >
            <Image
              src="/whatsapp.png"
              alt=""
              aria-hidden="true"
              width={20}
              height={20}
              className="h-5 w-5 shrink-0 object-contain"
            />
            <span>Talk on WhatsApp</span>
          </a>
          <a
            href="#work"
            className="group inline-flex min-h-12 items-center justify-center gap-2 px-3 text-sm font-medium text-hero-muted transition-colors duration-200 hover:text-hero-ink focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand motion-reduce:transition-none"
          >
            View Our Work
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5"
            >
              <path
                d="M10 3.75v12.5m-5-5 5 5 5-5"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <p className="hero-enter hero-enter-delay-3 mt-6 text-center text-xs font-medium tracking-wide text-hero-muted/75 motion-reduce:animate-none">
          Creative direction <span className="px-2 text-brand">·</span> AI production
          <span className="px-2 text-brand">·</span> Advertising video
        </p>
      </Container>
    </section>
  );
}
