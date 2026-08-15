import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#05070B",
        "bg-elevated": "#111824",
        text: "#F4F7FB",
        "text-muted": "#5C6B80",
        "text-secondary": "#9AA7B8",
        blue: "#70A7FF",
        cyan: "#52E5E7",
        violet: "#8B7CFF",
        green: "#5EE6A8",
        amber: "#F0B429",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(rgba(112,167,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(112,167,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          from: { boxShadow: "0 0 10px rgba(112,167,255,0.2)" },
          to: { boxShadow: "0 0 30px rgba(112,167,255,0.6)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
