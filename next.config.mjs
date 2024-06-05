/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.liquor.com", "www.foodandwine.com"],
  },
};

const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
  },
});
export default nextConfig;
