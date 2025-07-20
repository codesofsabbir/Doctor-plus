const { heroui } = require("@heroui/theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        spinSlow: "spin 5s linear infinite",
        spinMedium: "spin 2s linear infinite",
        spinFast: "spin 1s linear infinite",
      },
    },
  },
  plugins: [heroui()],
};
