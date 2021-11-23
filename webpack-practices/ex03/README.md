## webpack-practice: ex03
1. 프로젝트 생성
```bash
$ mkdir ex03
$ cd ex03
$ npm init -y
$ npm un -D express // 익스프레스 사용 이제 사용안함
$ npm i -D webpack webpack-cli webpack-dev-server
```
2. 프로젝트 구조
    <pre>
      /ex03
        |--- package.json
        |--- package-lock.json
        |--- node-modules
        |--- public
        |       |--- index.html
        |       |--- bundle.js
        |--- src
        |       |--- index.js
        |       |--- App.js
        |--- webpack.config.js [webpack 설정 파일]
    <pre>

3. webpback.config.js
```json
const path = require('path');

module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve('public'),
        host: "0.0.0.0",
        port: 9999,
        inline: true,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }    
}
```

4. 빌드하기
```bash
$ npx webpack    
```

5. test server 실행
```bash
$ npx webpack serve --progress
```