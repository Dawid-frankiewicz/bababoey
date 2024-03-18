/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {  colors:
      {
        'body':'#141212',
        'headers':'#ffffff',
        'redish' : '#ff0000',
        'text_body':'#DEDEDE'
      },
      fontFamily:
      {
        'saira':["'Saira Condensed'",'sans-serif']
      }},
  },
  plugins: [],
}

