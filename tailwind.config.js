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
      boxShadow: {
        purple: "0px 8px 24px rgba(0, 65, 203, 0.1)",
        "purple-small": "0px 1px 4px 1px rgba(0, 65, 203, 0.2)",
      },
    },
  },
  plugins: [],
};

