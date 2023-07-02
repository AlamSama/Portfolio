/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins' : 'poppins'
      },
      backgroundImage: {
        'parallax1': "url('./src/assets/demure-man-programs-on-laptop-while-sitting-in-an-armchair-1.png')",
      },
      animation: {
        tb: "tb 6s infinite",
      },
      keyframes: {

        tb : {
          "0%" : {
            transform: "translate(0, 0)"
          },
          "33%" : {
            transform: "translate(0, -50px)"
          },
          "100%" : {
            transform: "translate(0, 0)"
          }
        },

      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

