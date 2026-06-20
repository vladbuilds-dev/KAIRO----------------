"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

/** Floating launch CTA, mobile only. */
export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 md:hidden">
      <Link
        href="/docs"
        className="flex w-full max-w-sm items-center justify-center gap-2 rounded-full bg-iris px-6 py-3.5 text-sm font-semibold text-base shadow-glow"
      >
        Launch App
        <ArrowUpRight className="size-4" />
      </Link>
    </div>
  );
}
