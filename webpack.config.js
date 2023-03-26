const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    filename: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    compress: true,
    hot: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
};
