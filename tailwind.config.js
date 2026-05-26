/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "h-1": "var(--h-1-font-family)",
      },
    },
  },
  plugins: [],
};
