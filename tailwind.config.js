module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--gradient-color-stops))",
      },
      opacity: {
        12: "1.2",
      },
      colors: {
        dark_sienna: "#330B15",
        dry_white: "rgba(222, 240, 204, 1)",
        crayola: "rgba(174, 222, 126, 0.76)",
        kiwi: "rgba(147, 226, 68, 0.44)",
        lawn_green: "rgba(29, 55, 3, 0.88))",
        electric_green: "rgba(0, 255, 10, 1)",
        Mahogany: "rgba(186, 56, 1, 1)",
        cadet_blue: "rgba(171, 168, 190, 1)",
        mGreen: "rgba(5, 126, 15, 1)",
        old_Lavinder: "rgba(116, 101, 124, 1)",
      },
      fontFamily: {
        elixia: "'ELIXIA',sans-serif",
        montserrat: "'Montserrat', sans-serif",
      },
      fontSize: {
        superLarge: ["18rem", "6rem"],
      },
      letterSpacing: {
        sWide: "0.6em",
        superWide: "1.2em",
      },
      animation: {
        breath: "breath 5s infinite",
      },
      keyframes: {
        breath: {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.2)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    },
    zIndex: {
      1: "1",
    },
  },
  plugins: [],
};
