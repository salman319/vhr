/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "#0D6963",
        green: "#224641",
        gray: "#6E6E6E",
        light: "#D2D2D2",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right bottom, #6bd190, #53b484, #3f9876, #307c66, #266154, #256555, #246956, #246d56, #3b9162, #61b567, #92d965, #cefb5f)',
        'hover-gradient': 'linear-gradient(90deg, #4ab98d, #018f86 50.5%, #66c98c)',
        'coin-gradient': 'linear-gradient(192deg, rgb(102 201 140 / 60%) 13%, rgb(102 201 140 / 64%) 53%, rgb(11 209 196 / 52%) 100%)',
        'sidebar-gradient': 'linear-gradient(180deg, #55cb977a -30.98%, #0f212ede)',
        'banner-gradient': 'linear-gradient(180deg, #55cb977a -30.98%, #0f212ede)',
        'dump-gradient': 'linear-gradient(180deg, #cb12127a -11.98%, #0f212e00)',
        'vs-gradient': 'linear-gradient(180deg, #000000 -11.98%, #007b28)',
        'spin-gradient': 'linear-gradient(180deg, #22312a -11.98%, #0f212e00)',
        'mine-gradient': 'linear-gradient(180deg,#55cb977a -30.98%,#0f212ede)',
        'skin-gradient': 'linear-gradient(153deg, #141414 15%, #5f5f5f26 63%);',
        'radial-gradient': 'radial-gradient(#3b8c6f, #173135);',
        'card-gradient': 'linear-gradient(180deg, #254938 -11.98%, #4d4d4d14)',
        'green-gradient': 'linear-gradient(90deg, #01705F 0%, #02D6B6)',
        'hover-gradient': 'linear-gradient(180deg, #01705F 0%, #02D6B6)',
      },
      boxShadow: {
        'coin': '0 1px 17px #56d587',
        'custom': '0 0px 10px #0000002e;',
        'cards': '0 -2px 4px #5ff5da',
        'modal': '0 0px 18px #45b68a;',
        'tap': 'inset 0 0 3px 13px #33bd8f;',
        'coins': 'inset 0 0 3px 8px #33bd8f;',
        'dump': '0 0px 6px #f7e696;',
      }
    },
  },
  plugins: [],
};
