/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // New Deal Technologique color scheme
        primary: {
          DEFAULT: '#144ec4', // Blue
          foreground: '#ffffff',
          light: '#2563eb', // Lighter blue for light mode
        },
        secondary: {
          DEFAULT: '#f7c838', // Gold
          foreground: '#0f172a',
        },
        dark: {
          DEFAULT: '#0f172a', // Dark background
          card: '#1e293b',
        },
        light: {
          DEFAULT: '#f8fafc', // Light background
          card: '#ffffff',
        },
        accent: {
          DEFAULT: '#f7c838',
          foreground: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Michroma', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
