/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'low-grass': "url('../src/assets/bg-hiscape.avif')",
      },
      fontFamily: {
        nunito: ['nunito', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
