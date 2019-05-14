const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    a: "./src/a.js",
    b: "./src/b.js"
  },
  output: {
    filename: "[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [new CleanWebpackPlugin()]
};
