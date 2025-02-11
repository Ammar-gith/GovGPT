/** @type {import('tailwindcss').Config} */
// const plugin = require("tailwindcss/plugin");
export default {
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
      },
      boxShadow: {
        custom:
          "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
      },
    },
  },
  // plugins: [
  //   plugin(function ({ addUtilities }) {
  //     addUtilities({
  //       ".chat-scrollbar": {
  //         "&::-webkit-scrollbar": {
  //           width: "6px",
  //         },
  //         "&::-webkit-scrollbar-track": {
  //           background: "transparent",
  //         },
  //         "&::-webkit-scrollbar-thumb": {
  //           background: "#888",
  //           borderRadius: "3px",
  //         },
  //         "&::-webkit-scrollbar-thumb:hover": {
  //           background: "#555",
  //         },
  //       },
  //     });
  //   }),
  // ],
};
