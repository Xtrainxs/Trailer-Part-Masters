/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Trailer Part Masters — industrial / hi-vis palette
        ink: '#1a1d21',
        steel: '#2a2e35',
        lime: {
          DEFAULT: '#8dc63f',
          dark: '#6fa32c',
          soft: '#f1f7e8',
        },
        concrete: '#f4f5f4',
        line: '#e3e5e3',
      },
      fontFamily: {
        display: ['Oswald', 'Arial Narrow', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
