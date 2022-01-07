module.exports = {
  ...require('config/jest-next'),
  rootDir: '.',
  moduleNameMapper: {
    '^@src(.*)$': '<rootDir>/src$1',
  },
}
