module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'GreenBadge',
      externals: {
        react: 'React'
      }
    }
  },
  karma: {
    reporters: ['progress', require('karma-junit-reporter')]
  }
}
