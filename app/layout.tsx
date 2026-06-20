import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/layout/Preloader";
import { PageTransition } from "@/components/layout/PageTransition";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { WalletProvider } from "@/components/wallet/WalletProvider";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://kairo.finance";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KAIRO — Capital that never sleeps",
    template: "%s · KAIRO",
  },
  description:
    "KAIRO deploys autonomous AI agents that allocate, rebalance and compound capital across DeFi — non-custodial, audited, multi-chain.",
  keywords: [
    "DeFi",
    "AI agents",
    "agentic DeFi",
    "yield",
    "non-custodial",
    "KAIRO",
  ],
  openGraph: {
    title: "KAIRO — Capital that never sleeps",
    description:
      "Autonomous agents that run DeFi strategies for you. Non-custodial, audited, multi-chain.",
    url: siteUrl,
    siteName: "KAIRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KAIRO — DeFi that thinks",
    description:
      "Autonomous agents that allocate, rebalance and compound capital across DeFi.",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KAIRO",
  url: siteUrl,
  description:
    "Agentic DeFi protocol. Autonomous AI agents that manage capital across networks.",
  sameAs: [
    "https://x.com",
    "https://github.com",
    "https://discord.com",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <WalletProvider>
          <Preloader />
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <MobileCTA />
        </WalletProvider>
      </body>
    </html>
  );
}
