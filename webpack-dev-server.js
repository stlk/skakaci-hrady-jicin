var webpack         = require('webpack'),
    path            = require('path'),
    nodeModulesPath = path.join(__dirname, 'node_modules'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  debug: true,
  verbose: true,
  watch: true,
  entry: [
    './entry.js',
  ],
  output: {
    filename: 'bundle.js'
  },

  resolve: {
    modulesDirectories: ['node_modules'],
  },

  module: {
    loaders: [
      { test: /\.sass$/, loader: 'style!css!sass?indentedSyntax' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url?limit=8192' },

      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "svg-url-loader" }
    ]
  },
  devServer: {
    info: true,
    hot: true
  },
  plugins: [
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'index.html'
    }),
  ]
};
