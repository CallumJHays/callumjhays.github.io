module.exports = {
  purge:
    process.env.NODE_ENV === "production"
      ? ["./pages/**/*.tsx", "./components/**/*.tsx", "./layouts/**/*.tsx"]
      : [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: "550px",
      },
    },
    // screens: {
    //   xs: { min: "300px" }, //can't get this to work... it keeps stuffing up default 'sm' styles
    //   sm: { min: "640px" },
    //   md: { min: "768px" },
    //   lg: { min: "1024px" },
    //   xl: { min: "1280px" },
    //   "2xl": { min: "1536px" },
    // },
  },
  variants: {
    extend: {
      backgroundColor: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
};
