module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: [
    "node_modules/",
    "**/__tests__/*",
    "babel.config.js",
    "**/index.js",
    "scripts/",
    "expo-env.d.ts",
  ],
  overrides: [
    {
      files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
      rules: {
        "import/namespace": "off",
        "prettier/prettier": "error",
        "import/namespace": "off",
        "import/no-unresolved": "off",
        "react/prop-types": "off",
        "import/order": [
          "error",
          {
            groups: [
              ["builtin", "external"],
              "internal",
              "parent",
              "sibling",
              "index",
            ],
            "newlines-between": "always",
          },
        ],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
      },
    },
  ],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  plugins: ["@typescript-eslint", "react", "import", "prettier"],
};
