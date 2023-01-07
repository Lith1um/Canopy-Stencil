const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: '1px'
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      }
    },
  },
  plugins: [
    require(path.resolve(__dirname, ('src/utils/icon-size'))),
  ],
}