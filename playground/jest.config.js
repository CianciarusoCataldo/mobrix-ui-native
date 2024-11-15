module.exports = {
  preset: "react-native",
  setupFilesAfterEnv: ["<rootDir>/__tests__/mock/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/__tests__/mock/"],
  rootDir: ".",
  collectCoverage: true,
  collectCoverageFrom: [
    "app/*.{ts,tsx}",
    "src/**/*.{ts,tsx}",
    "!**/_layout.tsx",
  ],
  moduleNameMapper: {
    "^@src/(.*)$": "<rootDir>/src/$1",
    "^@images/(.*)$": "<rootDir>/src/assets/images/$1",
    "^@sprites/(.*)$": "<rootDir>/src/assets/images/sprites/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@atoms/(.*)$": "<rootDir>/src/components/atoms/$1",
    "^@molecules/(.*)$": "<rootDir>/src/components/molecules/$1",
    "^@organisms/(.*)$": "<rootDir>/src/components/organisms/$1",
    "^@screens/(.*)$": "<rootDir>/app/$1",
  },
};
