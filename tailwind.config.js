/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'second-bg': '#222931',
        'third-bg': '#FEF987',
        'bright-yellow': '#ffe718',
        'light-gray': '#D1D5DB',
        'white-smoke': '#F5F5F5',
        'primary-red': '#FF4136',
        'primary-orange': '#FF851B'
      },

      fontFamily: {
        'fontOne': ['Libre Franklin', 'serif'],
        'fontTwo': ['Roboto', 'serif']
      },

      screens: {
        'sm': '640px',

        'md': '768px',

        'lg': '1024px',

        'xl': '1220px',

        '2xl': '1420px'
      }
    },
  },
  plugins: [],
}

