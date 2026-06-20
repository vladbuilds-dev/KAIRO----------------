import { SECURITY } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Security() {
  return (
    <section className="shell py-20 sm:py-28">
      <SectionHeading
        eyebrow="Security"
        title="Verify, don't trust"
        description="The protocol is built so you never hand over custody and never take a claim on faith."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {SECURITY.map((p, i) => {
          const Icon = p.icon;
          return (
            <Reveal key={p.title} index={i} className="h-full">
              <div className="relative h-full overflow-hidden rounded-2xl border border-line bg-surface/60 p-7">
                <div
                  aria-hidden
                  className="absolute -right-10 -top-10 size-32 rounded-full bg-iris-soft blur-2xl"
                />
                <span className="relative flex size-12 items-center justify-center rounded-xl border border-line bg-base text-cyan">
                  <Icon className="size-5" />
                </span>
                <h3 className="relative mt-5 font-display text-lg font-semibold">
                  {p.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
