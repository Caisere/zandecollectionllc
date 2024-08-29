/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'futura': ['"Futura LT W01 Medium"', 'sans-serif'],
      },
      colors: {
        'brand-primary-color': '#04baba',
        'darker-name-color': '#636363',
        'client-quote-color': '#D4D4D4',
      },
      boxShadow: {
        'buttonShadow': '-1.00px 0.00px 3px 1px rgba(0, 0, 0, 0.6)',
        
      },
      
      backgroundImage: {
        'about-us-bg': "url('/public/aboutmeblurimage.jpg')",
      },

      keyframes: {
        slideInFromTop: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideInFromTop: 'slideInFromTop 0.5s ease-out', // Adjust the duration and easing as needed
      },
      
    },
  },
  plugins: [],
}

