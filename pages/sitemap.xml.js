const Sitemap = () => {};

export async function getServerSideProps({ res }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://modernsoftware.co.uk";
  
  // Static pages
  const staticPages = [
    "",
    "/portfolio",
    "/services",
    "/about",
    "/contactus",
  ];

  // Get dynamic portfolio pages
  const portfolioData = require("../data/portfolio.json");
  const portfolioPages = portfolioData.map(
    (item) => `/portfolio/${item.id}`
  );

  // Get dynamic service pages
  const servicesData = require("../data/services.json");
  const servicePages = servicesData.map((item) => `/services/${item.id}`);

  const allPages = [...staticPages, ...portfolioPages, ...servicePages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map((url) => {
    return `
  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${url === "" ? "1.0" : "0.8"}</priority>
  </url>`;
  })
  .join("")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default Sitemap;
