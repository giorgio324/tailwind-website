/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryOrange: '#DF6951',
        primaryFont: '#181E4B',
        primaryFontGray: '#5E6282',
      },
    },
  },
  plugins: [],
};
