const path = require("path");
 
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js"
  },
  watch:true,
  devServer: {
    contentBase: path.resolve("dist"),
    port: 8080
  },
  module: {
    rules: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(png|jpg|gif)$/i, loader: "url-loader"}
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"]
  }
}
