import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          800: "#243c5a", // Azul intermediário
          900: "#1a2e40", // Azul escuro
        },
        orange: {
          400: "#f97316", // Laranja brilhante
          500: "#ea580c", // Laranja forte
        },
        lightText: "#E5E5E5", // Cor de texto clara
        darkText: "#4F4F4F", // Cor de texto escura
        background: {
          primary: "#001A3D", // Azul de fundo principal
          accent: "#0056B3", // Azul de destaque
        },
      },
      fontFamily: {
        sans: ["Poppins", "Arial", "sans-serif"], // Fonte estilizada para o tema de corrida
      },
      animation: {
        "fade-in-down": "fade-in-down 1s ease forwards",
        "fade-in-up": "fade-in-up 1s ease forwards",
        "scale-in": "scale-in 1s ease forwards",
      },
      keyframes: {
        "fade-in-down": {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
      spacing: {
        128: "32rem", // Espaçamento para elementos maiores
        144: "36rem",
      },
      boxShadow: {
        glow: "0 0 10px 2px #ea580c", // Sombra laranja brilhante
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // Tipografia para texto rico
    require("@tailwindcss/forms"), // Estilo para formulários
    function ({ addUtilities }) {
      addUtilities({
        ".bg-wave-separator-top": {
          backgroundImage: "linear-gradient(to top, #1a2e40, transparent)",
        },
        ".bg-wave-separator-bottom": {
          backgroundImage: "linear-gradient(to bottom, #1a2e40, transparent)",
        },
      });
    },
  ],
};

export default config;