"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface WalletState {
  connected: boolean;
  address: string | null;
  connecting: boolean;
  connect: (provider: string) => Promise<void>;
  disconnect: () => void;
}

const WalletContext = createContext<WalletState | null>(null);

const DEMO_ADDRESS = "0xA1c4…b9F2";

/** UI-only wallet mock — no chain logic, just realistic connect states. */
export function WalletProvider({ children }: { children: ReactNode }) {
  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [address, setAddress] = useState<string | null>(null);

  const connect = useCallback(async (_provider: string) => {
    setConnecting(true);
    // Simulate handshake latency
    await new Promise((r) => setTimeout(r, 1100));
    setAddress(DEMO_ADDRESS);
    setConnected(true);
    setConnecting(false);
  }, []);

  const disconnect = useCallback(() => {
    setConnected(false);
    setAddress(null);
  }, []);

  const value = useMemo(
    () => ({ connected, address, connecting, connect, disconnect }),
    [connected, address, connecting, connect, disconnect],
  );

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
}

export function useWallet() {
  const ctx = useContext(WalletContext);
  if (!ctx) throw new Error("useWallet must be used within WalletProvider");
  return ctx;
}
