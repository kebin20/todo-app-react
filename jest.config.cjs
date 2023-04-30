module.exports = {
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.css$": "jest-css-modules-transform",
  },
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./jest.setup.tsx"],
  preset: "ts-jest",
  testMatch: ["<rootDir>/src/**/*.test.(ts|tsx)"],
  // For mocking imported SVG file
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/svgMock.tsx",
  },
};
