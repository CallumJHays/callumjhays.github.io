// postcss.config.js

module.exports = {
  // nextjs will warn about this not being used,
  // but it actually is; by styled-jsx-postcss-plugin
  plugins: {
    tailwindcss: {},
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": false,
        "nesting-rules": true,
      },
    },
  },
};
