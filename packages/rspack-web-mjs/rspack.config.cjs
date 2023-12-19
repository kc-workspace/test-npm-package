// @ts-check

const path = require("path");
const rspack = require("@rspack/core");

/** @type {import('@rspack/cli').Configuration} */
module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new rspack.HtmlRspackPlugin({ template: "./src/index.html" })],
};
