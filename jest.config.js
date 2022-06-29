module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/components$1',
    '^@pages(.*)$': '<rootDir>/pages$1',
    '^@test-utils(.*)$': '<rootDir>/test-utils$1',
  },
  testEnvironment: 'jsdom',
};
