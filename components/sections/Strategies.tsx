import { ArrowUpRight } from "lucide-react";
import { STRATEGIES, type Strategy } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const riskStyles: Record<Strategy["risk"], string> = {
  Conservative: "text-emerald-300/90 border-emerald-300/20 bg-emerald-300/5",
  Balanced: "text-cyan border-cyan/20 bg-cyan/5",
  Directional: "text-indigo border-indigo/20 bg-indigo/5",
};

export function Strategies() {
  return (
    <section className="shell py-20 sm:py-28">
      <SectionHeading
        eyebrow="Featured strategies"
        title="Curated mandates, run by agents"
        description="Each strategy is a risk-bound mandate. Agents execute it across networks and rebalance as markets move."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STRATEGIES.map((s, i) => (
          <Reveal key={s.name} index={i} className="h-full">
            <GlassCard className="flex h-full flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <span
                  className={cn(
                    "rounded-full border px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-wide",
                    riskStyles[s.risk],
                  )}
                >
                  {s.risk}
                </span>
                <ArrowUpRight className="size-4 text-muted transition-colors group-hover:text-cyan" />
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold">
                {s.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {s.thesis}
              </p>

              <div className="mt-6 border-t border-line pt-4">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-mono text-[0.7rem] uppercase tracking-wide text-muted">
                      APY from
                    </p>
                    <p className="font-mono text-2xl font-medium text-iris">
                      {s.apyFrom.toFixed(1)}%
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-[0.7rem] uppercase tracking-wide text-muted">
                      TVL
                    </p>
                    <p className="font-mono text-sm text-ink">{s.tvl}</p>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {s.networks.map((n) => (
                    <span
                      key={n}
                      className="rounded-md border border-line bg-base px-2 py-0.5 font-mono text-[0.68rem] text-muted"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-6 max-w-2xl font-mono text-xs leading-relaxed text-muted">
          APY shown is a trailing estimate, variable and not guaranteed. Figures
          are illustrative demo data.
        </p>
      </Reveal>
    </section>
  );
}
