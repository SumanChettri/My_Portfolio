// tailwind.config.js
module.exports = {
  "darkMode": 'class', // <--- Enable dark mode by adding 'class'
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'float-slow' : 'float 6s ease-in-out infinite',
        'float-fast' : 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      // Customize theme colors, fonts, etc. here
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#1E3A8A",
        secondary: "#FBBF24",
      },
    },
  },
  plugins: [],
};
