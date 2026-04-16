import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        gold: "hsl(var(--gold))",
        purple: "hsl(var(--purple))",
        sf: {
          blue: "#0176D3",
          violet: "#730394",
          teal: "#04E1CB",
          yellow: "#FFB81C",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "mesh-gradient":
          "radial-gradient(ellipse 90% 70% at 10% 10%, rgba(1,118,211,0.35), transparent 55%), radial-gradient(ellipse 80% 60% at 90% 90%, rgba(115,3,148,0.32), transparent 50%), radial-gradient(ellipse 60% 50% at 50% 50%, rgba(1,118,211,0.08), transparent 70%)",
        "accent-gradient": "linear-gradient(135deg, #0176D3 0%, #730394 100%)",
        "card-border-gradient": "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.04) 45%, transparent 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "mesh-drift-a": {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)", opacity: "0.5" },
          "50%": { transform: "translate(6%, 8%) scale(1.12)", opacity: "0.72" },
        },
        "mesh-drift-b": {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)", opacity: "0.45" },
          "50%": { transform: "translate(-8%, -6%) scale(1.08)", opacity: "0.65" },
        },
        "mesh-drift-c": {
          "0%, 100%": { transform: "translate(-4%, 6%) scale(1.05)", opacity: "0.35" },
          "50%": { transform: "translate(5%, -5%) scale(1.1)", opacity: "0.55" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out forwards",
        "mesh-a": "mesh-drift-a 22s ease-in-out infinite",
        "mesh-b": "mesh-drift-b 28s ease-in-out infinite",
        "mesh-c": "mesh-drift-c 19s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(1,118,211,0.45), 0 0 40px -18px rgba(115,3,148,0.35)",
        "glow-teal": "0 0 32px -8px rgba(4,225,203,0.45)",
        "glow-yellow": "0 0 36px -10px rgba(255,184,28,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
