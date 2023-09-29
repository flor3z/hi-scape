/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'low-grass': "url('../src/assets/bg-hiscape.avif')",
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
