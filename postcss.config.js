// postcss.config.js
const isProd = process.env.NODE_ENV == "production";

module.exports = {
  plugins: {
    tailwindcss: {},
    "postcss-media-minmax": {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: isProd ? 2 : false,
      features: {
        "custom-properties": false,
        "nesting-rules": true,
      },
    },
    ...(isProd
      ? {
          "postcss-flexbugs-fixes": {},
          cssnano: {},
        }
      : null),
  },
};
