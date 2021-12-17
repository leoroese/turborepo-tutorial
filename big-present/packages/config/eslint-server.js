module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
  ],
  plugins: ["import"],
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"],
      },
      typescript: {
        alwaysTryTypes: true,
        project: ".",
      },
    },
  },
  overrides: [
    {
      // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching files!
      env: {
        jest: true,
      },
      files: ["**/__tests__/**/*.[jt]s", "**/?(*.)+(spec|test).[jt]s"],
      extends: ["plugin:jest/recommended"],
    },
  ],
  ignorePatterns: [".eslintrc.js"],
}
