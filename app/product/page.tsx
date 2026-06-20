import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LifecycleDiagram } from "@/components/sections/LifecycleDiagram";
import { ArchitectureDiagram } from "@/components/sections/ArchitectureDiagram";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { CodeSnippet } from "@/components/sections/CodeSnippet";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal } from "@/components/ui/Reveal";
import { SDK_SNIPPET } from "@/lib/data";

export const metadata: Metadata = {
  title: "Product",
  description:
    "How KAIRO agents work: the deploy → analyze → execute → rebalance → compound lifecycle, protocol architecture, and the builder SDK.",
};

export default function ProductPage() {
  return (
    <>
      <PageHeader
        eyebrow="Product · How it works"
        title={
          <>
            An agent that runs the
            <br />
            full strategy loop.
          </>
        }
        description="Every KAIRO agent follows the same disciplined lifecycle — provisioned to your vault, bounded by your mandate, executing on-chain around the clock."
      />

      {/* Lifecycle */}
      <section className="shell py-20 sm:py-28">
        <SectionHeading
          eyebrow="Agent lifecycle"
          title="Deploy → analyze → execute → rebalance → compound"
          description="The same five moves repeat continuously. Scroll to follow capital through the loop."
        />
        <LifecycleDiagram />
      </section>

      {/* Architecture */}
      <section className="shell py-20 sm:py-28">
        <SectionHeading
          eyebrow="Architecture"
          title="One runtime, many venues"
          description="Your vault stays non-custodial. The runtime's analyzer, router and risk engine decide where capital goes — and keep it inside your guardrails."
        />
        <div className="mt-12">
          <ArchitectureDiagram />
        </div>
      </section>

      {/* Comparison */}
      <section className="shell py-20 sm:py-28">
        <SectionHeading
          eyebrow="Why agents"
          title="The operational load, removed"
          description="Manual DeFi asks you to be the monitoring system, the router and the risk desk. KAIRO makes those jobs autonomous."
        />
        <div className="mt-12">
          <ComparisonTable />
        </div>
      </section>

      {/* For developers */}
      <section className="shell py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="For developers"
              title="Deploy an agent in a few lines"
              description="The TypeScript SDK turns a risk mandate into a running agent and streams its on-chain actions. Author your own strategies against the same primitives."
            />
            <Reveal delay={0.1}>
              <ul className="mt-6 space-y-3 text-sm text-muted">
                {[
                  "Typed SDK for agents, vaults and strategies",
                  "Webhook + stream APIs for every on-chain action",
                  "Open strategy interface — ship to the registry",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="size-1.5 rounded-full bg-cyan" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <CodeSnippet code={SDK_SNIPPET} />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
