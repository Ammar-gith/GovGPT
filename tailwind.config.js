/** @type {import('tailwindcss').Config} */
// const plugin = require("tailwindcss/plugin");
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        openSans: ["Open sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        darkgreen: "#01411C",
        brightgreen: "#017B43",
        darkgray: "#666666",
        lightgray: "#CCCCCC",
        goldenyellow: "#FFC107",
      },
      backgroundImage: {
        "login-bg": "url('./src/assets/imgs/login-bg.jpg')",
        "home-hero": "url('./src/assets/imgs/govgpt-hero.png')",
        "islamia-collage": "url('./src/assets/imgs/islamia-collage.jpg')",
        "bab-e-khyber-gate": "url('./src/assets/imgs/bab-e-khyber-gate.jpg')",
      },
      boxShadow: {
        custom:
          "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
      },
    },
  },
  plugins: [],
};
