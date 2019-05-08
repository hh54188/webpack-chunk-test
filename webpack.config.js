const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    vendor: "./src/vendor.js"
  },
  output: {
    // filename: "[name].[hash].js"
    // filename: "[name].[chunkhash].js"
    filename: "[name].[contenthash].js"
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   loaders: ["style-loader", "css-loader"]
      // },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ExtractTextPlugin({
      filename: "[name].[contenthash].css"
    })
  ]
};
