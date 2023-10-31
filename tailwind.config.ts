import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
      },
      keyframes: {
        title_spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        title_spin: "title_spin 25s linear infinite",
      },
    },
    colors: {
      main: "#49005E",
      dark_purple_01: "#370047",
      secondary: "#B51DAF",
      secondary_dark_01: "#82157E",
      white: "#ffffff",
      light_gray: "#f4f4f4",
      red: "#ff0000",
    },
    fontFamily: {
      sans: ["Montserrat Alternates", "sans-serif"],
      body: ['"Open Sans"', "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
