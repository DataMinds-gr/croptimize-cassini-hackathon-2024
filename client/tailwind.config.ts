import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        myRed: "#FB6D64",
        myGreen: "#4E763B",
        myLightGreen: "#A3C78F",
        myOrange: "#FFA500",
        myGray10: "#1C1C1C1A",
        myGray5: "#1C1C1C0D",
        myGray40: "#1C1C1C66",
      },
    },
  },
  plugins: [],
};
export default config;
