# KAIRO — agentic DeFi protocol site

Premium, multi-page marketing site for **KAIRO**, a (fictional) agentic DeFi
protocol: autonomous AI agents that deploy, rebalance and compound capital
across DeFi. Built as an authored, Awwwards-grade experience — not a template.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** (design tokens in `tailwind.config.ts`)
- **Framer Motion** — reveals, counters, page transitions, scroll-driven SVG
- **react-three-fiber / three.js** — interactive WebGL agent network in the hero
- Deployable to **Vercel** out of the box

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Design system

- **Palette** — space-dark `#0A0B0F` base, surfaces `#12131A` / `#1A1B24`,
  text `#EDEFF7` / muted `#8A8FA3`, signature iridescent indigo→cyan
  (`#6366F1 → #22D3EE`). Accent used only on CTAs, active states and data-lines.
- **Type** — Space Grotesk (display), Inter (body), JetBrains Mono (numbers,
  APY, addresses, code).
- **Motion** — orchestrated and disciplined; everything respects
  `prefers-reduced-motion` (heavy 3D/parallax disabled, soft fades kept).

## Structure

```
app/
  layout.tsx          # fonts, providers, header/footer, preloader, transitions
  page.tsx            # Home
  product/            # How it works — lifecycle, architecture, SDK
  token/              # $KAIRO — utility, tokenomics donut, emission chart
  ecosystem/          # Networks, integrations, partners, grants
  roadmap/            # Scroll-driven timeline
  docs/               # Resource hub
components/
  three/              # WebGL agent network (lazy, client-only)
  charts/             # Dependency-free SVG donut + area charts
  sections/           # Page sections
  layout/             # Header, Footer, Preloader, transitions
  ui/                 # Reveal, Counter, MagneticButton, GlassCard, Modal …
  wallet/             # UI-only mock wallet (no chain logic)
lib/
  data.ts             # All demo content (metrics, strategies, tokenomics …)
```

## Notes

All numbers, strategies, tokenomics and the roadmap are **illustrative demo
data**. Wallet connect and "Launch App" are UI mocks — no blockchain logic and
no funds move. Risk disclaimers are intentional and should stay.
