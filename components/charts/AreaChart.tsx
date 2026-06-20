"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { EMISSION_CURVE } from "@/lib/data";

const W = 720;
const H = 280;
const PAD = { top: 20, right: 20, bottom: 32, left: 44 };

/** Animated emission/vesting curve — cumulative circulating supply by quarter. */
export function AreaChart() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  const max = 1000;
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;

  const points = EMISSION_CURVE.map((d, i) => {
    const x = PAD.left + (i / (EMISSION_CURVE.length - 1)) * innerW;
    const y = PAD.top + innerH - (d.supply / max) * innerH;
    return { x, y, ...d };
  });

  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
    .join(" ");
  const areaPath = `${linePath} L${points[points.length - 1].x} ${PAD.top + innerH} L${points[0].x} ${PAD.top + innerH} Z`;

  const gridY = [0, 250, 500, 750, 1000];

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${W} ${H}`}
      className="h-auto w-full font-mono"
      role="img"
      aria-label="Cumulative circulating supply rising from 125M to 1B over 12 quarters."
    >
      <defs>
        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#22D3EE" stopOpacity="0.28" />
          <stop offset="1" stopColor="#22D3EE" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
      </defs>

      {/* Grid + Y labels */}
      {gridY.map((g) => {
        const y = PAD.top + innerH - (g / max) * innerH;
        return (
          <g key={g}>
            <line
              x1={PAD.left}
              x2={W - PAD.right}
              y1={y}
              y2={y}
              stroke="rgba(237,239,247,0.07)"
            />
            <text x={PAD.left - 8} y={y + 4} textAnchor="end" fontSize="10" fill="#8A8FA3">
              {g === 1000 ? "1B" : `${g}M`}
            </text>
          </g>
        );
      })}

      {/* X labels (every other quarter) */}
      {points.map((p, i) =>
        i % 2 === 0 ? (
          <text key={p.quarter} x={p.x} y={H - 10} textAnchor="middle" fontSize="10" fill="#8A8FA3">
            {p.quarter}
          </text>
        ) : null,
      )}

      {/* Area */}
      <motion.path
        d={areaPath}
        fill="url(#areaFill)"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: reduce ? 0 : 0.4 }}
      />
      {/* Line draws in */}
      <motion.path
        d={linePath}
        fill="none"
        stroke="url(#lineStroke)"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={inView ? { pathLength: 1 } : { pathLength: reduce ? 1 : 0 }}
        transition={{ duration: reduce ? 0.2 : 1.4, ease: "easeInOut" }}
      />
      {/* End marker */}
      <motion.circle
        cx={points[points.length - 1].x}
        cy={points[points.length - 1].y}
        r="4"
        fill="#22D3EE"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: reduce ? 0 : 1.4 }}
      />
    </svg>
  );
}
