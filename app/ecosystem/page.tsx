import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticLink } from "@/components/ui/MagneticButton";
import { CtaBand } from "@/components/sections/CtaBand";
import { NETWORKS, INTEGRATIONS, BACKERS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Ecosystem",
  description:
    "The networks and protocols KAIRO agents execute across, plus partners and the grants program.",
};

export default function EcosystemPage() {
  return (
    <>
      <PageHeader
        eyebrow="Ecosystem · Integrations"
        title={
          <>
            Wired into the venues
            <br />
            where yield lives.
          </>
        }
        description="Agents route across nine networks and the protocols that define on-chain yield — and the surface keeps growing."
      />

      {/* Networks */}
      <section className="shell py-20 sm:py-28">
        <SectionHeading
          eyebrow="Networks"
          title="Nine chains, one mandate"
          description="Capital moves to wherever the risk-adjusted opportunity is best — automatically, when fees clear."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {NETWORKS.map((n, i) => (
            <Reveal key={n} index={i}>
              <GlassCard className="flex items-center gap-3 p-5">
                <span className="flex size-10 items-center justify-center rounded-lg bg-iris-soft">
                  <span className="size-2.5 rounded-full bg-iris" />
                </span>
                <span className="font-display font-medium">{n}</span>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Protocol integrations */}
      <section className="shell py-20 sm:py-28">
        <SectionHeading
          eyebrow="Integrations"
          title="Protocols agents speak natively"
          description="Lending, liquidity, staking, perps and bridging — composed into strategies you can deploy in one click."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INTEGRATIONS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.name} index={i} className="h-full">
                <GlassCard className="flex h-full items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <span className="flex size-11 items-center justify-center rounded-xl border border-line bg-base text-cyan">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="font-display font-medium">{p.name}</p>
                      <p className="text-xs text-muted">{p.category}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="size-4 text-muted transition-colors group-hover:text-cyan" />
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Partners */}
      <section className="shell py-20 sm:py-28">
        <SectionHeading
          eyebrow="Partners"
          title="Backed for the long run"
          description="KAIRO is supported by funds and operators who build crypto infrastructure."
        />
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-3">
            {BACKERS.map((b) => (
              <span
                key={b}
                className="rounded-full border border-line bg-surface/60 px-5 py-2.5 font-display text-sm font-medium text-ink/80"
              >
                {b}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Grants */}
      <section className="shell py-20 sm:py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-line bg-surface/60 p-10 sm:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-iris-soft blur-3xl"
            />
            <div className="relative grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
              <div>
                <span className="eyebrow">
                  <span className="size-1.5 rounded-full bg-cyan" />
                  Grants program
                </span>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  Build a strategy. We&apos;ll fund it.
                </h2>
                <p className="mt-4 max-w-xl text-muted">
                  A $5M program for teams authoring novel agent strategies,
                  tooling and integrations on the open SDK. Rolling applications,
                  milestone-based funding.
                </p>
              </div>
              <div className="flex lg:justify-end">
                <MagneticLink href="/docs" variant="primary">
                  Apply for a grant
                  <ArrowUpRight className="size-4" />
                </MagneticLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
