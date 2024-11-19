/** Turn me in apple eslint config file */

module.exports = {
  settings: {
    /** Detect the used React version */
    react: {
      version: "detect",
    },
  },

  /** This files or folders will be ignored by the linter */
  ignorePatterns: [
    /** Ignore npm deps folder */
    "node_modules/",

    /** Ignore babel config file */
    "babel.config.js",

    /** Ignore expo env config file, if present */
    "expo-env.d.ts",
  ],
  overrides: [
    /** For all these file extensions, enable or disable rules. Some of them are disabled due to our project setup */
    {
      files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
      rules: {
        /** Disabled */
        "import/namespace": "off",

        /** enabled prettier error highlight support */
        "prettier/prettier": "error",

        /** Disabled */
        "import/no-unresolved": "off",

        /** Disabled */
        "react/prop-types": "off",

        /** Enable the import order rule, to keep our code clean and ordered */
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

        /** Disabled, we use the typescript specific rule below */
        "no-unused-vars": "off",

        /** This rule detect unused variables and highlight them as error, to keep the code clean */
        "@typescript-eslint/no-unused-vars": ["warn"],
      },
    },
  ],

  /** Import recommended typescript rules and settings */
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],

  /** Use external plugin to handle typescript and other stuffs like prettier */
  plugins: ["@typescript-eslint", "react", "import", "prettier"],
};
