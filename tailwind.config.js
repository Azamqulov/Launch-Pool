import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: { sans: ['Montserrat', ...defaultTheme.fontFamily.sans] },
      colors: {
        primaryColor: {
          50: '#81d197',
          100: '#72cc8a',
          200: '#54c172',
          300: '#3fad5d',
          400: '#348f4d',
          500: '#256637',
          600: '#163d21',
          700: '#07140b',
          800: '#000000',
          900: '#000000',
        },
      },
      fontSize: {
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
