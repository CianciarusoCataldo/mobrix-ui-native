const typescript = require("rollup-plugin-typescript2");
const del = require("rollup-plugin-delete");
const terser = require("@rollup/plugin-terser");
const copy = require("rollup-plugin-copy");
const pkg = require("../package.json");

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
      typescript({
        rollupCommonJSResolveHack: false,
        clean: true,
      }),
    ],
    treeshake: true,
    external: Object.keys(pkg.peerDependencies || []),
  },
];
