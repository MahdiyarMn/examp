/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      "IRANSans": ["IRANSans.ttf"]
    },
    screens:{
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1480px"
    },
    extend: {},
  },
  plugins: [],
}
