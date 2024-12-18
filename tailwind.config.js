/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'AboutBg': "url('/src/media/backlogo.jpg')"
      },
      fontFamily: {
        'medium500Italic': ["Fira Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
};

