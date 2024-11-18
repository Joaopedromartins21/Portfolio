/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Lato', 'sans-serif'],
        'JMH': ['JMH', 'sans-serif']
      },

      colors: {
        'green': '#55FC10'
      },
      animation:{
        "barra": 'barra 1s ease-in-out infinite'
      },
      keyframes: {
        barra: {
          '0%, 100%': { opacity: 0},
          '50%': {opacity: 1},

        }
      }
    },
  },
  plugins: [],
}

