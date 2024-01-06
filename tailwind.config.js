/* eslint-disable */
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        banner: "banner 20s linear infinite",
        banner2: "banner2 10s linear infinite",
      },
      keyframes: {
        banner: {
          "0%": { transform: "translateX(200%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  important: true,
};
