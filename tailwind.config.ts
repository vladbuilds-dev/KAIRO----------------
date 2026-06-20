import type { Config } from "tailwindcss";

/**
 * KAIRO design tokens.
 * Palette and type roles are pinned by the brand brief — disciplined dark
 * surfaces, a single iridescent indigo→cyan accent, and three type roles
 * (display / body / mono).
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Space-dark backgrounds and surfaces
        base: "#0A0B0F",
        surface: {
          DEFAULT: "#12131A",
          raised: "#1A1B24",
        },
        line: "rgba(237, 239, 247, 0.08)",
        // Text
        ink: "#EDEFF7",
        muted: "#8A8FA3",
        // Signature accent
        indigo: "#6366F1",
        cyan: "#22D3EE",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        shell: "1280px",
      },
      borderRadius: {
        xl: "16px",
        "2xl": "20px",
      },
      backgroundImage: {
        iris: "linear-gradient(110deg, #6366F1 0%, #22D3EE 100%)",
        "iris-soft":
          "linear-gradient(110deg, rgba(99,102,241,0.16) 0%, rgba(34,211,238,0.16) 100%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(99,102,241,0.25), 0 12px 40px -12px rgba(99,102,241,0.45)",
        "glow-cyan": "0 0 40px -8px rgba(34,211,238,0.5)",
      },
      keyframes: {
        "marquee-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        breathe: {
          "0%, 100%": { transform: "translate(0,0) scale(1)", opacity: "0.55" },
          "50%": { transform: "translate(4%, -3%) scale(1.08)", opacity: "0.8" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        marquee: "marquee-x 38s linear infinite",
        breathe: "breathe 16s ease-in-out infinite",
        "spin-slow": "spin-slow 22s linear infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
