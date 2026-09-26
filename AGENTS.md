<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project development rules

- Use the App Router under `src/app/`. Keep route files focused on composing the page from components.
- Put shared page chrome in `src/components/layout/` and independently understandable page sections in `src/components/sections/`. Add `src/components/ui/` for reusable interface primitives when they are needed.
- Keep components small and purposeful. Avoid both giant page components and abstractions that only wrap a trivial element.
- Use TypeScript and preserve strict type checking. Prefer explicit prop types for components that accept props.
- Components are Server Components by default. Add the `"use client"` directive only when browser state, event handlers, or client-only APIs require it.
- Use Tailwind CSS for component styling. Keep global CSS limited to shared tokens and base styles.
- Build responsive layouts from small screens upward. Use semantic HTML, accessible names, keyboard support, visible focus styles, and sufficient contrast.
- Do not add secrets, API keys, external services, or dependencies without a clear project requirement. Never expose private values to client components.
- Keep the README and dependency lockfile in sync with project changes.
- Before changing Next.js APIs or conventions, check the version-matched documentation in `node_modules/next/dist/docs/`.
- For implementation changes, run `npm run lint`, `npm run typecheck`, and `npm run build`.
