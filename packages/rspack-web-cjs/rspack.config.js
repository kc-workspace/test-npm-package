// @ts-check

const path = require("path");

/** @type {import('@rspack/cli').Configuration} */
module.exports = {
  entry: {
    main: "./src/index.js",
  },
  builtins: {
    html: [{ template: "./src/index.html" }],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
