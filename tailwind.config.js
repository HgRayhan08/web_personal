/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      spacing: {
        700: "700px",
        21: "20%",
        33: "30%",
        99: "90%",
      },
      fontWeight: {
        900: 900,
      },
      fontFamily: {
        nurito: ["Nunito"],
        Verela: ["Varela Round"],
      },
      colors: {
        tosca: "#BFEAF5",
        laut: "#91D8E4",
      },
      borderWidth: {
        10: 10,
      },
    },
  },
  plugins: [],
};
