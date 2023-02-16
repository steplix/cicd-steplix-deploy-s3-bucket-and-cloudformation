module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx,js,jsx}"],
  darkMode: false,
  //TODO: Replace purple with purpleV3 when the V3 version starts developing
  theme: {
    colors: {
      white: "#FFFFFF",
      "neutral-white": "#F7F7F7",
      blue: "#00A9E0",
      "blue-light": "#B0E1F7",
      red: "#EE2737",
      yellow: "#FEDB00",
      purple: "#3C1053",
      black: "#121212",
      "purple-light": "#341748",
      purpleV3: "#3C1053",
      "grey-transparent": "#3C10531A",
      "grey-70": "#707070",
      "grey-19": "#191919",
    },
    fontSize: {
      xs: ["12px"],
      sm: ["14px"],
      base: ["16px"],
      lg: ["18px"],
      xl: ["20px"],
      "2xl": ["22px"],
      "3xl": ["24px"],
      "4xl": ["28px"],
      "5xl": ["32px"],
      "10xl": ["50px"],
      "11xl": ["60px"],
      "12xl": ["64px"],
      "13xl": ["70px"],
      "14xl": ["80px"],
      "15xl": ["90px"],
      "16xl": ["96px"],
      "17xl": ["100px"],
    },
    fontFamily: {
      sofia: "sofia-pro",
      poppins: ["Poppins", "sans-serif"],
    },
    boxShadow: {
      steplix: "0 4px 20px 0 rgba(255, 255, 255, 0.25)",
      "post-card": "0px 0px 2px 1px rgba(112, 112, 112, 0.2)",
      "step-card": "10px 10px 25px rgba(61, 17, 82, 0.15)",
      "portfolio-card": "0px 7px 16px 0px rgba(100, 100, 111, 0.1)"
    },
    extend: {
      margin: {
        "-98": "-28rem",
        "-99": "-38rem",
      },
      backgroundImage: {
        ["what-we-do-steps"]:
          "url('/assets/img/what-we-do/what-we-do-steps-base.webp')",
        ["what-we-do-steps-sm"]:
          "url('/assets/img/what-we-do/what-we-do-steps-md.webp')",
        ["what-we-do-steps-lg"]:
          "url('/assets/img/what-we-do/what-we-do-steps-lg.webp')",
        ["what-we-do-steps-xl"]:
          "url('/assets/img/what-we-do/what-we-do-steps-xl.webp')",
        ["mountain"]:
          "url('/assets/img/home/mountain.webp')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require("@tailwindcss/line-clamp")
  ],
};
