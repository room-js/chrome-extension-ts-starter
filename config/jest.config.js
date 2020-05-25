module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'js'],
  rootDir: '../src',
  testMatch: [ '**/__tests__/**/*.test.ts' ],
  testPathIgnorePatterns: ['node_modules', '.cache', 'dist'],
  transformIgnorePatterns: ['node_modules/'],
  transform: {
    '^.+\\.ts?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['../config/jest.setup.js'],
  globals: {
    chrome: true,
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