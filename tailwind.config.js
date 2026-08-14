/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "!./src/**/node_modules/**",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
