module.exports = {
    trailingSlash: true,
    exportPathMap: async function (defaultPathMap) {
        return {
            "/": { page: "/" },
            "/about-us": { page: "/about-us" },
            "/process": { page: "/process" },
            "/jobs": { page: "/jobs" },
        };
    },
};
