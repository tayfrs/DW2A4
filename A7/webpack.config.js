const path = require("path");
const HtmlWebpPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDevelopent = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopent ? "development" : "production",
  devtool: isDevelopent ? "eval-source-map" : "source-map",
  entry: path.resolve(__dirname, "src", "index.jsx"),
  output: {
    /* entry: 'src/index.jsx' /*Indica o arquivo inical que vai começar a nossa aplicação*/
    path: path.resolve(__dirname, "dist", ""),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    static: path.resolve(__dirname, "public"),
    hot: true,
  },
  plugins: [
    isDevelopent && new ReactRefreshWebpackPlugin(),
    new HtmlWebpPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: {
              plugins: [
                isDevelopment && require.resolve("react-refresh/babel"),
              ].filter(Boolean),
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
