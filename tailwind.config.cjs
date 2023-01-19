const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    fontFamily: {
      display: ["Montserrat", ...defaultTheme.fontFamily.sans],
      body: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      ...colors,
      primary: {
        100: "var(--primary-100, #C6C6F8)", // Lightest
        200: "var(--primary-200, #9191F2)", // Lighter
        300: "var(--primary-300, #5656D8)", //
        400: "var(--primary-400, #2C2CB2)",
        500: "var(--primary-500,#000080)", // Primary Default
        600: "var(--primary-600, #00006E)", // Dark
        700: "var(--primary-700, #00005C)", // Darker
        800: "var(--primary-800, #00004A)", // Darkest
        900: "var(--primary-900, #00003D)", // Darkieeeeest
      },
      secondary: {
        100: "var(--secondary-100, #fdcfa9)",
        200: "var(--secondary-200, #faae7d)",
        300: "var(--secondary-300, #f68d5d)",
        400: "var(--secondary-400, #cf3c1d)",
        500: "var(--secondary-500, #f57418)",
        600: "var(--secondary-600, #f16a09)",
        700: "var(--secondary-700, #8b110d)",
      },
      accent: {
        50: "#FFD8ED",
        100: "#FFCCED",
        200: "#FF99E4",
        300: "#FF66E4",
        400: "#FF3FEE",
        500: "#FF00FF",
        600: "#C800DB",
        700: "#9700B7",
        800: "#6D0093",
        900: "#4F007A",
      },
      gray: colors.gray,
      danger: colors.red,
      success: colors.green,
      warning: colors.orange,
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      whatsapp: "#25D366",
      shimmer: "#E5E7EB",
    },
    fontSize: {
      xxs: ".65rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    extend: {
      width: {
        100: "400px",
      },
    },
  },
};
