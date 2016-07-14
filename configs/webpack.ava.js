var path = require('path')

module.exports = {
  resolve: {
    extensions: ['', '.js', '.css'],
    root: path.resolve(__dirname, '../src')
  },

  module: {
    loaders: [
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
        loader: 'style-loader!css-loader?modules&importLoaders=1!postcss-loader'
      }
    ]
  }
}
