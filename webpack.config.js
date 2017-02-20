/**
 * Created by axetroy on 16-9-15.
 */

const webpack = require('webpack');
const path = require('path');

// webpack.config.js
module.exports = {
  entry: {
    "index": path.join(__dirname, 'index.js'),
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].es5.js'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.coffee', '.js', '.ts']
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
  ]
};