/** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
    theme: {
      extend: {},
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}


  // const withMT = require("@material-tailwind/react/utils/withMT");
 
  // module.exports = withMT({
  //   content: ["./src/**/*.{js,jsx,ts,tsx}"],
  //   theme: {
  //     extend: {},
  //   },
  //   plugins: [],
  // });