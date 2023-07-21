/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       colors: {
        'newBlue': "#345FF6",
        'gunmetal': '#253347',
        'electric': '#5E6E85',
        'borders': '#D8E2E7'
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    screens: {
      xs: "475px",
      s: "530px",
      ...defaultTheme.screens
    }
  },
  plugins: [],
};
