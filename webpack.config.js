const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    vendor: "./src/vendor.js"
  },
  output: {
    // filename: "[name].[hash].js"
    filename: "[name].[chunkhash].js"
    // filename: "[name].[contenthash].js"
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   loaders: ["style-loader", "css-loader"]
      // },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader"
        ]
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
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css"
    })
  ]
};
