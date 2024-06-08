/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': ['Courier New', 'monospace'],
      'headline': ['Cantarell', 'sans-serif'],
    },
    colors: {
      'black': '#000',
      'darker': '#0b0b0b',
      'red': '#F00',
      'white': '#FFF'
    },
    extend: {},
  },
  plugins: [],
}