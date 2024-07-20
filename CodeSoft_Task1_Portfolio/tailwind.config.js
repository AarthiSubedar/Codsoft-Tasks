/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        borderMove: {
          '0%, 100%': { strokeDashoffset: 0 },
          '50%': { strokeDashoffset: -300 },
        },
      },
      animation: {
        borderMove: 'borderMove 6s linear infinite',
      },
    },
    fontFamily: {
      heading: ["Josefin Sans", "sans-serif"],
      textContent: ["Roboto Flex", "sans-serif"],
      longContent: ["Urbanist", "sans-serif"],
      name: ["Kaushan Script", "cursive"]
    },
  },
  plugins: [],
}
