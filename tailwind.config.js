/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060d17',
          900: '#0a192f',
          800: '#112240',
          700: '#1d3557',
          600: '#233554',
          500: '#3a506b',
        },
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Halant', 'Newsreader', 'Georgia', 'serif'],
        mono: ['Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}
