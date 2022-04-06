module.exports = (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        trailingSlash: true,
        exportPathMap: async function (
            defaultPathMap,
            { dev, dir, outDir, distDir, buildId }
        ) {
            return {
                "/": { page: "/" },
                "/about-us": { page: "/about-us" },
                "/process": { page: "/process" },
                "/jobs": { page: "/jobs" },
            };
        },
    };
    return nextConfig;
};
