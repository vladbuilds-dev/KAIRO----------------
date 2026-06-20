"use client";

/**
 * Schematic of the protocol: a user vault feeds the agent runtime, whose
 * sub-modules route capital out to networks and protocols. Connectors carry an
 * animated dash to suggest live data flow (paused under reduced motion via CSS).
 */
export function ArchitectureDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface/40 p-4 sm:p-8">
      <svg
        viewBox="0 0 900 420"
        className="h-auto w-full font-mono"
        role="img"
        aria-label="KAIRO protocol architecture: user vault feeds the agent runtime, which routes capital to networks and protocols."
      >
        <defs>
          <linearGradient id="archStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#6366F1" />
            <stop offset="1" stopColor="#22D3EE" />
          </linearGradient>
          <style>{`
            .flow { stroke-dasharray: 6 8; animation: dash 1.4s linear infinite; }
            @keyframes dash { to { stroke-dashoffset: -28; } }
            @media (prefers-reduced-motion: reduce) { .flow { animation: none; } }
            .lbl { fill: #EDEFF7; font-size: 13px; }
            .sub { fill: #8A8FA3; font-size: 11px; }
          `}</style>
        </defs>

        {/* Connectors */}
        <g fill="none" stroke="url(#archStroke)" strokeWidth="1.5">
          <path className="flow" d="M180 210 H300" />
          <path className="flow" d="M470 150 H600" />
          <path className="flow" d="M470 210 H600" />
          <path className="flow" d="M470 270 H600" />
          <path d="M300 210 H300" />
        </g>
        <g fill="none" stroke="rgba(237,239,247,0.12)" strokeWidth="1">
          <path d="M385 175 V120 H600" className="flow" />
          <path d="M385 245 V300 H600" className="flow" />
        </g>

        {/* User vault */}
        <g>
          <rect x="40" y="170" width="140" height="80" rx="14" fill="#12131A" stroke="rgba(237,239,247,0.12)" />
          <text x="110" y="205" textAnchor="middle" className="lbl">Your vault</text>
          <text x="110" y="225" textAnchor="middle" className="sub">non-custodial</text>
        </g>

        {/* Agent runtime container */}
        <g>
          <rect x="300" y="110" width="170" height="200" rx="16" fill="#1A1B24" stroke="rgba(34,211,238,0.3)" />
          <text x="385" y="135" textAnchor="middle" className="lbl">Agent runtime</text>
          {[
            { y: 150, t: "Analyzer", s: "reads rates & risk" },
            { y: 200, t: "Router", s: "optimal execution" },
            { y: 250, t: "Risk engine", s: "mandate guardrails" },
          ].map((m) => (
            <g key={m.t}>
              <rect x="318" y={m.y} width="134" height="42" rx="9" fill="#12131A" stroke="rgba(237,239,247,0.1)" />
              <text x="385" y={m.y + 19} textAnchor="middle" className="lbl">{m.t}</text>
              <text x="385" y={m.y + 33} textAnchor="middle" className="sub">{m.s}</text>
            </g>
          ))}
        </g>

        {/* Destinations */}
        <g>
          {[
            { y: 100, t: "Lending", s: "Aave · Morpho" },
            { y: 162, t: "Liquidity", s: "Uniswap · Curve" },
            { y: 224, t: "Staking", s: "Lido · Eigen" },
            { y: 286, t: "Perps", s: "GMX · Hyperliquid" },
          ].map((d) => (
            <g key={d.t}>
              <rect x="600" y={d.y} width="170" height="48" rx="11" fill="#12131A" stroke="rgba(237,239,247,0.12)" />
              <text x="685" y={d.y + 22} textAnchor="middle" className="lbl">{d.t}</text>
              <text x="685" y={d.y + 38} textAnchor="middle" className="sub">{d.s}</text>
            </g>
          ))}
        </g>

        {/* Network strip */}
        <g>
          <text x="685" y="370" textAnchor="middle" className="sub">across Ethereum · Base · Arbitrum · Solana · +5</text>
        </g>
      </svg>
    </div>
  );
}
