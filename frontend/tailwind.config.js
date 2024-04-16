/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto':  'Roboto',
      
    },
   
    colors: {
      'theme-green': '#6eb43f',
      'light-gray': '#F3F3F3',
      'dark-blue': '#00303c',
      'white': '#fff',
      'dark': '#00303c',
      'black': '#000',
      'light': '#ffffff1f',
    },
    extend: {
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/line-clamp'),
],
}