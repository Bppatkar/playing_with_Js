/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EA526F',
        background: '#070600',
        surface: '#1a1a1a',
        border: '#333333',
        'text-primary': '#F7F7FF',
        'text-secondary': '#a0a0a0',
      },
      animation: {
        'pulse-slow': 'pulse 3s linear infinite',
      }
    },
  },
  plugins: [],
}