/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blackk: "rgb(30,40,50)",
        primary: "rgb(241, 236, 236)",
        bannerHtext: "rgb(108,117,125)",
        trans: "	rgba(30, 26, 26, 0.6)",
        trans2: "rgba(255, 255, 255, 0.5)",
        btn: "rgba(229,231,235,0.6)",
        subnav: "rgba(255,255,255,.7)",
        footerlinks: "rgb(101,99,99)",
        location: "rgb(79,70,229)",
        media: "rgb(122,102,251)",
        green: "rgb(0,128,0)",
        banner4: "rgb(248,249,250)",
        banner5: "rgb(127,127,127)",
        banner5text: "rgb(128,128,128)",
        btntrans: "rgb(122,102,251)",
        vinila: "rgb(0,0,255)",
        banner2: "rgb(248,249,250)",
      },
      boxShadow: {
        thick: "rgba(0, 0, 0, 1)",
      },
      fontFamily: {
        primaryT: ["Roboto", "sans-serif", "Avro"],
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
