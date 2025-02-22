import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        jaySky: "#C3EBFA",
        jaySkyLight: "#EDF9FD",
        jayPurple: "#CFCEFF",
        jayPurpleLight: "#F1F8FF",
        jayYellow: "#FAE27C",
        jayYellowLight: "#FEFCE8",
      },
    },
  },
  plugins: [],
} satisfies Config;
