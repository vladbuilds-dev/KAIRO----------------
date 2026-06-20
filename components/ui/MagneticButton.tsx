"use client";

import Link from "next/link";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost";

interface BaseProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
}

const styles: Record<Variant, string> = {
  primary:
    "bg-iris text-base shadow-glow hover:shadow-[0_0_0_1px_rgba(34,211,238,0.5),0_18px_50px_-12px_rgba(34,211,238,0.55)]",
  ghost:
    "border border-line bg-surface/60 text-ink backdrop-blur-xl hover:border-cyan/40 hover:bg-surface-raised/70",
};

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-premium will-change-transform";

/** Shared magnetic pull on pointer move (disabled under reduced motion). */
function useMagnetic(disabled: boolean) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: MouseEvent) => {
    if (disabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  return { ref, onMove, onLeave };
}

interface ButtonProps extends BaseProps {
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function MagneticButton({
  children,
  className,
  variant = "primary",
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const reduce = useReducedMotion();
  const { ref, onMove, onLeave } = useMagnetic(!!reduce || !!disabled);

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      disabled={disabled}
      className={cn(base, styles[variant], disabled && "opacity-60", className)}
    >
      {children}
    </button>
  );
}

interface LinkButtonProps extends BaseProps {
  href: string;
  external?: boolean;
}

export function MagneticLink({
  children,
  className,
  variant = "primary",
  href,
  external,
}: LinkButtonProps) {
  const reduce = useReducedMotion();
  const { ref, onMove, onLeave } = useMagnetic(!!reduce);

  const props = external ? { target: "_blank", rel: "noreferrer" } : {};

  return (
    <Link
      href={href}
      ref={ref as React.RefObject<HTMLAnchorElement>}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(base, styles[variant], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
