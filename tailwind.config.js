/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          700: "#1DBF73",
          800: "#22ad3b",
        },
      },
    },
  },
  plugins: [],
};
