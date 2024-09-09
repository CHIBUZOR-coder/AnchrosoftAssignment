/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        header: "rgb(255,255,255)",
        headerBtnText: "rgb(205,162,116)",
        trans: "	rgba(0, 0, 0, 0.2)",
        transxl: "rgba(0, 0, 0, 0.7)",
        trans2: "rgba(255, 255, 255, 0.5)",
        banner3: "rgb(4,48,64)",
        banner3Text2: "rgb(85,85,85)",
        darkText: "rgb(4,48,64)",
        banner5: "rgb(248,248,248)",
        banner6: "rgb(24,28,35)",
      },
      boxShadow: {
        thick: "rgba(0, 0, 0, 1)",
      },
      fontFamily: {
        primaryT: ["Roboto", "sans-serif", "Avro"],
      },
      fontSize: {
        head: "14px",
        small: "6px",
      },
      height: {
        big: "400px",
        big2: "580px",
        big3: "600px",
        pics: "150px",
      },

      width: {
        pics: "150px",
      },
      right: {
        primary: "30px",
      },
      top: {
        minus: "-30px",
      },
      left: {
        primary: "30px",
      },
      maxHeight: {
        first: "440px",
      },

      minHeight: {
        primary: "620px",
      },
      border: {
        primary: "2px",
      },
    },
  },
  plugins: [],
};
