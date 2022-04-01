const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
    // const baseUrl = "https://steplix.com/";
    const baseUrl = "http://steplixweb.s3-website-sa-east-1.amazonaws.com";

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${baseUrl}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
        </url>
        <url>
            <loc>${baseUrl}/process</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
        </url>
        <url>
            <loc>${baseUrl}/jobs</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
        </url>
        <url>
            <loc>${baseUrl}/about-us</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
        </url>
      </urlset>
    `;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;
