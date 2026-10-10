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
        background: "#050505",
        "background-subtle": "#0B0B0D",
        "background-card": "#0F0F12",
        "aceup-blue": {
          DEFAULT: "#005CFF",
          light: "#00A8FF",
          dark: "#003EB0",
          glow: "rgba(0, 92, 255, 0.4)",
        },
        chrome: {
          light: "#F4F6F8",
          DEFAULT: "#D9DDE3",
          dark: "#A7ADB7",
          muted: "#717680",
        },
        text: {
          primary: "#F5F5F5",
          secondary: "#9C9CA3",
          muted: "#66666E",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        widest: "0.2em",
        mega: "0.3em",
      },
    },
  },
  plugins: [],
};

export default config;
