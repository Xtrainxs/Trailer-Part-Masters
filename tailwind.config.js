module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0052CC', // Vibrant blue
          light: '#4F8CFF',
          dark: '#002B5C',
        },
        accent: {
          DEFAULT: '#FFB400', // Vibrant gold
          light: '#FFE066',
          dark: '#B38600',
        },
        success: {
          DEFAULT: '#00C853', // Vibrant green
          light: '#69F0AE',
          dark: '#009624',
        },
        info: {
          DEFAULT: '#00B8D9', // Vibrant cyan
          light: '#5DE6FF',
          dark: '#007C91',
        },
        warning: {
          DEFAULT: '#FFAB00', // Vibrant orange
          light: '#FFD740',
          dark: '#B76E00',
        },
        danger: {
          DEFAULT: '#D50000', // Vibrant red
          light: '#FF5252',
          dark: '#9B0000',
        },
        neutral: {
          DEFAULT: '#F4F5F7', // Professional light gray
          dark: '#212121',
        },
      },
    },
  },
  plugins: [],
};
