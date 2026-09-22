const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "production",

  entry: "./src/main.js",

  output: {
    filename: "js/main-[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles-[contenthash].css",
    }),

    new HtmlWebpackPlugin({
      template: "./index.html",
    }),

    new CleanWebpackPlugin(),

    new VueLoaderPlugin(),
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

      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
};
