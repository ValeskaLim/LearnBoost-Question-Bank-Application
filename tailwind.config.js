/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'custom-bg-1': '#F8F4F4',
        'custom-bg-2': '#305cd4',
        'submit-btn': '#08cc54',
      },
      fontFamily: {
        custom: ['Verdana', 'Geneva', 'Tahoma', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}

