/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        richBlack:'rgba(22, 23, 27, 1)',
        'custom-gray': '#1E1E1E',
        'custom-dark-gray': '#2D2D2D',
      },
    },
  },
  plugins: [],
}

