const typescript = require("rollup-plugin-typescript2");
// const del = require("rollup-plugin-delete");
const terser = require("@rollup/plugin-terser");

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
      typescript({
        rollupCommonJSResolveHack: false,
        clean: true,
      }),
    ],
    treeshake: true,
    external: Object.keys(pkg.peerDependencies || []),
  },
];
