/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  screen:{
    sm:'480px',
    md:'768px',
    lg:'976px',
    xl:'1440px'
  },
  theme: {
    extend: {
      colors:{
          darkGrayishBlue: 'hsl(227, 12%, 61%)',
          veryDarkBlue: 'hsl(233, 12%, 13%)',
          veryPaleRed: 'hsl(13, 100%, 96%)',
          veryLightGray: 'hsl(0, 0%, 98%)',
          red:'hsl(12, 88%, 62%)',
          brightRedSupLight:'hsl(16, 100%, 65%)',
      },
    },
  },
  plugins: [],
}
