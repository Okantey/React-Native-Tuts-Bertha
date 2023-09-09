/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}", "./src/screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#324ca8",
        secondary: "#327fa8",
        white: "#fff",
        gray: "#e3e3e3",
      }
    },
  },
  plugins: [],
}

