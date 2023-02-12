/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html, js}", "./src/scripts/**/*.ts"],
  theme: {
    extend: {},
    data: {
      selected: 'selected~="true"',
    },
  },
  plugins: [],
}
