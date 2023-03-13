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
            primary: "rgb(var(--primary-color) / <alpha-value>)",
            "primary-alt": "rgb(var(--primary-alt-color) / <alpha-value>)",
            secondary: "rgb(var(--secondary-color) / <alpha-value>)",
            tertiary: "rgb(var(--tertiary-color) / <alpha-value>)",
            title: "rgb(var(--title-color) / <alpha-value>)",
            subtitle: "rgb(var(--subtitle-color) / <alpha-value>)",
            "subtitle-muted": "rgb(var(--subtitle-color) / <alpha-value>)",
            brand: {
               blue: "#ccddff"
            }
         }
      }
   },
   plugins: []
};
