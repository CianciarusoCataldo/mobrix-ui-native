/* eslint-disable */

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = "assets/icons/";

const SIZES = {
  "adaptive-icon": { width: 1024, height: 1024 },
  favicon: { width: 48, height: 48 },
  icon: { width: 1024, height: 1024 },
};

const inputIcon = process.argv[2] || "icon.png";

for (const iconType in SIZES) {
  const outputFile = path.join(OUTPUT_DIR, `${iconType}.png`);
  fs.rmSync(outputFile, { recursive: true, force: true });
  sharp(inputIcon)
    .resize(SIZES[iconType].width, SIZES[iconType].height, {
      fit: "inside",
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .toFile(outputFile)
    .then(() => {
      console.log(`${iconType} icon generated : ${outputFile}`);
    })
    .catch((err) => {
      console.error(
        `Error generating ${iconType}:
        `,
        err
      );
    });
}
