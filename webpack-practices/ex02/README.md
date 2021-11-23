## webpack-practice: ex02
1. 프로젝트 생성
```bash
$ mkdir ex02
$ cd ex02
$ npm init -y
$ npm i -D webpack webpack-cli express
```
2. 프로젝트 구조
    <pre>
      /ex02
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
        |--- dev-server.mjs   
    <pre>

3. webpback.config.js
```json
const path = require('path');

module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    }
}
package.json

  "scripts": {
    "debug": "node dev-server.mjs",
    "build": "npx webpack src//* index.js -o ./public 삭제 가능 */"
  },
  
```

4. 빌드하기
```bash
$ npx webpack    
```
webpack.config.js의 output 섹션에 지정한 ./public/bundle.js 로 번들링 됨.

5. test server 실행
```bash
$ node dev-server.mjs
```