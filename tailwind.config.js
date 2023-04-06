/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blackberry: "#350364",
      },
      fontFamily: {
        exo2: ["var(--font-exo2)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

