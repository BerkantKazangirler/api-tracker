/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          sm: '400px',
          md: '450px',
          lg: '728px',
          xl: '984px',
          '2xl': '1240px',
        },
      },
    },
  },
  plugins: [],
}

