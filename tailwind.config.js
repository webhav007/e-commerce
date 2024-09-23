/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colour :{

        maincolor:"#bcb389",
        secondary:"#807675",
        dark: "#0f020c"
  
        
      },
      fontFamily:["inter","sans-serif"]
    },
    container:{
      center: true,
      padding:{
        DEFAULT: "1rem",
        sm: '2rem',
        lg: '3rem',
        xl:'4rem',

      },
      
    }
  },
  plugins: [],
}

