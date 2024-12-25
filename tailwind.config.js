/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js}', // Zorg ervoor dat alle bestanden in src goed worden meegenomen
    './src/pages/**/*.{astro,html,js}', // Specifiek voor de pagina's
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}