// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'orange': {
          500: '#D87D4A',
          400: '#FBAF85',
        },
        'black': '#000000',
        'white': '#FFFFFF',
        'gray': {
          100: '#F1F1F1',
          200: '#FAFAFA',
          300: '#CFCFCF',
          400: '#8C8C8C',
          500: '#4C4C4C',
          600: '#101010',
        }
      },
      fontFamily: {
        'sans': ['Manrope', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}