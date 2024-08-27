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
      },
    },
    /*    dropShadow: {
      custom: ["2px_-2px_4px_rgba(0,0,0,0.25)", "0_1px_2px_rgba(0,0,0,0.44)"],
    },*/
    fontFamily: {
      heading: ["eldwin-script"],
      text: ["soleil"],
    },
  },
  plugins: [],
};
