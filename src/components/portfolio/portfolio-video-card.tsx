"use client";

import { useState } from "react";
import type { PortfolioItem } from "@/data/portfolio";

function getYouTubeEmbedUrl(youtubeUrl: string | null) {
  if (!youtubeUrl) return null;

  try {
    const url = new URL(youtubeUrl);
    const host = url.hostname.replace(/^www\./, "");
    let videoId: string | undefined;

    if (host === "youtu.be") {
      videoId = url.pathname.split("/").filter(Boolean)[0];
    } else if (host === "youtube.com" || host === "m.youtube.com") {
      if (url.pathname === "/watch") {
        videoId = url.searchParams.get("v") ?? undefined;
      } else if (url.pathname.startsWith("/embed/")) {
        videoId = url.pathname.split("/")[2];
      }
    }

    if (!videoId || !/^[\w-]{6,20}$/.test(videoId)) return null;

    return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`;
  } catch {
    return null;
  }
}

function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="ml-0.5 h-5 w-5">
      <path d="m7 4.75 8.5 5.25L7 15.25V4.75Z" fill="currentColor" />
    </svg>
  );
}

type PortfolioVideoCardProps = Readonly<{
  item: PortfolioItem;
  index: number;
}>;

export function PortfolioVideoCard({ item, index }: PortfolioVideoCardProps) {
  const [showPlaceholderInfo, setShowPlaceholderInfo] = useState(false);
  const embedUrl = getYouTubeEmbedUrl(item.youtubeUrl);
  const demoNumber = String(index + 1).padStart(2, "0");

  return (
    <article className="group relative flex w-[min(82vw,23rem)] shrink-0 snap-start flex-col overflow-hidden rounded-[1.2rem] border border-line bg-panel transition-[transform,border-color,box-shadow] duration-300 ease-out md:w-auto md:hover:-translate-y-1 md:hover:scale-[1.01] md:hover:border-brand/45 md:hover:shadow-[var(--shadow-soft)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100">
      <div className="relative aspect-[9/16] shrink-0 overflow-hidden bg-hero">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title={item.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <div
            className={`absolute inset-0 overflow-hidden ${
              item.visual === "orbit"
                ? "bg-[radial-gradient(ellipse_at_72%_34%,rgba(25,175,211,0.3),transparent_31%),linear-gradient(145deg,#16354a,#09131e_75%)]"
                : "bg-[radial-gradient(ellipse_at_27%_32%,rgba(200,151,104,0.22),transparent_28%),linear-gradient(145deg,#35414a,#111a22_72%)]"
            }`}
          >
            <div aria-hidden="true" className="absolute inset-0">
              {item.visual === "orbit" ? (
                <>
                  <div className="absolute -right-10 top-8 h-56 w-56 rounded-full border border-cyan-100/20 sm:h-72 sm:w-72" />
                  <div className="absolute -right-1 top-16 h-40 w-40 rounded-full border border-cyan-100/15 sm:h-56 sm:w-56" />
                  <div className="absolute right-[18%] top-[24%] h-24 w-24 rounded-full bg-cyan-300/20 blur-2xl sm:h-32 sm:w-32" />
                </>
              ) : (
                <>
                  <div className="absolute right-[12%] top-[18%] h-[54%] w-[30%] rotate-6 border border-white/25 bg-white/[0.04]" />
                  <div className="absolute right-[23%] top-[24%] h-[49%] w-[30%] -rotate-6 border border-white/30 bg-white/[0.07]" />
                  <div className="absolute right-[33%] top-[30%] h-[43%] w-[29%] rotate-2 border border-cyan-100/35 bg-cyan-100/[0.06]" />
                </>
              )}
            </div>

            <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-7">
              <div className="flex items-start justify-between gap-3">
                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/70 sm:text-[10px]">
                  Demo slot · {demoNumber}
                </span>
                <span className="text-right text-[9px] font-semibold uppercase tracking-[0.13em] text-white/65 sm:text-[10px]">
                  YouTube URL needed
                </span>
              </div>

              <div className="relative z-10 max-w-[15rem]">
                <p className="text-[10px] font-medium uppercase tracking-[0.19em] text-cyan-100/75">
                  {item.category}
                </p>
                <p className="mt-2 text-[2.1rem] font-semibold leading-[0.9] tracking-[-0.055em] text-white sm:text-4xl lg:text-[2.6rem]">
                  {item.visual === "orbit" ? "PRODUCT" : "SOCIAL"}
                  <span className="block text-white/55">VIDEO</span>
                </p>
              </div>

              <div className="flex items-end justify-between gap-4 border-t border-white/15 pt-4">
                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/60">
                  Placeholder preview
                </span>
                <button
                  type="button"
                  aria-label={`Play ${item.title} placeholder preview`}
                  onClick={() => setShowPlaceholderInfo(true)}
                  className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/45 bg-white/10 text-white transition-[background-color,transform] duration-200 hover:scale-105 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none motion-reduce:hover:scale-100 sm:h-14 sm:w-14"
                >
                  <PlayIcon />
                </button>
              </div>
            </div>

            {showPlaceholderInfo ? (
              <div
                role="status"
                className="absolute inset-0 z-20 flex flex-col items-start justify-center bg-[#071522]/95 p-6 text-white sm:p-9"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                  Placeholder preview
                </p>
                <p className="mt-3 max-w-sm text-lg font-medium leading-7">
                  Add a YouTube URL to this entry to show its video here.
                </p>
                <code className="mt-4 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs text-white/70">
                  src/data/portfolio.ts
                </code>
                <button
                  type="button"
                  onClick={() => setShowPlaceholderInfo(false)}
                  className="mt-6 text-sm font-semibold text-cyan-100 underline decoration-white/30 underline-offset-4 hover:decoration-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Close preview
                </button>
              </div>
            ) : null}
          </div>
        )}
        <div
          aria-hidden="true"
          className="portfolio-video-overlay pointer-events-none absolute inset-x-0 top-0 z-10 flex -translate-y-1 flex-col items-start bg-gradient-to-b from-[#071522]/85 via-[#071522]/35 to-transparent p-5 opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 motion-reduce:transition-none sm:p-7"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.17em] text-cyan-100/80">
            {item.category}
          </p>
          <p className="mt-2 text-xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-2xl">
            {item.title}
          </p>
        </div>
      </div>

      <div className="flex flex-1 items-start justify-between gap-4 p-4 sm:p-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand sm:text-[11px]">
            {item.category}
          </p>
          <h3 className="mt-2 text-lg font-semibold tracking-[-0.025em] text-ink sm:text-xl">
            {item.title}
          </h3>
          <p className="mt-2 max-w-sm text-[13px] leading-5 text-muted sm:text-sm sm:leading-6">
            {item.description}
          </p>
        </div>
      </div>
    </article>
  );
}
