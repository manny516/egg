/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors:{
      'primary' : '#7C56DB',
      'offwhite' : '#f6f4f9',
      'greys' : '#666666'
    },
    extend: {},
  },
  plugins: [],
}
