module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{ts,tsx,js,jsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                steplix: {
                    blue: "#2D82FA",
                    red: "#FA503C",
                    yellow: "#FFD232",
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
