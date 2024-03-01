/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          100: '#635985',
          200: '#443C68',
          300: '#393053',
          400: '#18122B',
        },
        white: '#f1f1f1',
      }
    },
  },
  plugins: [],
}
