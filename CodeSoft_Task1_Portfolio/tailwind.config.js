/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      heading:["Josefin Sans","sans-serif"],
      textContent:["Roboto Flex","sans-serif"],
      longContent:["Urbanist","sans-serif"],
      name:[ "Kaushan Script","cursive"]
    },
  },
  plugins: [],
}