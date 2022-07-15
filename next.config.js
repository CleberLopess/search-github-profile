const isProd = process.env.NODE_ENV === "production";
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  assetPrefix: isProd ? "/search-github-profile/" : "",
};
