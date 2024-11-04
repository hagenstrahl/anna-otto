module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#f9c0a3",
        "dark-orange": "#f69f73",
        grau: "#7d7d82",
        blau: "#adddef",
        gruen: "#d4e29e",
      },
    },
    fontFamily: {
      heading: ["eldwin-script"],
      text: ["soleil"],
    },
  },
  plugins: [],
};
