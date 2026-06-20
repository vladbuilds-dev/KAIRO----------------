"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  /** Enable pointer tilt + border-glow follow. */
  interactive?: boolean;
}

/**
 * Glassmorphism surface with a subtle 3D tilt and a glow that tracks the
 * cursor along the border. Falls back to a static surface under reduced motion.
 */
export function GlassCard({
  children,
  className,
  interactive = true,
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const enabled = interactive && !reduce;

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!enabled || !ref.current) return;
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * 5}deg) rotateY(${(px - 0.5) * 6}deg)`;
  };

  const onLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-line bg-surface/70 backdrop-blur-xl transition-transform duration-300 ease-premium",
        className,
      )}
      style={
        {
          "--mx": "50%",
          "--my": "0%",
        } as React.CSSProperties
      }
    >
      {/* Cursor-tracking glow */}
      {enabled && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(360px circle at var(--mx) var(--my), rgba(34,211,238,0.12), transparent 45%)",
          }}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}
