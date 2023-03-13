/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#1867C0',
      secondary: '#5CBBF6',
      background: '#eef5ff', 
      MarineBlue: "#02295A",
      PurplishBlue: "#473DFF",
      PastelBlue: "#ADBEFF",
      LightBlue: "#BFE2FD",
      StrawberryRed: "#ED3548",
      CoolGray: "#9699AB",
      LightGray: "#D6D9E6",
      Magnolia: "#F0F6FF",
      Alabaster: "#FAFBFF",
      White: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [],
}