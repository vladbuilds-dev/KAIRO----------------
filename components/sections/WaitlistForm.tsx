"use client";

import { useState, type FormEvent } from "react";
import { Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Waitlist capture with inline validation, loading + success states. */
export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setStatus("loading");
    // Simulate request
    await new Promise((r) => setTimeout(r, 1100));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="flex items-center justify-center gap-3 rounded-full border border-cyan/30 bg-iris-soft px-6 py-3.5">
        <span className="flex size-6 items-center justify-center rounded-full bg-iris text-base">
          <Check className="size-4" />
        </span>
        <p className="text-sm text-ink">
          You&apos;re on the list. We&apos;ll be in touch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="w-full max-w-md">
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="waitlist-email" className="sr-only">
            Email address
          </label>
          <input
            id="waitlist-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder="you@protocol.xyz"
            aria-invalid={status === "error"}
            aria-describedby={error ? "waitlist-error" : undefined}
            className={cn(
              "h-12 w-full rounded-full border bg-surface/70 px-5 font-mono text-sm text-ink placeholder:text-muted/70 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan",
              status === "error" ? "border-red-400/60" : "border-line",
            )}
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-iris px-6 text-sm font-semibold text-base shadow-glow transition-opacity disabled:opacity-70"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Joining
            </>
          ) : (
            "Join waitlist"
          )}
        </button>
      </div>
      {error && (
        <p id="waitlist-error" className="mt-2 px-2 text-xs text-red-400">
          {error}
        </p>
      )}
    </form>
  );
}
