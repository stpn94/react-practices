const path = require("path");

module.exports = {
  entry: path.resolve("src/index.js"), // 의존성 분석 처음 시작 resolve=해결하다.
  output: {
    // path설정, fileName 설정
    path: path.resolve("public"),
    filename: "bundle.js",
  },
};
