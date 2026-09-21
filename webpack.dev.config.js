const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",

  entry: "./src/app.js",

  output: {
    filename: "JS/app-[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    devMiddleware: {
      writeToDisk: true,
    },
    compress: true,
    port: 9000,
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "CSS/style-[contenthash].css",
    }),

    new HtmlWebpackPlugin({
      template: "index.html",
    }),

    new CleanWebpackPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },

      {
        test: /\.png/,
        type: "asset/resource",
      },

      {
        test: /\.(eot|ttf|woff|woff2)$/i,
        type: "asset/inline",
      },
    ],
  },
};
