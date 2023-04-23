/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky-blue': {
          300: '#B2E0FF',
          400: '#93C3FF',
          500: '#74A8FF',
          600: '#538DEF',
          700: '#2C73D2',
        },
        'offWhite': '#F5F9FF',
      }
    },
  },
  plugins: [],
}

