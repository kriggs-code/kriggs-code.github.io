import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        igniteNavy: "#081226",
        igniteMidnight: "#0F172A",
        igniteBlue: "#2563EB",
        igniteGold: "#F4D35E",
        igniteCream: "#F8F5F0",
        ignitePurple: "#6D5BD0",
      },
      boxShadow: {
        glow: "0 0 80px rgba(244, 211, 94, 0.16)",
        blueglow: "0 0 100px rgba(37, 99, 235, 0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
