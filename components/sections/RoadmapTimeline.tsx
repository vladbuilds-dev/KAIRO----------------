"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { ROADMAP, type RoadmapItem } from "@/lib/data";
import { cn } from "@/lib/utils";

const statusMeta: Record<
  RoadmapItem["status"],
  { label: string; chip: string; dot: string }
> = {
  shipped: {
    label: "Shipped",
    chip: "text-emerald-300/90 border-emerald-300/20 bg-emerald-300/5",
    dot: "bg-emerald-300",
  },
  active: {
    label: "In progress",
    chip: "text-cyan border-cyan/30 bg-cyan/5",
    dot: "bg-cyan animate-pulse",
  },
  planned: {
    label: "Planned",
    chip: "text-muted border-line bg-surface",
    dot: "bg-muted/50",
  },
};

/** Vertical roadmap with a connector line that draws as you scroll. */
export function RoadmapTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.6"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative mt-14">
      {/* Rail */}
      <div className="absolute bottom-0 left-[18px] top-2 w-px bg-line md:left-1/2 md:-translate-x-1/2">
        <motion.div
          className="absolute inset-x-0 top-0 h-full origin-top bg-iris"
          style={{ scaleY: reduce ? 1 : scaleY }}
        />
      </div>

      <ol className="space-y-10">
        {ROADMAP.map((item, i) => {
          const meta = statusMeta[item.status];
          const left = i % 2 === 0;
          return (
            <li
              key={item.title}
              className="relative pl-12 md:grid md:grid-cols-2 md:gap-12 md:pl-0"
            >
              {/* Node */}
              <span className="absolute left-[11px] top-1.5 z-10 flex size-4 items-center justify-center rounded-full border border-base bg-base md:left-1/2 md:-translate-x-1/2">
                <span className={cn("size-3 rounded-full", meta.dot)} />
              </span>

              <motion.div
                initial={{ opacity: 0, y: reduce ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  left
                    ? "md:col-start-1 md:pr-10 md:text-right"
                    : "md:col-start-2 md:pl-10",
                )}
              >
                <div className="rounded-2xl border border-line bg-surface/60 p-6">
                  <div
                    className={cn(
                      "flex items-center gap-3",
                      left && "md:flex-row-reverse",
                    )}
                  >
                    <span className="font-mono text-sm text-muted">
                      {item.period}
                    </span>
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[0.68rem] uppercase tracking-wide",
                        meta.chip,
                      )}
                    >
                      {item.status === "shipped" && <Check className="size-3" />}
                      {meta.label}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.body}
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
