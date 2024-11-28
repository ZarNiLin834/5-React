/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif', 'Padauk'],
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

