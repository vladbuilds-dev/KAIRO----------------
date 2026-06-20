import { NETWORKS } from "@/lib/data";

/** Infinite logo/name marquee of supported networks. */
export function EcosystemMarquee() {
  const row = [...NETWORKS, ...NETWORKS];

  return (
    <section className="py-12">
      <p className="shell mb-6 text-center font-mono text-xs uppercase tracking-[0.18em] text-muted">
        Executing across the networks that matter
      </p>
      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
          {row.map((n, i) => (
            <span
              key={`${n}-${i}`}
              className="flex items-center gap-2.5 rounded-full border border-line bg-surface/50 px-5 py-2.5"
            >
              <span className="size-2 rounded-full bg-iris" />
              <span className="font-display text-sm font-medium text-ink/80">
                {n}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
