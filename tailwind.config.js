/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#BF1B2C',
        secondary: '#50ADE5',
        third: '#202020',
        gray: '#8A8A8A',
        'dark-gray': '#505056',
        'light-gray': '#FBFBFB',
        'gray-400': '#AFADB5',
        'light-gray-200': '#EAEAEAEA',
        'light-gray-400': '#4A99D366',

      },
      container: {
        center: true,
        padding: '1rem'
      },
      boxShadow: {
        "card": "0px 0px 20px 1px rgba(0,0,0,0.1) "
      },

    },
  },
  plugins: [],
}

