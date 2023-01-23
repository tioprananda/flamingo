/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // install font lato
      fontFamily : {
        lato : ['Lato', 'sans-serif'],
        jose : ['Josefin Sans', 'sans-serif']
      },
      colors : {
        primary : '#14b8a6',
        layar : '#42455a',
        layar2 : '#f1f5f9',
        aktif : '#19dafa',
        utama : '#fd00da',
        kedua : '#19f7d8',
      }
    },
  },
  plugins: [
    require(`tw-elements/dist/plugin`)
  ],
}
