import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
}

/** Consistent hero band for inner pages. */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
      >
        <div className="absolute left-1/3 top-[-40%] size-[34rem] rounded-full bg-indigo/15 blur-[130px] animate-breathe" />
      </div>
      <div className="shell pb-16 pt-36 sm:pt-40">
        <Reveal>
          <span className="eyebrow">
            <span className="size-1.5 rounded-full bg-cyan" />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
