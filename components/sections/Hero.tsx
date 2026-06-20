"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { MagneticLink } from "@/components/ui/MagneticButton";

// WebGL scene is heavy + browser-only — load it lazily, client-side only.
const AgentNetwork = dynamic(() => import("@/components/three/AgentNetwork"), {
  ssr: false,
  loading: () => null,
});

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative isolate overflow-hidden">
      {/* Breathing gradient-mesh backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-12%] size-[42rem] -translate-x-1/2 rounded-full bg-indigo/20 blur-[140px] animate-breathe" />
        <div className="absolute right-[8%] top-[28%] size-[30rem] rounded-full bg-cyan/15 blur-[130px] animate-breathe [animation-delay:-6s]" />
      </div>

      {/* Interactive 3D agent network */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]"
      >
        <AgentNetwork reduced={!!reduce} />
      </div>

      <div className="shell flex min-h-[92vh] flex-col justify-center pb-20 pt-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.span
            variants={item}
            className="eyebrow rounded-full border border-line bg-surface/50 px-3.5 py-1.5 backdrop-blur"
          >
            <span className="size-1.5 animate-pulse rounded-full bg-cyan" />
            Agentic DeFi protocol · Live on 9 networks
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-[2.75rem] font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Capital that
            <br />
            never sleeps.
            <br />
            <span className="text-iris">DeFi that thinks.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            KAIRO deploys autonomous agents that allocate, rebalance and
            compound your capital across DeFi — continuously, on-chain, and fully
            non-custodial.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <MagneticLink href="/docs" variant="primary">
              Launch App
              <ArrowUpRight className="size-4" />
            </MagneticLink>
            <MagneticLink href="/docs" variant="ghost">
              <BookOpen className="size-4" />
              Read Docs
            </MagneticLink>
          </motion.div>
        </motion.div>
      </div>

      {/* Soft fade into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-base" />
    </section>
  );
}
