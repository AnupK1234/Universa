import type { Config } from "tailwindcss";
import { plugin } from "@nuahorg/universa-ui-kit";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/@nuahorg/universa-ui-kit/{src,dist}/**/*.{js,ts,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yapari: "var(--font-yapari)",
      },

      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        healthcare: {
          "blur-color": "#313A50",
          "blur-background": "#1C293C",
          accent: "#11F4D1",
          background: "#353D5A",
        },
      },

      screens: {
        "desktop-qhd": {
          min: "2560px",
        },
        "desktop-lg": {
          min: "1920px",
          max: "2559px",
        },
        "desktop-md": {
          max: "1511px",
        },
        "desktop-sm": {
          max: "1365px",
        },

        tablet: {
          max: "1200px",
          min: "768px"
        },
        "mobile-sm": {
          max: "767px",
          min: "320px",
        },
        mobile: {
          max: "1023px",
          min: "320px",
        },
        desktop: {
          max: "4460px",
          min: "1024px",
        },
      },
    },
  },
  plugins: [plugin],
};
export default config;

