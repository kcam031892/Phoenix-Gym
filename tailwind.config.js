module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,html}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'theme-primary': '#082032',
        'theme-secondary': '#2C394B',
        'theme-light-secondary': '#334756',
        'theme-accent': '#FF4C29',
        'theme-light': '#ECECEC',
        'theme-light-gray': '#9F9F9F',
      },
      fontFamily: {
        sans: ['Poppins'],
      },
      gridTemplateRows: {
        'layout': 'minmax(10rem,12rem) minmax(10rem,12rem) 1fr',
      },
      boxShadow: {
        'card': ' 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
