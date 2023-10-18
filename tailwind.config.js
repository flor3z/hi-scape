/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        footerbg: "url('../src/assets/wave.svg')",
        'low-grass': "url('../src/assets/bg-hiscape.avif')",
        hedges: "url('../src/assets/hedges.avif')",
        lawnmower: "url('../src/assets/lawn-mower.png')",
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
