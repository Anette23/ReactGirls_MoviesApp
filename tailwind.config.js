/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      fontFamily: {
        headings: ['Rosario', "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        text: "#faebd7",
        background: "#1a1a1a",
        header: "#333",
        primary: "#F96600",
      },},
  },
  plugins: [],
}