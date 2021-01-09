module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-css-modules"],

  processors: [
    [
      "@mapbox/stylelint-processor-arbitrary-tags",
      {
        startTag: "\\s*<style jsx>{`",
        endTag: "\\s*`}</style>",
      },
    ],
  ],

  rules: {
    "no-empty-source": null,
  },
};
