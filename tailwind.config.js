/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#150E28",
        secondary: "#D434FE",
        tertairy: "#903AFF"
      },
      fontFamily: {
        mon: 'Montserrat',
        robo: 'Roboto',
        sc: 'Familjen Grotesk'
      }
    },
  },
  plugins: [],
}