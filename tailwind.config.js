/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    height :{
      800 : '800px',
      2000 : '2000px',
    },
    extend: {
      keyframes : {
        slide : {
          from : {left: "-200px",opacity : "0"},
          to: {left : "0px",opacity : "1"},
        },
        disapear : {
          from : {left: "100px", opacity : "1"},
          to : {left: "-100px", opacity : "1"},
        }
      },
      animation : {
        slide : "slide 2s ease-in-out",
        disapear : "slide 2s "
      },
    },
  },
  plugins: [],
}
