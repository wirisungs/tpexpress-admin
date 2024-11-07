import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        normalText: "#1C1C1C",
        primaryText300 : "#EB455F",
        navbarText: "#696969",
        navbarActiveBG: "#F9FAFF",
        background: "var(--background)",
        foreground: "var(--foreground)",
        headBackground: "#FCFCFC",
        subtitleText: "#5B5958",
        yellowText: "#FBA333",
        error: "#F61317",
        success: "#0DA651",
        boxOuline: "#CBCBCB",
        backButton: "#B8DDFF"
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
