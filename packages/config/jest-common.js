module.exports = {
  resetMocks: true,
  moduleDirectories: ['node_modules'], // maybe UI needs to go here?
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
  },
}
