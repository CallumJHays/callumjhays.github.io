// next.config.js
const withMdxEnhanced = require("next-mdx-enhanced");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withVideos = require("next-videos");

module.exports = withPlugins(
  [
    optimizedImages,
    withVideos,
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
