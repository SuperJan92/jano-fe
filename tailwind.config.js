/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js}', // Zorg ervoor dat alle bestanden in src goed worden meegenomen
    './src/pages/**/*.{astro,html,js}', // Specifiek voor de pagina's
    './src/styles/**/*.css', // Zorg dat custom CSS wordt meegenomen
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#ff9d20',
        'custom-gray': '#bdbfc3',
        'custom-darkgray': '#6a6e74',
        'custom-lightgray': '#7C838C',
        'custom-bg': '#141a23',
      },
      fontFamily: {
        goldplay: ['Goldplay', 'sans-serif'],
        opensans: ['OpenSans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};