var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
      './entry.js'
    ],
    output: {
      path: __dirname + "/dist",
      filename: "[name].js",
    },
    module: {
        loaders: [
          { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass') },
          { test: /\.css$/, loader: 'style!css' },
          { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url?limit=8192' },
          { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "svg-url-loader" }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new HtmlWebpackPlugin({
          inject: 'body',
          template: 'index.html'
        })
    ]
}
