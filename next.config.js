// next.config.js
const withMdxEnhanced = require("next-mdx-enhanced");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins(
  [
    optimizedImages,
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
