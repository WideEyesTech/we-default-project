var path = require('path')
var precss = require('precss')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var DEBUG = !process.argv.includes('--release')
var GLOBALS = {
  'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
  __DEV__: DEBUG
}

module.exports = {
  entry: {
    'app': './src/index.js',
    'vendor': './src/vendor.js',
    'polyfills': './src/polyfills.js'
  },

  resolve: {
    extensions: ['', '.js', '.css'],
    root: path.resolve(__dirname, '../src')
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties', 'transform-object-rest-spread']
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html'
      },
      {
        loader: 'file?name=assets/[name].[hash].[ext]',
        exclude: /node_modules/,
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1!postcss')
      }
    ]
  },

  postcss: function () {
    return [
      precss,
      autoprefixer
    ]
  },

  plugins: [
    new webpack.DefinePlugin(GLOBALS),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}
