const createConfig = require("@kcws/eslint-config");

module.exports = createConfig({
  cwd: __dirname,
  profile: "node",
  typescript: false,
  prettier: false,
  custom: {
    parserOptions: {
      sourceType: "module",
    },
  },
});
