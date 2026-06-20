"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { LIFECYCLE } from "@/lib/data";

/**
 * The agent lifecycle as a scroll-drawn schematic. A connector line draws in
 * as you scroll; a capital particle travels along it; step cards reveal in turn.
 */
export function LifecycleDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });

  // Line draws 0→1; capital dot rides the line.
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const dotY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative mt-14">
      {/* Connector rail (vertical) */}
      <div className="pointer-events-none absolute bottom-0 left-[26px] top-0 w-px md:left-1/2 md:-translate-x-1/2">
        <div className="absolute inset-0 bg-line" />
        <svg className="absolute inset-0 h-full w-px" preserveAspectRatio="none">
          <motion.line
            x1="0.5"
            y1="0"
            x2="0.5"
            y2="100%"
            stroke="url(#railGrad)"
            strokeWidth="1.5"
            style={{ pathLength: reduce ? 1 : pathLength }}
          />
          <defs>
            <linearGradient id="railGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#6366F1" />
              <stop offset="1" stopColor="#22D3EE" />
            </linearGradient>
          </defs>
        </svg>
        {/* Travelling capital particle */}
        {!reduce && (
          <motion.span
            style={{ top: dotY }}
            className="absolute left-1/2 size-3 -translate-x-1/2 rounded-full bg-cyan shadow-glow-cyan"
          />
        )}
      </div>

      <ol className="space-y-6 md:space-y-0">
        {LIFECYCLE.map((step, i) => {
          const Icon = step.icon;
          const left = i % 2 === 0;
          return (
            <li
              key={step.id}
              className="relative pl-16 md:grid md:grid-cols-2 md:gap-12 md:pl-0 md:py-6"
            >
              {/* Node marker */}
              <span className="absolute left-[14px] top-1 flex size-7 items-center justify-center rounded-full border border-cyan/40 bg-base md:left-1/2 md:-translate-x-1/2">
                <span className="size-2 rounded-full bg-iris" />
              </span>

              <motion.div
                initial={{ opacity: 0, y: reduce ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={
                  left
                    ? "md:col-start-1 md:pr-4 md:text-right"
                    : "md:col-start-2 md:row-start-auto md:pl-4"
                }
              >
                <div className="inline-block w-full rounded-2xl border border-line bg-surface/60 p-6">
                  <div
                    className={`flex items-center gap-3 ${left ? "md:flex-row-reverse" : ""}`}
                  >
                    <span className="flex size-10 items-center justify-center rounded-xl border border-line bg-base text-cyan">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-mono text-sm text-muted">
                      {step.index}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
