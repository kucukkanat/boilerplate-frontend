let path = require("path");
const Aliases = require('./webpack.aliases.js')
module.exports = {
  target: "web",
  entry: {
    App: "./src/App.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].build.js",
    publicPath: "dist"
  },
  devtool:'source-map',
  resolve:{alias:Aliases},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "react"]
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ]
  },
  devServer: {
    compress: true,
    contentBase: ".",
    port: 8080,
    host: "0.0.0.0",
    historyApiFallback: {
      index: "index.html"
    },
    https: process.env.production,
    headers: {
      "franx-environment": process.env.production
        ? process.env.production
        : "development"
    }
  }
};
