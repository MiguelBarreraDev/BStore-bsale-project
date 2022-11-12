/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        'fadeout': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0, display: 'hidden' }
        }, 
        'fadein': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        } 
      }
    },
  },
  plugins: [],
}
