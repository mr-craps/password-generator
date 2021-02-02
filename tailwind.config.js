const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        primary: colors.indigo
      },
      spacing: {
        '144': '36rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
