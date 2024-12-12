/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'navy-blue': '#004687',
        'soft-pink': '#f5d2d2',
        'logo-red': '#da433a',
        'gold-yellow': '#ffb93c',
      },
    },
  },
  plugins: [],
});

