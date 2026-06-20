import { ArrowUpRight } from "lucide-react";
import { MagneticLink } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import { WaitlistForm } from "./WaitlistForm";

interface CtaBandProps {
  /** Show the waitlist email capture instead of the docs button. */
  variant?: "launch" | "waitlist";
}

export function CtaBand({ variant = "launch" }: CtaBandProps) {
  return (
    <section className="shell py-20 sm:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[28px] border border-line bg-surface/60 p-10 text-center sm:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-80"
          >
            <div className="absolute left-1/2 top-0 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo/20 blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 size-[20rem] rounded-full bg-cyan/15 blur-[110px]" />
          </div>

          <span className="eyebrow justify-center">
            <span className="size-1.5 rounded-full bg-cyan" />
            {variant === "waitlist" ? "Early access" : "Get started"}
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Put your capital on autopilot.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Deploy your first agent in minutes. Non-custodial, audited, and live
            across nine networks.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4">
            {variant === "waitlist" ? (
              <WaitlistForm />
            ) : (
              <div className="flex flex-col gap-3 sm:flex-row">
                <MagneticLink href="/docs" variant="primary">
                  Launch App
                  <ArrowUpRight className="size-4" />
                </MagneticLink>
                <MagneticLink href="/product" variant="ghost">
                  How it works
                </MagneticLink>
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
