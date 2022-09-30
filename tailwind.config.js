/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1F1F4A',
        'primary-light': '#474760',
        'primary-lightest': '#BFBFD8',
        'primary-disabled': '#85859B',
      },
      fontSize: {
        '11xl': '12rem',
      },
      borderRadius: {
        '5xl': '5rem',
      },
    },
  },
  plugins: [],
  important: true,
};
