import Link from "next/link";
import { cn } from "@/lib/utils";

/** KAIRO wordmark with a small agent-node glyph. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 font-display text-lg font-semibold tracking-[0.18em]",
        className,
      )}
      aria-label="KAIRO home"
    >
      <svg
        viewBox="0 0 24 24"
        className="size-6 text-cyan transition-transform duration-500 group-hover:rotate-90"
        fill="none"
        aria-hidden
      >
        <circle cx="12" cy="12" r="2.4" fill="currentColor" />
        <circle cx="4" cy="6" r="1.4" fill="#6366F1" />
        <circle cx="20" cy="7" r="1.4" fill="#6366F1" />
        <circle cx="6" cy="19" r="1.4" fill="#6366F1" />
        <circle cx="19" cy="18" r="1.4" fill="#6366F1" />
        <path
          d="M12 12 4 6M12 12l8-5M12 12l-6 7M12 12l7 6"
          stroke="currentColor"
          strokeOpacity="0.5"
          strokeWidth="0.8"
        />
      </svg>
      <span>
        KA<span className="text-iris">I</span>RO
      </span>
    </Link>
  );
}
