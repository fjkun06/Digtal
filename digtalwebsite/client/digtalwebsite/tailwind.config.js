/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["./src/**/*.{js,jsx,ts,tsx}","./src/**/**/**/*.{js,jsx,ts,tsx}"],
  important:"#root",
  theme: {
    extend: {
      colors:{
        brand:{
          blue: "#ccddff"
        }
      }
    },
  },
  plugins: [],
}
