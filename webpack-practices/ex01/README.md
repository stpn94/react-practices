## webpack-practice: ex01
1. 프로젝트 생성
```bash
$ mkdir ex01
$ cd ex01
$ npm init -y
$ npm i -D webpack webpack-cli express
```
2. 프로젝트 구조
    <pre>
      /ex01
        |--- package.json
        |--- package-lock.json
        |--- node-modules
        |--- public
        |       |--- index.html
        |       |--- main.js
        |--- src
        |       |--- index.js
        |       |--- App.js
        |--- dev-server.mjs   
    <pre>

3. 빌드하기
```bash
$ npx webpack ./src/index.js    
```
./dist/main.js 로 번들링 됨

```bash
$ npx webpack ./src/index.js -o ./public    
```
./public/main.js 로 번들링 됨

3. test server 실행
```bash
$ node dev-server.mjs
```
ES6 모듈로 실행(확장자를 .mjs) 해야 함.




