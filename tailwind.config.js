/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        "dark-red": "#FC4747",
        "darker-blue": "#10141E",
        "dark-blue": "#161D2F",
        "light-blue": "#5A698F",
      },
      spacing: {
        240: "60rem",
      },
      gridTemplateColumns: {
        main: "max-content 1fr",
        trending: "repeat(5, 30rem)",
      },
      gridTemplateRows: {
        main: "max-content 1fr 1fr",
      },
      fontSize: {
        "3.5xl": ["2rem", "2.375rem"],
      },
      screens: {
        lg: { min: "1440px" },
        md: { min: "700px" },
      },
    },
  },
  plugins: [],
};
