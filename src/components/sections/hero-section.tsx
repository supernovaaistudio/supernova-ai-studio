import Image from "next/image";
import { Container } from "@/components/ui/container";
import { getWhatsAppHref } from "@/config/site";

function StudioVisual() {
  return (
    <div
      aria-hidden="true"
      className="hero-enter hero-enter-delay relative mx-auto aspect-[0.94] w-full max-w-[560px] overflow-hidden rounded-[1.75rem] border border-[color:var(--hero-line)] bg-hero-raised p-5 shadow-2xl shadow-black/20 motion-reduce:animate-none sm:p-7"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_35%,rgba(22,185,218,0.22),transparent_40%),linear-gradient(145deg,#10283a,#09141f_72%)]" />
      <div className="absolute inset-x-[8%] top-[14%] bottom-[16%] overflow-hidden rounded-[1.25rem] border border-cyan-50/10 bg-[#0b1d2a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_62%_39%,rgba(22,185,218,0.22),transparent_44%),linear-gradient(145deg,#10283a,#09141f_76%)]" />
        <div className="absolute -right-[13%] top-[14%] h-[68%] w-[68%] rotate-[17deg] rounded-[48%] border border-cyan-100/20" />
        <div className="absolute -right-[5%] top-[21%] h-[56%] w-[54%] rotate-[17deg] rounded-[48%] border border-cyan-100/12" />
        <div className="absolute -right-[8%] -top-[12%] h-[125%] w-[42%] rotate-[25deg] bg-gradient-to-b from-transparent via-cyan-100/[0.08] to-transparent blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(118deg,transparent_28%,rgba(86,221,242,0.08)_49%,transparent_68%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[52%] bg-gradient-to-t from-[#071522]/90 via-[#071522]/30 to-transparent" />
      </div>

      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-hero-muted sm:text-xs">
            Visual direction
          </span>
          <span className="rounded-full border border-[color:var(--hero-line)] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-cyan-100/85 sm:text-[10px]">
            Idea → motion
          </span>
        </div>

        <div className="relative flex flex-1 items-center py-8 sm:py-10">
          <p className="relative max-w-[9ch] text-6xl font-semibold leading-[0.84] tracking-[-0.065em] text-hero-ink sm:text-7xl lg:text-8xl">
            MAKE
            <br />
            IT
            <br />
            MOVE.
          </p>
          <div className="absolute bottom-2 right-0 flex items-center gap-2 rounded-full border border-[color:var(--hero-line)] bg-hero/65 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.12em] text-hero-muted backdrop-blur sm:bottom-4 sm:right-4 sm:text-[10px]">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Creative direction × AI
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 border-t border-[color:var(--hero-line)] pt-4 sm:gap-3 sm:pt-5">
          {[
            ["01", "Concept"],
            ["02", "Direction"],
            ["03", "Production"],
          ].map(([number, label]) => (
            <div key={number} className="flex flex-col gap-1.5">
              <span className="text-[9px] font-medium tracking-[0.12em] text-cyan-100/70 sm:text-[10px]">
                {number}
              </span>
              <span className="text-[10px] font-medium text-hero-ink sm:text-xs">
                {label}
              </span>
            </div>
          ))}
        </div>
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
      <Container className="relative grid items-center gap-10 py-14 sm:py-16 lg:min-h-[730px] lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.9fr)] lg:gap-14 lg:py-20 xl:gap-16">
        <div className="max-w-[46rem]">
          <p className="hero-enter mb-7 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.19em] text-cyan-100/80 motion-reduce:animate-none sm:text-sm">
            <span className="h-px w-8 bg-brand" />
            AI-powered advertising videos
          </p>
          <h1 className="hero-enter hero-enter-delay max-w-[18ch] text-[clamp(2.75rem,4.5vw,4rem)] font-semibold leading-[0.94] tracking-[-0.065em] motion-reduce:animate-none sm:text-[clamp(3.4rem,4.5vw,4rem)]">
            <span className="block">Ideas In.</span>
            <span className="block text-cyan-200">
              Unforgettable <span className="whitespace-nowrap">Ads Out.</span>
            </span>
          </h1>
          <p className="hero-enter hero-enter-delay-2 mt-7 max-w-lg text-base leading-7 text-hero-muted motion-reduce:animate-none sm:text-[17px] sm:leading-8">
            We turn products, services and ideas into cinematic AI-powered
            advertising videos built to capture attention.
          </p>
          <div className="hero-enter hero-enter-delay-3 mt-8 flex flex-col items-stretch gap-3 motion-reduce:animate-none sm:flex-row sm:items-center">
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
          <p className="hero-enter hero-enter-delay-3 mt-6 text-xs font-medium tracking-wide text-hero-muted/75 motion-reduce:animate-none">
            Creative direction <span className="px-2 text-brand">·</span> AI production
            <span className="px-2 text-brand">·</span> Advertising video
          </p>
        </div>

        <StudioVisual />
      </Container>
    </section>
  );
}
