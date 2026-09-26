import Image from "next/image";
import Link from "next/link";
import { navigationLinks } from "@/config/site";
import { Container } from "@/components/ui/container";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-panel">
      <Container className="grid gap-12 py-12 sm:grid-cols-2 sm:py-16 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-16">
        <div>
          <Link
            href="/"
            aria-label="SuperNova AI Studio home"
            className="inline-flex rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            <span className="flex h-[94px] w-[94px] items-center justify-center overflow-hidden rounded-3xl bg-hero">
              <Image
                src="/logo.png"
                alt="SuperNova AI Studio"
                width={1222}
                height={1287}
                sizes="94px"
                className="h-full w-full object-contain"
              />
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-6 text-muted">
            AI-powered advertising videos for businesses.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-ink">Explore</h2>
          <nav aria-label="Footer navigation" className="mt-4 flex flex-col items-start gap-3">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-brand focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-ink">Start a conversation</h2>
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
            Have a product, service, or idea you want to advertise?
          </p>
          <WhatsAppLink className="mt-5 min-h-11 px-5 text-sm">
            Talk on WhatsApp
          </WhatsAppLink>
        </div>

        <div className="border-t border-line pt-5 text-xs text-muted sm:col-span-2 lg:col-span-3">
          SuperNova AI Studio
        </div>
      </Container>
    </footer>
  );
}
