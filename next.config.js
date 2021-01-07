// next.config.js
const withMdxEnhanced = require("next-mdx-enhanced");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withVideos = require("next-videos");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withPlugins(
  [
    optimizedImages,
    withVideos,
    withBundleAnalyzer,
    withMdxEnhanced({
      defaultLayout: true,
      remarkPlugins: [],
      rehypePlugins: [],
    }),

    // your other plugins here
  ],
  {
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  }
);
