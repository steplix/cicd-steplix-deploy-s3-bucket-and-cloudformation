module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{ts,tsx,js,jsx}"],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                steplix: {
                    blue: "#00A7E1",
                    red: "#F32735",
                    yellow: "#FFDA00",
                    lilac: "#180228",
                    purple: "#341748",
                    black: "#0D0D0D",
                },
            },
            fontSize: {
                base: ["16px", { lineHeight: "19px" }],
                lg: ["18px", { lineHeight: "22px" }],
                xl: ["20px", { lineHeight: "20px" }],
                xxl: ["22px", { lineHeight: "22px" }],
                "2xl": ["24px", { lineHeight: "33px" }],
                "3xl": ["30px", { lineHeight: "30px" }],
                "4xl": ["36px", { lineHeight: "36px" }],
                "5xl": ["50px", { lineHeight: "50px" }],
                "6xl": ["64px", { lineHeight: "64px", letterSpacing: "0.1em" }],
            },
        },
        boxShadow: {
            steplix: "0 4px 20px 0 rgba(255, 255, 255, 0.25)",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
