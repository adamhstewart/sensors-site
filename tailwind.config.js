/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./static/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'calm-blue': '#4A7C9B',
        'calm-blue-dark': '#3A6280',
        'calm-blue-light': '#6B9DBF',
        'warm-beige': '#F5F0E8',
        'warm-beige-dark': '#E8DFD0',
        'warm-tan': '#C4B5A0',
        'trust-green': '#6B9B7B',
        'text-dark': '#2D3748',
        'text-muted': '#5A6577',
      },
      fontFamily: {
        'serif': ['Lora', 'Georgia', 'serif'],
        'sans': ['Inter', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
