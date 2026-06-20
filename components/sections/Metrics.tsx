import { METRICS } from "@/lib/data";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

export function Metrics() {
  return (
    <section className="shell py-20 sm:py-28">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
        {METRICS.map((m, i) => (
          <Reveal
            key={m.label}
            index={i}
            className="bg-surface/60 p-6 sm:p-8"
          >
            <p className="font-mono text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              <Counter
                value={m.value}
                prefix={m.prefix}
                suffix={m.suffix}
                fractionDigits={m.fractionDigits}
              />
            </p>
            <p className="mt-3 text-sm font-medium text-ink">{m.label}</p>
            <p className="mt-1 text-xs text-muted">{m.hint}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
