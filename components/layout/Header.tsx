"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { MagneticLink } from "@/components/ui/MagneticButton";
import { ConnectWallet } from "@/components/wallet/ConnectWallet";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-premium",
        scrolled
          ? "border-b border-line bg-base/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="shell flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors duration-300",
                  active ? "text-ink" : "text-muted hover:text-ink",
                )}
              >
                {active && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-surface-raised/70" />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ConnectWallet />
          <MagneticLink href="/docs" variant="primary" className="px-5 py-2.5">
            Launch App
          </MagneticLink>
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="rounded-full border border-line p-2 text-ink md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile sheet */}
      {menuOpen && (
        <div className="border-t border-line bg-base/95 backdrop-blur-xl md:hidden">
          <nav className="shell flex flex-col gap-1 py-4" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-xl px-4 py-3 text-base transition-colors",
                  pathname === link.href
                    ? "bg-surface-raised text-ink"
                    : "text-muted hover:bg-surface hover:text-ink",
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-3">
              <ConnectWallet className="justify-center" />
              <MagneticLink href="/docs" className="w-full">
                Launch App
              </MagneticLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
