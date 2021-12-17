module.exports = {
  ...require("config/eslint-next"),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
}
