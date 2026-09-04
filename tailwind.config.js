/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // tailwind.config.js — theme.extend.colors
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#0B0C0E',
          200: '#141619',
          300: '#1D2025',
          500: '#2A2E35',
          600: '#101114',
        },
        white: {
          DEFAULT: '#FFF',
          500: '#9BA1A9',
          600: '#C6CAD1',
          800: '#F2F3F5',
        },
        accent: {
          DEFAULT: '#85A16A',  // green
          2: '#A99BD4',        // purple
          3: '#9BC4A8',        // green — sparingly
        },
      },
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
        display: ['Instrument Serif', 'Georgia', 'serif'],
        caveat: ['Caveat', 'cursive'],
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
    },
  },
  plugins: [],
};