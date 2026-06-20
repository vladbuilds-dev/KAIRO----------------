"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ALLOCATIONS } from "@/lib/data";

const SIZE = 260;
const STROKE = 34;
const R = (SIZE - STROKE) / 2;
const C = 2 * Math.PI * R;

/** Animated tokenomics donut with an interactive legend. */
export function DonutChart() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);

  let offsetAcc = 0;

  return (
    <div className="grid items-center gap-10 sm:grid-cols-[auto_1fr]">
      <div className="relative mx-auto">
        <svg
          ref={ref}
          width={SIZE}
          height={SIZE}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="-rotate-90"
        >
          {ALLOCATIONS.map((a, i) => {
            const len = (a.percent / 100) * C;
            const dash = `${len} ${C - len}`;
            const offset = -offsetAcc;
            offsetAcc += len;
            const dim = active !== null && active !== i;
            return (
              <motion.circle
                key={a.label}
                cx={SIZE / 2}
                cy={SIZE / 2}
                r={R}
                fill="none"
                stroke={a.color}
                strokeWidth={active === i ? STROKE + 6 : STROKE}
                strokeDasharray={dash}
                strokeDashoffset={offset}
                initial={{ opacity: 0 }}
                animate={
                  inView
                    ? { opacity: dim ? 0.25 : 1 }
                    : { opacity: 0 }
                }
                transition={{
                  duration: reduce ? 0.2 : 0.8,
                  delay: reduce ? 0 : i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                style={{ cursor: "pointer" }}
              />
            );
          })}
        </svg>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-mono text-3xl font-medium">
            {active !== null ? `${ALLOCATIONS[active].percent}%` : "1B"}
          </span>
          <span className="mt-1 max-w-[8rem] text-center text-xs text-muted">
            {active !== null ? ALLOCATIONS[active].label : "Total supply"}
          </span>
        </div>
      </div>

      <ul className="space-y-2.5">
        {ALLOCATIONS.map((a, i) => (
          <li
            key={a.label}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className="flex items-center justify-between gap-4 rounded-lg px-3 py-2 transition-colors hover:bg-surface/60"
          >
            <span className="flex items-center gap-3">
              <span
                className="size-3 rounded-sm"
                style={{ backgroundColor: a.color }}
              />
              <span className="text-sm text-ink">{a.label}</span>
            </span>
            <span className="font-mono text-sm text-muted">{a.percent}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
