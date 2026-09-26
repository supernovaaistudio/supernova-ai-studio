"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getWhatsAppHref, navigationLinks } from "@/config/site";

type Theme = "light" | "dark";

const headerNavigationLinks = navigationLinks.filter(
  (link) => link.href !== "#about",
);

function ThemeToggle({
  theme,
  onToggle,
}: Readonly<{ theme: Theme; onToggle: () => void }>) {
  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-hero-muted transition-colors duration-200 hover:bg-hero-raised hover:text-hero-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand motion-reduce:transition-none"
    >
      {theme === "light" ? (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]">
          <path
            d="M20.1 15.2A8.6 8.6 0 0 1 8.8 3.9 8.7 8.7 0 1 0 20.1 15.2Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]">
          <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.7" />
          <path
            d="M12 2.5v2M12 19.5v2M4.7 4.7l1.4 1.4m11.8 11.8 1.4 1.4M2.5 12h2m15 0h2M4.7 19.3l1.4-1.4M17.9 6.1l1.4-1.4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      )}
    </button>
  );
}

function HeaderWhatsAppLink({
  className = "",
}: Readonly<{ className?: string }>) {
  return (
    <a
      href={getWhatsAppHref()}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-10 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-brand px-3.5 text-[13px] font-medium text-brand-foreground transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-brand/90 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand motion-reduce:transition-none ${className}`}
    >
      <Image
        src="/whatsapp.png"
        alt=""
        aria-hidden="true"
        width={18}
        height={18}
        className="h-[18px] w-[18px] shrink-0 object-contain"
      />
      <span>Talk on WhatsApp</span>
    </a>
  );
}

export function SiteHeader() {
  const [theme, setTheme] = useState<Theme>("light");
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
  }

  useEffect(() => {
    if (!menuOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header
      className="menu-enter sticky top-0 z-50 border-b border-[color:var(--hero-line)] bg-hero text-hero-ink transition-colors duration-200 motion-reduce:animate-none motion-reduce:transition-none"
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-panel focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-ink focus:shadow-lg"
      >
        Skip to content
      </a>

      <div className="mx-auto grid min-h-[76px] w-full max-w-[1280px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 sm:px-8 md:min-h-[80px]">
        <Link
          href="/"
          aria-label="SuperNova AI Studio home"
          className="flex w-fit shrink-0 items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand"
        >
          <Image
            src="/logo.png"
            alt="SuperNova AI Studio"
            width={1222}
            height={1287}
            priority
            sizes="(min-width: 768px) 64px, 56px"
            className="h-14 w-14 object-contain md:h-16 md:w-16"
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center justify-self-center gap-8 md:flex lg:gap-9">
          {headerNavigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium tracking-[0.01em] text-hero-muted transition-[color,transform] duration-200 hover:-translate-y-px hover:text-hero-ink focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand motion-reduce:transition-none"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center justify-self-end gap-1.5 sm:gap-2 md:gap-3">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <div className="hidden md:block">
            <HeaderWhatsAppLink />
          </div>
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-hero-ink transition-colors duration-200 hover:bg-hero-raised focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand motion-reduce:transition-none md:hidden"
          >
            {menuOpen ? (
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`grid overflow-hidden transition-[grid-template-rows,opacity,transform] duration-200 ease-out md:hidden motion-reduce:transition-none ${
          menuOpen
            ? "grid-rows-[1fr] translate-y-0 opacity-100"
            : "pointer-events-none grid-rows-[0fr] -translate-y-1 opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <nav aria-label="Mobile navigation" className="border-t border-line/60 bg-page">
            <div className="mx-auto flex w-full max-w-[1280px] flex-col px-6 pb-5 pt-2 sm:px-8">
              {headerNavigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-12 items-center py-3 text-[15px] font-medium text-ink transition-colors duration-200 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand motion-reduce:transition-none"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 border-t border-line/60 pt-4">
                <HeaderWhatsAppLink className="min-h-11 px-4" />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
