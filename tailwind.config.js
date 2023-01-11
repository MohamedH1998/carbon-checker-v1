/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './containers/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'off-black': '#303030',
        'dover-grey': '#848484',
        iron: '#5E5E5E',
        'abundance-of-tinge': '#E6E6E6',
        'powder-white': '#EAF1F7',
        sandpiper: '#EBD8C8',
        'private-black': '#4D4A47',
        'kittens-eye': '#8CADFF',
        aeronautic: '#2B3347',
        squant: '#666666',
        'big-stone': '#354045',
        'storm-dust': '#67625F',
        renaissance: '#454356',
        'vegan-mastermind': '#2DC653',
      },
      fontFamily: {
        primary: 'Inter',
      },
      screens: {
        xs: '430px',
        md: '984px',
        desktop: '1477px',
        tablet: '1338px',
      },
    },
  },
  plugins: [],
};
