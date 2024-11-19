const typescript = require("rollup-plugin-typescript2");
const del = require("rollup-plugin-delete");
const terser = require("@rollup/plugin-terser");
const copy = require("rollup-plugin-copy");
const pkg = require("../package.json");
const alias = require("@rollup/plugin-alias");
const path = require("path");

module.exports = [
  {
    input: "src/index.ts",
    output: [
      {
        file: "playground/src/mobrix-ui-native-preview/index.cjs",
        format: "cjs",
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
      del({ targets: ["dist/*", "playground/src/mobrix-ui-native-preview"] }),
      alias({
        entries: [
          {
            find: "@assets",
            replacement: path.resolve(__dirname, "src/assets"),
          },
        ],
      }),
      typescript({
        rollupCommonJSResolveHack: false,
        clean: true,
      }),
      copy({
        targets: [
          { src: "src/assets/imgs/*", dest: "dist/imgs" },
          {
            src: "src/assets/imgs/*",
            dest: "playground/src/mobrix-ui-native-preview/imgs",
          },
        ],
        hook: "writeBundle",
      }),
    ],
    treeshake: true,
    external: Object.keys(pkg.peerDependencies || []),
  },
];
