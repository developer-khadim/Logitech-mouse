/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        active: '#00FFFF',
        lightdark: '#303135',
        dark: '#00000',
        light: '#ffffff',
        lightwhite: '#ababab',
      },
    },
  },
  plugins: [],
}