import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        navy: {
          50: "#f0f4f8",
          900: "#0f1e2e",
          950: "#0a1520",
        },
      },
    },
  },
  plugins: [],
};

export default config;
