import { Check, Minus } from "lucide-react";
import { COMPARISON } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function ComparisonTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line">
      <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-surface-raised/60 text-sm font-medium">
        <div className="p-4 text-muted">&nbsp;</div>
        <div className="border-l border-line p-4 text-muted">Manual DeFi</div>
        <div className="border-l border-line p-4">
          <span className="text-iris">KAIRO agents</span>
        </div>
      </div>
      {COMPARISON.map((row, i) => (
        <Reveal
          as="div"
          key={row.feature}
          index={i}
          className="grid grid-cols-[1.2fr_1fr_1fr] border-t border-line text-sm"
        >
          <div className="p-4 font-medium text-ink">{row.feature}</div>
          <div className="flex items-start gap-2 border-l border-line p-4 text-muted">
            <Minus className="mt-0.5 size-4 shrink-0 text-muted/60" />
            <span>{row.manual}</span>
          </div>
          <div className="flex items-start gap-2 border-l border-line bg-iris-soft/30 p-4 text-ink">
            <Check className="mt-0.5 size-4 shrink-0 text-cyan" />
            <span>{row.kairo}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
