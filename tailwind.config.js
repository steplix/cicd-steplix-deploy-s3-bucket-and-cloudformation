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
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
