/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: "class",
   content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/**/**/*.{js,jsx,ts,tsx}"],
   important: "#root",
   theme: {
      extend: {
         screens: {
            mobile: "300px",
            tablet: "480px",
            laptop: "920px",
            desktop: "1200px",
            tv: "1680px"
         },
         colors: {
            "rebecca-purple": "rgb(var(--rebecca-purple) / <alpha-value>)",
            "rebecca-white": "rgb(var(--rebecca-white) / <alpha-value>)",
            "rebecca-blue": "rgb(var(--rebecca-blue) / <alpha-value>)",

            "white-purple": "rgb(var(--white-purple) / <alpha-value>)",
            "white-rebecca": "rgb(var(--white-rebecca) / <alpha-value>)",
            "white-blue": "rgb(var(--white-blue) / <alpha-value>)",

            "purple-white": "rgb(var(--purple-white) / <alpha-value>)",
            "purple-rebecca": "rgb(var(--purple-rebecca) / <alpha-value>)",
            "purple-blue": "rgb(var(--purple-blue) / <alpha-value>)",
            brand: {
               blue: "#ccddff"
            }
         }
      }
   },
   plugins: []
};
