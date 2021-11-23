const path = require("path");

module.exports = {
  mode: "none",
  entry: path.resolve("src/index.js"),
  output: {
    path: path.resolve("public"),
    filename: "bundle.js",
    assetModuleFilename: "assets/images/[hash][ext]",
  },
  module: {
    rules: [
      {
        test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devtool: "eval-source-map", //디버깅할때 유용 난독화된 소스와 그 전 소스와 맵핑을 해준다.
  devServer: {
    contentBase: path.resolve("public"),
    watchContentBase: true,
    host: "0.0.0.0",
    port: 9999,
    inline: true,
    liveReload: true,
    hot: false,
    compress: true,
    historyApiFallback: true, //해시기반 다음페이지 이전페이지 사용 가능
  },
};
