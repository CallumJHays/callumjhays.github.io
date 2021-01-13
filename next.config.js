const withPlugins = require("next-compose-plugins");
const withOptimizedImages = require("next-optimized-images");
const withVideos = require("next-videos");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withPlugins(
  [
    [
      withOptimizedImages,
      {
        responsive: {
          adapter: require("responsive-loader/sharp"),
        },
      },
    ],
    withVideos,
    withBundleAnalyzer,

    // your other plugins here
  ],
  {
    pageExtensions: ["js", "jsx", "ts", "tsx"],
  }
);
