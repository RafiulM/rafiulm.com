/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme:
  {
    extend: {
      fontWeight: {
        normal: 300,
      },
      fontFamily: {
        'archivo': ['Archivo', 'sans-serif'],
        'display': ['Dela Gothic One', 'cursive'],
      },
      colors: {
        'primary': '#FF5400'
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      backgroundImage: {
        'hero-text': "url('https://64.media.tumblr.com/243bebb6f10aeb9028585f2262a22756/a277055a29fb87ba-0e/s540x810/895d339aef32c01bc15980b755f88b6845bd385d.gifv')",
      }
    },

  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      }
      )
    })
  ],
}