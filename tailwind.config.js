module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{ts,tsx,js,jsx}"],
    darkMode: false,
    //TODO: Replace purple with purpleV3 when the V3 version starts developing
    theme: {
        colors: {
            white: "#FFFFFF",
            blue: "#00A7E1",
            red: "#F32735",
            yellow: "#FFDA00",
            purple: "#180228",
            black: "#0D0D0D",
            "purple-light": "#341748",
            purpleV3: "#3C1053"
        },
        fontSize: {
            xs: ["12px"],
            sm: ["14px"],
            base: ["16px"],
            lg: ["18px"],
            xl: ["20px"],
            "2xl": ["22px"],
            "3xl": ["24px"],
            "4xl": ["30px"],
            "5xl": ["32px"],
            "6xl": ["36px"],
            "7xl": ["40px"],
            "8xl": ["42px"],
            "9xl": ["48px"],
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
        },
        boxShadow: {
            steplix: "0 4px 20px 0 rgba(255, 255, 255, 0.25)",
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
