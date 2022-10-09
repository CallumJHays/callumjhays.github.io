const withPlugins = require("next-compose-plugins");
const withOptimizedImages = require("next-optimized-images");
const withVideos = require("next-videos");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

// compatability hack for nextjs >=12.2.3
// https://github.com/cyrilwanner/next-compose-plugins/issues/59#issuecomment-1261357370
module.exports = async (phase) =>
  withPlugins(
    [withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })],
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
    ],
    {
      pageExtensions: ["js", "jsx", "ts", "tsx"],
      // https://github.com/cyrilwanner/next-optimized-images/issues/284#issuecomment-1242425959
      images: {
        disableStaticImages: true,
      },
    }
  )(phase, { undefined });
