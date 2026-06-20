import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { DOC_CARDS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Docs & Resources",
  description:
    "Documentation, whitepaper, audits, GitHub, brand kit and the blog — everything to build on or evaluate KAIRO.",
};

export default function DocsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Docs · Resources"
        title="Everything you need to build or verify."
        description="Read the design, audit the code, grab the assets. The whole protocol is open to inspect."
      />

      <section className="shell py-20 sm:py-28">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DOC_CARDS.map((card, i) => {
            const external = card.href.startsWith("http");
            return (
              <Reveal key={card.title} index={i} className="h-full">
                <Link
                  href={card.href}
                  {...(external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  className="block h-full"
                >
                  <GlassCard className="flex h-full flex-col p-7">
                    <div className="flex items-start justify-between">
                      <h2 className="font-display text-xl font-semibold">
                        {card.title}
                      </h2>
                      <ArrowUpRight className="size-5 text-muted transition-colors group-hover:text-cyan" />
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {card.body}
                    </p>
                    <span className="mt-6 font-mono text-xs uppercase tracking-wide text-cyan">
                      {card.cta}
                    </span>
                  </GlassCard>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaBand variant="waitlist" />
    </>
  );
}
