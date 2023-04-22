/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./*.html",
  "./node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {
      colors:{

        "primary":"#92003B",
        "light":"#cc1a61",
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}