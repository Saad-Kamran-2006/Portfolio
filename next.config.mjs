/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "assets-global.website-files.com",
        pathname: "/**",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
