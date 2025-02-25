/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          hammersmith: ['Hammersmith One', 'sans-serif'], 
        },
        colors: {
        customBrown: '#574535', 
        },
      },
    },
    plugins: [],
}