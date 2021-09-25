const autoprefixer = require('autoprefixer');
module.exports = {
  plugins: {
    tailwindcss: {
      tailwindcss: './tailwind.config.js'
    },
    autoprefixer,
  }
}