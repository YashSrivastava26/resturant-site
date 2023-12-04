/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        golden: "#DCCA87",
        dark: "#0C0C0C",
        "gray-1": "#545454",
        "gray-2": "#AAAAAA",
        crimson: "#F5EFDB",
      },
      fontFamily: {
        base: ["Cormorant Upright", "serif"],
        alt: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
