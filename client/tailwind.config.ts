import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        myRed: "#FB6D64",
        myGreen: "#4E763B",
        myLightGreen: "#A3C78F",
        myYellow: "#FFDF38",
        myGray10: "#1C1C1C1A",
      },
    },
  },
  plugins: [],
};
export default config;
