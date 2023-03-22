/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './modules/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: {
        50: '#fdfde9',
        100: '#fafbc6',
        200: '#f9f68f',
        300: '#f5e94f',
        400: '#efd81b',
        500: '#dfc113',
        600: '#c1980d',
        700: '#9a6e0e',
        800: '#7f5714',
        900: '#6d4716',
      },
      secondary: {
        50: '#f2f7fd',
        100: '#e5edf9',
        200: '#c5d9f2',
        300: '#91b9e8',
        400: '#5695da',
        500: '#2f74c0',
        600: '#215da8',
        700: '#1c4b88',
        800: '#1b4171',
        900: '#1b375f',
      },
      base: {
        white: '#FFFFFF',
        black: '#000000',
      },
      transparent: 'transparent',
    },
    fontFamily: {
      display: ['Fira Code'],
      body: ['DM Sans'],
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme('fontSize.xl') },
        h3: { fontSize: theme('fontSize.base') },
      });
    }),
  ],
};
