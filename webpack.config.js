const path = require('path')

module.exports = {
  entry: ['./lib/index.js'],
  mode: 'production',
  output: {
    path: path.join(__dirname, 'lib', 'bundle'),
    filename: 'simple-print.min.js',
  },
  optimization: {
    splitChunks: {
      chunks:'all'
    }
  }
}