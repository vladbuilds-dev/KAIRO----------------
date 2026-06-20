import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/data";
import { Logo } from "./Logo";

const RESOURCES = [
  { label: "Documentation", href: "/docs" },
  { label: "Whitepaper", href: "/docs" },
  { label: "Audits", href: "/docs" },
  { label: "Brand kit", href: "/docs" },
];

const LEGAL = [
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Disclosures", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-line">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm text-muted">
            Autonomous agents that deploy, rebalance and compound capital across
            DeFi — non-custodial, audited, always on.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line px-3.5 py-1.5 font-mono text-xs text-muted transition-colors hover:border-cyan/40 hover:text-ink"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Product" links={NAV_LINKS} />
        <FooterCol title="Resources" links={RESOURCES} />
        <FooterCol title="Legal" links={LEGAL} />
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col gap-4 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} KAIRO Labs. All rights reserved.</p>
          <p className="max-w-xl leading-relaxed">
            DeFi involves risk, including the possible loss of principal. Yields
            are variable and not guaranteed. Nothing here is financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-sm text-ink/80 transition-colors hover:text-cyan"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
