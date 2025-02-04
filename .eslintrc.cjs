/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: ["@typescript-eslint", "drizzle"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
  ],
  rules: {
    // Disable or loosen strict rules
    "@typescript-eslint/no-unused-vars": "warn", // Make unused vars a warning instead of an error
    "@typescript-eslint/prefer-nullish-coalescing": "off", // Disable nullish coalescing rule
    "no-console": "off", // Allow console.log statements

    // Keep your existing rules
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    "drizzle/enforce-delete-with-where": [
      "error",
      {
        drizzleObjectName: ["db", "ctx.db"],
      },
    ],
    "drizzle/enforce-update-with-where": [
      "error",
      {
        drizzleObjectName: ["db", "ctx.db"],
      },
    ],
  },
};

module.exports = config;