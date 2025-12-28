/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37',
        dark: '#1a1a1a',
        'dark-soft': '#1f1f1f',
      },
    },
  },
  plugins: [],
}

