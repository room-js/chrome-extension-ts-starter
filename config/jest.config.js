module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: '../config/fixJSDomEnv.ts',
  rootDir: '../src',
  testMatch: [ '**/*.test.ts' ],
  testPathIgnorePatterns: ['node_modules', '.cache', 'dist'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    },
  },
  coverageReporters: ['text', 'html'],
  coverageDirectory: '../coverage/'
};
