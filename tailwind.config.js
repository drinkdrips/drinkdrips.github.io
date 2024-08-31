/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',  // Escaneia todos os arquivos .html e .js na pasta src
    './index.html',          // Inclua também o arquivo index.html na raiz
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
    },
  },
  plugins: [],
};


