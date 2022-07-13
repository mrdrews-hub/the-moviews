/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'sans-narrow': ['PT Sans Narrow', 'sans-serif']
      }
    },
  },
  plugins: [require('daisyui')],
}
