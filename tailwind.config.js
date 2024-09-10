/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgImage': "url('/image/home.png')"
      },
      screens:{
        
        'sm': "640px",
        'md': "1024px"

      }
    },
  },
  plugins: [],
}

