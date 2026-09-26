# SuperNova AI Studio — Visual Prototype

A responsive first-look homepage for SuperNova AI Studio, an AI-powered advertising video studio. Built with the Next.js App Router, TypeScript, Tailwind CSS, and ESLint.

## Run locally

Requirements: Node.js 20.9 or newer and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Update prototype content

- Set `WHATSAPP_DESTINATION` in `src/config/site.ts` to the studio's WhatsApp number, including country code and digits only. Until it is configured, the WhatsApp links open WhatsApp with the message ready and no recipient preselected.
- Add or update portfolio entries in `src/data/portfolio.ts`. Set `youtubeUrl` to a YouTube watch, share, or short URL to embed the video.
- Update service, studio-principle, and process copy in `src/data/studio-content.ts`.
- The official logo is used from `public/logo.png`.

## Project structure

- `src/app/` — App Router page, metadata, and global theme tokens
- `src/components/layout/` — responsive site header and footer
- `src/components/sections/` — hero, portfolio, services, studio approach, process, and final CTA
- `src/components/portfolio/` — reusable YouTube video card
- `src/components/services/` — reusable service card
- `src/components/ui/` — shared container, section heading, and WhatsApp link
- `src/data/` — portfolio and studio content
- `src/config/` — shared site and WhatsApp configuration
- `public/` — official logo asset

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```
