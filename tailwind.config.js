/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.js",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '575px',
        // => @media (min-width: 992px) { ... }
      },
      fontFamily: {
        'Poppins': ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      transitionProperty: {
        'left': 'left',
        'width': 'width',
      }
    },
  },
  plugins: [ 
    require('@tailwindcss/forms') 
  ],
};
