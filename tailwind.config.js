module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: { min: "300px" },
      sm: { min: "640px" },
      md: { min: "768px" },
      lg: { min: "1024px" },
      xl: { min: "1280px" },
      "2xl": { min: "1536px" },
    },
    extend: {
      screens: {
        xs: "300px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
