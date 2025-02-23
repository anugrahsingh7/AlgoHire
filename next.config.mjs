/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    middlewareMatcher: [
      {
        source: "/Hire*",
      },
    ],
    appDir: true,
  },
};

export default nextConfig;
