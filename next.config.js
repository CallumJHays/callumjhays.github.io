// next.config.js
const withMdxEnhanced = require("next-mdx-enhanced");

module.exports = withMdxEnhanced({
  defaultLayout: true,
  remarkPlugins: [],
  rehypePlugins: [],
})({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});
