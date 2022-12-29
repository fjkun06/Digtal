/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: "media",
   content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/**/**/*.{js,jsx,ts,tsx}"],
   important: "#root",
   theme: {
      extend: {
         screens: {
            mobile: "320px",
            tablet: "640px",
            laptop: "1024px",
            desktop: "1200px",
            tv: "1680px"
         },
         colors: {
            brand: {
               blue: "#ccddff"
            }
         }
      }
   },
   plugins: []
};
