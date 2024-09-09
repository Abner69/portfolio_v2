/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {},
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["pastel", "dracula", "cyberpunk"],
  },
  darkMode: ["class", '[data-theme="coffee"]'],
};
