"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger index — multiplies the base delay for grouped elements. */
  index?: number;
  delay?: number;
  as?: "div" | "section" | "li" | "span";
}

/**
 * Scroll-driven reveal: fade + 24px translateY with a premium ease.
 * Collapses to a plain fade (no transform) when reduced motion is requested.
 */
export function Reveal({
  children,
  className,
  index = 0,
  delay = 0,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0.3 : 0.7,
        delay: delay + index * 0.09,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}
