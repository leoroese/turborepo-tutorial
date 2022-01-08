module.exports = {
  ...require('config/jest-next'),
  rootDir: '.',
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
  },
}
