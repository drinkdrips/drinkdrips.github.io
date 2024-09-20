/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      keyframes: {
        rotateBorder: {
          '0%': { 'background-position': '0% 0%' },
          '100%': { 'background-position': '100% 100%' },
        },
        bgSpin: {
          '0%': { 'background-image': 'conic-gradient(from 0deg, #131313, #d33cf2)' },
          '100%': { 'background-image': 'conic-gradient(from 1turn, #131313, #d33cf2)' },
        },
      },
      animation: {
        rotateBorder: 'rotateBorder 4s linear infinite',
        bgSpin: 'bgSpin 8s linear infinite',
      },
      backgroundImage: {
        'gradient-conic': 'conic-gradient',
      },
      maxWidth: {
        'screen-xl': '1440px',
        'screen-lg': '1240px',
      },
      maxHeight: {
        '500': '500px',
      },
      colors: {
        'custom-purple': '#D33CF2',
        'custom-green': '#008000', // You can customize this color as needed
      },
      padding: {
        'input': '12px 12px 8px 12px', // Define the custom padding
      },
      margin: {
        '20': '5rem', // Adiciona ml-20 e mr-20
      },
    },
  },
  important: true,
  plugins: [],
};