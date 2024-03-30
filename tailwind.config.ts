import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orangeColor: "#DA722C",
        darkBlue: "#023047",
        blueColor: "#6F7DFB",
        darkBlueColor: "#26308C",
      },
    },
  },
  plugins: [],
};
export default config;
