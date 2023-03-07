/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: "media",
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
            primary: 'var(--primary-color)',
            secondary: 'var(--secondary-color)',
            tertiary: 'var(--tertiary-color)',
            brand: {
               blue: "#ccddff",
            }
         }
      }
   },
   plugins: []
};
