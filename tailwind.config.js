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
      },
    },
  },
  plugins: [daisyui],
};
