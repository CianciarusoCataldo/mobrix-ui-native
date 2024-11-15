const typescript = require("rollup-plugin-typescript2");
const del = require("rollup-plugin-delete");
const postcss = require("rollup-plugin-postcss");
const terser = require("@rollup/plugin-terser");
const postcssImport = require("postcss-import");

const pkg = require("../package.json");

module.exports = [
  {
    input: "src/index.ts",
    output: [
      {
        file: "playground/src/mobrix-ui-preview/index.cjs",
        format: "cjs",
        banner: "require('./styles.css')",
        plugins: [terser()],
      },
      {
        file: "playground/src/mobrix-ui-native-preview/index.mjs",
        format: "esm",
      },
      {
        file: "test-app/src/mobrix-ui-native-preview/index.cjs",
        format: "cjs",
        plugins: [terser()],
      },
      {
        file: "test-app/src/mobrix-ui-native-preview/index.mjs",
        format: "esm",
      },
      {
        file: pkg.main,
        format: "cjs",
        plugins: [terser()],
      },
      {
        file: pkg.module,
        format: "esm",
      },
    ],
    plugins: [
      del({ targets: ["dist/*", "playground/src/mobrix-ui-preview"] }),
      typescript({
        rollupCommonJSResolveHack: false,
        clean: true,
      }),
    ],
    treeshake: true,
    external: Object.keys(pkg.peerDependencies || []),
  },
];
