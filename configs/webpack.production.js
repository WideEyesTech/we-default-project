var path = require('path')
var webpack = require('webpack')
var validate = require('webpack-validator')
var webpackMerge = require('webpack-merge')
var commonConfig = require('./webpack.common.js')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = validate(webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js',
    path: path.resolve(__dirname, '../dist')
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    new ExtractTextPlugin('[name].[hash].css')
  ]
}))
