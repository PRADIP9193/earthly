/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryOne: "#E5D9B6",
        primaryTwo: "#A4BE7B",
        primaryThree: "#5F8D4E",
        primaryFour: "#285430",
      },
      fontFamily: {
        inder: ["Inder", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        itim: ["Itim", "sans-serif"],
      },
      boxShadow: {
        'custom':'0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      backgroundImage: {
        'layer-One':"url('../src/assets/layerOne.jpeg')",
        'layer-Onther':"url('../src/assets/kit.jpeg')",
        'layer-Two':"url('../src/assets/layerTwo.jpeg')",
        'layer-Three':"url('../src/assets/layerThree.jpeg')",
        'layer-Four':"url('../src/assets/layerFour.jpeg')",
        'layer-Five':"url('../src/assets/layerFive.jpeg')",
        'layer-Six':"url('../src/assets/layerSix.jpeg')",
      },
    },
  },
  plugins: [],
};
