import { AUDITORS, BACKERS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function TrustBar() {
  return (
    <section className="border-y border-line bg-surface/30">
      <div className="shell grid gap-8 py-10 md:grid-cols-2">
        <TrustGroup label="Audited by" names={AUDITORS} />
        <TrustGroup label="Backed by" names={BACKERS} />
      </div>
    </section>
  );
}

function TrustGroup({ label, names }: { label: string; names: string[] }) {
  return (
    <Reveal className="flex flex-col gap-4 md:flex-row md:items-center">
      <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted md:w-28">
        {label}
      </span>
      <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
        {names.map((n) => (
          <span
            key={n}
            className="font-display text-sm font-medium text-ink/70 transition-colors hover:text-ink"
          >
            {n}
          </span>
        ))}
      </div>
    </Reveal>
  );
}
