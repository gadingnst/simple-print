const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const pkg = require('./package.json')

let mode, outputFile

if (process.env.NODE_ENV === 'build') {
  mode = 'production';
  outputFile = pkg.name + '.min.js';
} else {
  mode = 'development';
  outputFile = pkg.name + '.dev.js';
}

module.exports = {
  entry: ['./src/index.js'],
  mode: mode,
  plugins: [new CompressionPlugin()],
  output: {
    path: path.join(__dirname, 'lib', 'bundle'),
    filename: outputFile,
    library: pkg.name,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules : [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
}