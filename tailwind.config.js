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
      'black': '#1E1E1E',
      'red': '#F00',
      'white': '#FFF'
    },
    extend: {},
  },
  plugins: [],
}