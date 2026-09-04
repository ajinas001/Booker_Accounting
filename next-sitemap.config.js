/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.bookeraccounting.com',
  generateRobotsTxt: false, // Serve robots.txt statically for exact custom content
  outDir: 'public',
  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (
      [
        '/accounting-bookkeeping',
        '/taxation',
        '/audit-assurance',
        '/aml',
        '/business-advisory',
        '/business-support',
        '/contact',
      ].includes(path)
    ) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (['/about', '/faq', '/blog'].includes(path)) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.startsWith('/blog/')) {
      priority = 0.7;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};

