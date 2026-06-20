import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Boxes,
  Cpu,
  GitBranch,
  LineChart,
  RefreshCw,
  Rocket,
  Search,
  ShieldCheck,
  Workflow,
  Coins,
  Vote,
  Lock,
  Gauge,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Global navigation                                                   */
/* ------------------------------------------------------------------ */

export const NAV_LINKS = [
  { label: "Product", href: "/product" },
  { label: "Token", href: "/token" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Docs", href: "/docs" },
] as const;

export const SOCIAL_LINKS = [
  { label: "X", href: "https://x.com" },
  { label: "Discord", href: "https://discord.com" },
  { label: "Telegram", href: "https://telegram.org" },
  { label: "GitHub", href: "https://github.com" },
] as const;

/* ------------------------------------------------------------------ */
/* Home — headline metrics (counters)                                  */
/* ------------------------------------------------------------------ */

export interface Metric {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  fractionDigits?: number;
  hint: string;
}

export const METRICS: Metric[] = [
  {
    label: "Total value managed",
    value: 842.6,
    prefix: "$",
    suffix: "M",
    fractionDigits: 1,
    hint: "Across all live strategies",
  },
  {
    label: "Agents deployed",
    value: 28_410,
    hint: "Autonomous, non-custodial",
  },
  {
    label: "Networks supported",
    value: 9,
    hint: "EVM + non-EVM",
  },
  {
    label: "Settled volume",
    value: 4.1,
    prefix: "$",
    suffix: "B",
    fractionDigits: 1,
    hint: "Lifetime on-chain",
  },
];

/* ------------------------------------------------------------------ */
/* Trust bar                                                           */
/* ------------------------------------------------------------------ */

export const AUDITORS = ["Trail of Bits", "OpenZeppelin", "Spearbit", "Zellic"];
export const BACKERS = [
  "Paradigm",
  "Variant",
  "Robot Ventures",
  "Delphi",
  "1kx",
];

/* ------------------------------------------------------------------ */
/* How it works — agent lifecycle                                      */
/* ------------------------------------------------------------------ */

export interface LifecycleStep {
  id: string;
  index: string;
  title: string;
  body: string;
  icon: LucideIcon;
}

export const LIFECYCLE: LifecycleStep[] = [
  {
    id: "deploy",
    index: "01",
    title: "Deploy",
    body: "You set a mandate — target yield, risk ceiling, networks. An agent is provisioned to your non-custodial vault.",
    icon: Rocket,
  },
  {
    id: "analyze",
    index: "02",
    title: "Analyze",
    body: "The agent reads on-chain liquidity, rates and risk signals across protocols in real time.",
    icon: Search,
  },
  {
    id: "execute",
    index: "03",
    title: "Execute",
    body: "It routes capital into the optimal positions and bridges across networks when the math clears fees.",
    icon: Cpu,
  },
  {
    id: "rebalance",
    index: "04",
    title: "Rebalance",
    body: "As markets move, positions are trimmed and rotated to stay inside your risk mandate.",
    icon: RefreshCw,
  },
  {
    id: "compound",
    index: "05",
    title: "Compound",
    body: "Rewards are harvested and reinvested automatically — capital that never sits idle.",
    icon: LineChart,
  },
];

/* ------------------------------------------------------------------ */
/* Featured strategies                                                 */
/* ------------------------------------------------------------------ */

export interface Strategy {
  name: string;
  thesis: string;
  apyFrom: number;
  risk: "Conservative" | "Balanced" | "Directional";
  networks: string[];
  tvl: string;
}

export const STRATEGIES: Strategy[] = [
  {
    name: "Stable Yield Router",
    thesis: "Rotates stablecoins across lending markets for the best risk-adjusted rate.",
    apyFrom: 6.8,
    risk: "Conservative",
    networks: ["Ethereum", "Base", "Arbitrum"],
    tvl: "$312.4M",
  },
  {
    name: "LST Compounder",
    thesis: "Liquid-staking positions with auto-harvested rewards and MEV-aware routing.",
    apyFrom: 9.2,
    risk: "Balanced",
    networks: ["Ethereum", "Solana"],
    tvl: "$208.7M",
  },
  {
    name: "Delta-Neutral Basis",
    thesis: "Funding-rate capture hedged against spot — yield with limited directional risk.",
    apyFrom: 12.5,
    risk: "Balanced",
    networks: ["Arbitrum", "Hyperliquid"],
    tvl: "$164.1M",
  },
  {
    name: "Cross-Chain Opportunist",
    thesis: "Hunts emerging incentive programs and exits before emissions decay.",
    apyFrom: 18.0,
    risk: "Directional",
    networks: ["Base", "Solana", "Sui"],
    tvl: "$96.9M",
  },
];

/* ------------------------------------------------------------------ */
/* Ecosystem — networks & protocols                                    */
/* ------------------------------------------------------------------ */

export const NETWORKS = [
  "Ethereum",
  "Arbitrum",
  "Base",
  "Optimism",
  "Solana",
  "Polygon",
  "Avalanche",
  "Sui",
  "Hyperliquid",
];

export interface Integration {
  name: string;
  category: string;
  icon: LucideIcon;
}

export const INTEGRATIONS: Integration[] = [
  { name: "Aave", category: "Lending", icon: Boxes },
  { name: "Morpho", category: "Lending", icon: Boxes },
  { name: "Uniswap", category: "DEX / Liquidity", icon: Activity },
  { name: "Curve", category: "Stable swaps", icon: Activity },
  { name: "Lido", category: "Liquid staking", icon: Coins },
  { name: "Pendle", category: "Yield trading", icon: LineChart },
  { name: "GMX", category: "Perpetuals", icon: Gauge },
  { name: "EigenLayer", category: "Restaking", icon: Workflow },
  { name: "Across", category: "Bridging", icon: GitBranch },
];

/* ------------------------------------------------------------------ */
/* Manual DeFi vs KAIRO comparison                                     */
/* ------------------------------------------------------------------ */

export const COMPARISON: { feature: string; manual: string; kairo: string }[] = [
  {
    feature: "Monitoring",
    manual: "You watch dashboards around the clock",
    kairo: "Agents watch markets 24/7",
  },
  {
    feature: "Rebalancing",
    manual: "Manual, reactive, often late",
    kairo: "Continuous, rule-bound, on-chain",
  },
  {
    feature: "Cross-chain",
    manual: "Bridge by hand, track gas yourself",
    kairo: "Routed automatically when fees clear",
  },
  {
    feature: "Custody",
    manual: "Self-custody, full operational load",
    kairo: "Self-custody, zero operational load",
  },
  {
    feature: "Compounding",
    manual: "Easy to forget; rewards decay",
    kairo: "Harvested and reinvested on schedule",
  },
];

/* ------------------------------------------------------------------ */
/* Token — utility & tokenomics                                        */
/* ------------------------------------------------------------------ */

export interface TokenUtility {
  title: string;
  body: string;
  icon: LucideIcon;
}

export const TOKEN_UTILITY: TokenUtility[] = [
  {
    title: "Governance",
    body: "Vote on strategy listings, risk parameters and treasury allocation.",
    icon: Vote,
  },
  {
    title: "Staking",
    body: "Stake $KAIRO to secure the agent registry and earn protocol fees.",
    icon: Lock,
  },
  {
    title: "Premium agents",
    body: "Unlock advanced, lower-latency agent classes and private strategies.",
    icon: Cpu,
  },
  {
    title: "Fee discount",
    body: "Pay performance fees in $KAIRO for a standing discount.",
    icon: Coins,
  },
];

export interface Allocation {
  label: string;
  percent: number;
  color: string;
}

// Sums to 100. Colors stay inside the indigo→cyan family + neutral.
export const ALLOCATIONS: Allocation[] = [
  { label: "Community & ecosystem", percent: 34, color: "#22D3EE" },
  { label: "Core contributors", percent: 20, color: "#6366F1" },
  { label: "Investors", percent: 17, color: "#818CF8" },
  { label: "Treasury", percent: 15, color: "#38BDF8" },
  { label: "Liquidity & market ops", percent: 9, color: "#0EA5E9" },
  { label: "Public sale", percent: 5, color: "#475569" },
];

export const TOKEN_FACTS = [
  { label: "Total supply", value: "1,000,000,000", suffix: "$KAIRO" },
  { label: "Initial circulating", value: "12.5", suffix: "%" },
  { label: "Emission schedule", value: "48", suffix: "months" },
];

// Demo emission/vesting curve — cumulative circulating supply by quarter (millions).
export const EMISSION_CURVE: { quarter: string; supply: number }[] = [
  { quarter: "Q1", supply: 125 },
  { quarter: "Q2", supply: 168 },
  { quarter: "Q3", supply: 224 },
  { quarter: "Q4", supply: 301 },
  { quarter: "Q5", supply: 392 },
  { quarter: "Q6", supply: 486 },
  { quarter: "Q7", supply: 578 },
  { quarter: "Q8", supply: 661 },
  { quarter: "Q9", supply: 742 },
  { quarter: "Q10", supply: 812 },
  { quarter: "Q11", supply: 905 },
  { quarter: "Q12", supply: 1000 },
];

/* ------------------------------------------------------------------ */
/* Roadmap                                                             */
/* ------------------------------------------------------------------ */

export interface RoadmapItem {
  period: string;
  title: string;
  body: string;
  status: "shipped" | "active" | "planned";
}

export const ROADMAP: RoadmapItem[] = [
  {
    period: "Q2 2024",
    title: "Protocol genesis",
    body: "Core agent runtime, non-custodial vaults and the first stablecoin router go live on Ethereum and Base.",
    status: "shipped",
  },
  {
    period: "Q4 2024",
    title: "Multi-chain execution",
    body: "Cross-chain routing across nine networks with fee-aware bridging and MEV protection.",
    status: "shipped",
  },
  {
    period: "Q2 2025",
    title: "$KAIRO + governance",
    body: "Token generation event, staking, and on-chain governance over strategy listings and risk.",
    status: "active",
  },
  {
    period: "Q4 2025",
    title: "Agent marketplace",
    body: "Permissionless strategy authoring with an open SDK and a curated, staked registry.",
    status: "planned",
  },
  {
    period: "2026",
    title: "Intent settlement layer",
    body: "Solver network for cross-agent intents and institutional-grade reporting.",
    status: "planned",
  },
];

/* ------------------------------------------------------------------ */
/* Security                                                            */
/* ------------------------------------------------------------------ */

export interface SecurityPillar {
  title: string;
  body: string;
  icon: LucideIcon;
}

export const SECURITY: SecurityPillar[] = [
  {
    title: "Audited",
    body: "Four independent audits plus a continuous review retainer. Reports are public.",
    icon: ShieldCheck,
  },
  {
    title: "Non-custodial",
    body: "Agents act through your vault. You hold the keys; withdrawals are always permissionless.",
    icon: Lock,
  },
  {
    title: "Open source",
    body: "Agent runtime and strategy contracts are open and reproducible. Verify, don't trust.",
    icon: GitBranch,
  },
];

/* ------------------------------------------------------------------ */
/* Docs hub                                                            */
/* ------------------------------------------------------------------ */

export interface DocCard {
  title: string;
  body: string;
  href: string;
  cta: string;
}

export const DOC_CARDS: DocCard[] = [
  { title: "Documentation", body: "Guides, concepts and a full API reference for builders.", href: "#", cta: "Read docs" },
  { title: "Whitepaper", body: "The protocol design, agent model and economic security in depth.", href: "#", cta: "Download PDF" },
  { title: "GitHub", body: "Runtime, strategy contracts and the open agent SDK.", href: "https://github.com", cta: "View source" },
  { title: "Audits", body: "Reports from Trail of Bits, OpenZeppelin, Spearbit and Zellic.", href: "#", cta: "See reports" },
  { title: "Brand kit", body: "Logos, the wordmark, color tokens and usage guidelines.", href: "#", cta: "Get assets" },
  { title: "Blog", body: "Engineering notes, strategy breakdowns and protocol updates.", href: "#", cta: "Read blog" },
];

/* ------------------------------------------------------------------ */
/* Developer code snippet (Product page)                               */
/* ------------------------------------------------------------------ */

export const SDK_SNIPPET = `import { Kairo } from "@kairo/sdk";

const kairo = new Kairo({ apiKey: process.env.KAIRO_KEY });

// Deploy an autonomous agent with a risk mandate
const agent = await kairo.agents.deploy({
  vault: "0xA1c…9f2",
  mandate: {
    targetApy: 0.09,        // 9% target
    maxDrawdown: 0.05,      // 5% risk ceiling
    networks: ["ethereum", "base", "arbitrum"],
    strategies: ["stable-yield", "lst-compounder"],
  },
});

// Stream the agent's on-chain actions
for await (const action of agent.stream()) {
  console.log(action.type, action.network, action.amount);
}`;
