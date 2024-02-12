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
        third: '#202020'

      },
      container: {
        center: true,
        padding: '1rem'
      },
      boxShadow: {
        "3xl": "0px 0px 20px 1px rgba(0,0,0,0.1) "
      }
    },
  },
  plugins: [],
}

