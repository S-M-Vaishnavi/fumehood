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
      animation: {
        'pulse': 'pulse 2s infinite ease-in-out',
        'wifi-glow': 'wifi-glow 1.5s infinite alternate',
      },
      keyframes: {
        'pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: 0.5 },
          '50%': { transform: 'scale(1.1)', opacity: 0.7 },
        },
        'wifi-glow': {
          '0%': { stroke: '#3b82f6' },
          '100%': { stroke: '#60a5fa' },
        },
      },
    },
  },
  plugins: [],
}

