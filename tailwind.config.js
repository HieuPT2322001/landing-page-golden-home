/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#d4af37',
          dark: '#b8941f',
        },
        secondary: {
          DEFAULT: '#1a1a1a',
          light: '#333333',
        },
        gold: '#d4af37',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 8px 24px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 12px 32px rgba(0, 0, 0, 0.15)',
        'gold': '0 4px 16px rgba(212, 175, 55, 0.3)',
        'gold-hover': '0 8px 24px rgba(212, 175, 55, 0.4)',
      },
    },
  },
  plugins: [],
}
