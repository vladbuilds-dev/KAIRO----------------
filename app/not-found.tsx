import Link from "next/link";
import { MagneticLink } from "@/components/ui/MagneticButton";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="font-mono text-sm uppercase tracking-[0.22em] text-cyan">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        This agent went off-route.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The page you&apos;re looking for doesn&apos;t exist — or hasn&apos;t been
        deployed yet.
      </p>
      <div className="mt-8 flex gap-3">
        <MagneticLink href="/" variant="primary">
          Back home
        </MagneticLink>
        <Link
          href="/docs"
          className="inline-flex items-center rounded-full border border-line px-6 py-3 text-sm text-ink transition-colors hover:border-cyan/40"
        >
          Read docs
        </Link>
      </div>
    </section>
  );
}
