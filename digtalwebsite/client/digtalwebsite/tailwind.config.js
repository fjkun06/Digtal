/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: "media",
   content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/**/**/*.{js,jsx,ts,tsx}"],
   important: "#root",
   theme: {
      extend: {
         screens: {
            mobile: { max: "480px" },
            tablet: "480.01px",
            laptop: "768.01px",
            desktop: "1024.01px",
            tv: "1200px"
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
