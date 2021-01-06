// next.config.js
const withMdxEnhanced = require("next-mdx-enhanced");
const withImageElement = require("next-image-element");

module.exports = withImageElement(
  withMdxEnhanced({
    defaultLayout: true,
    remarkPlugins: [],
    rehypePlugins: [],
  })({
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  })
);
