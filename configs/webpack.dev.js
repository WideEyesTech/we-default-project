var path = require('path')
var validate = require('webpack-validator')
var webpackMerge = require('webpack-merge')
var commonConfig = require('./webpack.common.js')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = validate(webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: 'http://localhost:3000/',
    path: path.resolve(__dirname, '../dist')
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
}))
