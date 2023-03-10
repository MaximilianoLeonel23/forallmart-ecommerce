/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: {
          200: "#FFEAEA",
          300: "#FECDCD",
          400: "#FD9191",
          500: "#FC6C6C",
          600: "#EC4C4C",
        },
        complementary: {
          500: "#C8D7D2",
        },
        shine: {
          500: "#FCD86C",
        },
      },
      height: {
        banner: "25rem",
        card: "30rem",
        15: "15rem",
        30: "30rem",
      },
      maxHeight: {
        card: "30rem",
      },
      
    },
  },
  plugins: [],
};
