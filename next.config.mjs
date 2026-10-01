/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: '/review',
        destination: 'https://g.page/r/CVCc_ObDpOEREBM/review',
        statusCode: 301,
      },
      {
        source: '/reviews',
        destination: 'https://g.page/r/CVCc_ObDpOEREBM/review',
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
