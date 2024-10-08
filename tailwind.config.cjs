module.exports = {
  purge: ["./index.html", "./src/**/*.{vue, js, ts, jsx, tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamilty: {
        sans: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
