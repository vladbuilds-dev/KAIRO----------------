import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LIFECYCLE } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function HowItWorksTeaser() {
  const steps = LIFECYCLE.slice(0, 3);

  return (
    <section className="shell py-20 sm:py-28">
      <SectionHeading
        eyebrow="How it works"
        title="You set the mandate. The agent does the rest."
        description="Three moves turn a deposit into a self-managing position. See the full lifecycle on the product page."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <Reveal key={step.id} index={i}>
              <div className="group relative h-full rounded-2xl border border-line bg-surface/60 p-6 transition-colors duration-300 hover:border-cyan/30">
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-line bg-base text-cyan transition-colors group-hover:border-cyan/40">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-mono text-sm text-muted">
                    {step.index}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <Link
          href="/product"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan transition-colors hover:text-ink"
        >
          See the full agent lifecycle
          <ArrowRight className="size-4" />
        </Link>
      </Reveal>
    </section>
  );
}
