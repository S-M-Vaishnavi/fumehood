/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        crimson:'#00366f',
        richBlack:'rgba(22, 23, 27, 1)',
        'custom-gray': '#1E1E1E',
        'custom-dark-gray': '#2D2D2D',
      },
      // animation:{
      //   spin:'spin 3.1s linear infinite',
      // },
      boxShadow:{
        'custom-shadow':'0 0 10px 6px rgba(237,20,61,.8)',
      }
    },
  },
  plugins: [],
}



