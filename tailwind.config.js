/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#755CDE",
        yellow: "#F6A560",
        pink: "#F39E9E",
        light_red: "#EB7565",
        cyan: "#61C4B7",
        dark_purple: "#552049",
        creme: "#FFF7F0",
        brown: "#7A746E",
        black: "#030303",
      },
    },
  },
  plugins: [],
};
