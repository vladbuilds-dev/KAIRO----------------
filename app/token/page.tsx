import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { DonutChart } from "@/components/charts/DonutChart";
import { AreaChart } from "@/components/charts/AreaChart";
import { CtaBand } from "@/components/sections/CtaBand";
import { TOKEN_UTILITY, TOKEN_FACTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Token",
  description:
    "$KAIRO powers governance, staking, premium agent access and fee discounts. Explore tokenomics and the emission schedule.",
};

export default function TokenPage() {
  return (
    <>
      <PageHeader
        eyebrow="$KAIRO"
        title={
          <>
            The token that aligns
            <br />
            the agent economy.
          </>
        }
        description="$KAIRO secures the agent registry, governs the protocol, and gives holders access to premium strategies and standing fee discounts."
      />

      {/* Facts strip */}
      <section className="shell -mt-8 pb-4">
        <Reveal>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {TOKEN_FACTS.map((f) => (
              <div key={f.label} className="bg-surface/70 p-6">
                <p className="font-mono text-2xl font-medium text-ink">
                  {f.value}{" "}
                  <span className="text-sm text-muted">{f.suffix}</span>
                </p>
                <p className="mt-1 text-sm text-muted">{f.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Utility */}
      <section className="shell py-20 sm:py-28">
        <SectionHeading
          eyebrow="Utility"
          title="Four reasons to hold $KAIRO"
          description="The token is wired into how the protocol is governed, secured and priced."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TOKEN_UTILITY.map((u, i) => {
            const Icon = u.icon;
            return (
              <Reveal key={u.title} index={i} className="h-full">
                <div className="h-full rounded-2xl border border-line bg-surface/60 p-6">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-line bg-base text-cyan">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">
                    {u.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {u.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Tokenomics donut */}
      <section className="shell py-20 sm:py-28">
        <SectionHeading
          eyebrow="Distribution"
          title="Tokenomics"
          description="Supply is weighted toward the community and ecosystem, with multi-year vesting for contributors and investors."
        />
        <Reveal delay={0.1}>
          <div className="mt-12 rounded-2xl border border-line bg-surface/40 p-8 sm:p-12">
            <DonutChart />
          </div>
        </Reveal>
      </section>

      {/* Emission curve */}
      <section className="shell py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            eyebrow="Emission & vesting"
            title="A predictable supply schedule"
            description="Circulating supply unlocks over 48 months. The curve below is illustrative demo data, not a commitment."
          />
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line bg-surface/40 p-6">
              <AreaChart />
            </div>
          </Reveal>
        </div>
        <Reveal>
          <p className="mt-6 max-w-2xl font-mono text-xs leading-relaxed text-muted">
            Token details are illustrative and subject to change. Nothing here is
            an offer to sell or a solicitation to buy any token.
          </p>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
