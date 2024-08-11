import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      container: {
        center: true,
        screens: {
          "3xl": "1440px",
        },
        padding: {
          DEFAULT: "10px",
          sm: "20px",
          md: "30px",
          lg: "40px",
          xl: "50px",
          "2xl": "60px",
          "3xl": "70px",
        },
      },
    },
  },
  plugins: [daisyui],
};
