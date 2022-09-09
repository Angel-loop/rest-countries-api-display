/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
    "dark-blue":"#2d3b48",
    "very-dark-blue" : "#202c37",
    "dark-blue-lm" : "#111517",
    "dark-gray" : "#858585",
    "very-liht-gray" : "#fafafa",
    "white" : "#ffffff"    
    },
  },
  plugins: [],
  darkMode: "class",
}