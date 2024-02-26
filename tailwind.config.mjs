/* eslint-disable @typescript-eslint/no-var-requires */
const daisyPlugin = require('daisyui');
const daisyThemes = require('daisyui/src/theming/themes');

/** @type {import('tailwindcss').Config} */

const colors = {
  primary: '#F2D903',
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
};
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors,
    },
    fontFamily: {
      display: ['Ubuntu'],
    },
  },
  plugins: [daisyPlugin],
  daisyui: {
    themes: [
      {
        light: {
          ...daisyThemes['light'],
          primary: '#F2D903',
          'primary-focus': '#E5CE06',
          'primary-content': '#003320',
        },
        dark: {
          ...daisyThemes['dark'],
          primary: '#F2D903',
          'primary-focus': '#E5CE06',
          'primary-content': '#003320',
        },
      },
    ],
  },
};
