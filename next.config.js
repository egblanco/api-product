/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://ornate-scone-f87809.netlify.app/api/*",
      },
    ];
  },
};

module.exports = nextConfig;
