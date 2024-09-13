/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dracula: {
          bg: "#282a36",
          main: "#1c1d26", // Color del texto activo en la navegación
          text: "#50fa7b", // Color principal del texto
          "text-900": "#226934",
          "text-700": "#2D8B44",
          "text-600": "#37AD55",
          "text-500": "#42CF66",
          "text-400": "#4DF176",
          subtext: "#bd93f9", // Color del subtexto
          "subtext-100": "#B88EF1",
          "subtext-200": "#8466AD",
          "subtext-300": "#9E7ACF",
          "subtext-400": "#6A528B",
          "subtext-500": "#503E69",

          "main-secondary": "#1c1e26", // Color de fondo secundario
          title: "#ff79c6", // Color del botón secundario
          "sub-title": "#00bf76", // Color del botón activo
          disabled: "#3f3c45", // Color del botón deshabilitado
        },
        cherry: {
          text: "#363062", // Color principal del texto
          "text-900": "#1E1B36",
          "text-700": "#312B58",
          "text-600": "#564D9C",
          "text-500": "#695DBE",
          "text-400": "#7B6EE0",
          subtext: "#4D4C7D", // Color del subtexto
          "subtext-100": "#9C9AFC",
          "subtext-200": "#8785DA",
          "subtext-300": "#7271B8",
          "subtext-400": "#484774",
          "subtext-500": "#333252",
          main: "#F5F5F5", // Color principal de fondo
          "main-secondary": "#09111b", // Color de fondo secundario
          title: "#F99417", // Color del botón principal
          subtitle: "#452F61",
          "sub-title": "#ff84ac", // Color del botón activo
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
