// portfolio/tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
        },
      },
      animation: {
        bounce: 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};
