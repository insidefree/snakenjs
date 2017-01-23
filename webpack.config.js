var webpack = require('webpack');
module.exports = {
  entry: './src/app',
  output: {
    filename: './dist/bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    moduleDirectories: ['node_modules', 'src'],
    extensions: ['.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts?$/, loader: 'ts-loader' }
    ]
  },
  // Add minification
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}