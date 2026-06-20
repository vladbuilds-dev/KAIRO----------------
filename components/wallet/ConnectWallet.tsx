"use client";

import { useState } from "react";
import { Check, Loader2, Wallet } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useWallet } from "./WalletProvider";
import { cn } from "@/lib/utils";

const PROVIDERS = ["MetaMask", "WalletConnect", "Coinbase Wallet", "Phantom"];

interface ConnectWalletProps {
  className?: string;
  compact?: boolean;
}

/** "Connect Wallet" trigger + provider-picker modal with success state. */
export function ConnectWallet({ className, compact }: ConnectWalletProps) {
  const [open, setOpen] = useState(false);
  const { connected, address, connecting, connect, disconnect } = useWallet();

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition-colors duration-300 hover:border-cyan/40 hover:bg-surface-raised/70",
          connected && "border-cyan/40 text-cyan",
          className,
        )}
      >
        <Wallet className="size-4" />
        {connected ? address : compact ? "Connect" : "Connect Wallet"}
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={connected ? "Wallet connected" : "Connect a wallet"}
      >
        {connected ? (
          <div className="space-y-5">
            <div className="flex items-center gap-3 rounded-xl border border-cyan/30 bg-iris-soft p-4">
              <span className="flex size-9 items-center justify-center rounded-full bg-iris text-base">
                <Check className="size-5" />
              </span>
              <div>
                <p className="font-mono text-sm text-ink">{address}</p>
                <p className="text-xs text-muted">Connected · Ethereum</p>
              </div>
            </div>
            <MagneticButton
              variant="ghost"
              className="w-full"
              onClick={() => {
                disconnect();
                setOpen(false);
              }}
            >
              Disconnect
            </MagneticButton>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="mb-3 text-sm text-muted">
              This is a demo. No real wallet is connected and no funds move.
            </p>
            {PROVIDERS.map((p) => (
              <button
                key={p}
                disabled={connecting}
                onClick={() => connect(p)}
                className="flex w-full items-center justify-between rounded-xl border border-line bg-surface px-4 py-3 text-sm transition-colors hover:border-cyan/40 hover:bg-surface-raised disabled:opacity-60"
              >
                <span>{p}</span>
                {connecting ? (
                  <Loader2 className="size-4 animate-spin text-cyan" />
                ) : (
                  <Wallet className="size-4 text-muted" />
                )}
              </button>
            ))}
          </div>
        )}
      </Modal>
    </>
  );
}
