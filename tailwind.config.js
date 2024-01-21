/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      fig: ["Figtree"],
    },
    extend: {
      colors: {
        "dark-yellow": "#F4D04E",
      },
    },
  },
  plugins: [],
};
