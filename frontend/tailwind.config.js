// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#4361EE', // Adjust this to match the exact blue in the design
        }
      }
    },
  },
  plugins: [],
}
