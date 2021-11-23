## ex06: React(JSX 기반) 애플리케이션으로 리팩토링

1.  프로젝트 생성
    ```bash
    $ mkdir ex06
    $ cd ex06
    $ npm init -y
    $ npm i -D webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react 
    $ npm i react react-dom
    ```
2.  프로젝트 디렉토리
    <pre>
      /ex06
        |--- package.json
        |--- package-lock.json
        |--- node-modules
        |--- public
        |       |--- index.html
        |       |--- bundle.js    [빌드결과물]
        |--- src
        |       |--- index.js
        |       |--- App.js
        |--- webpack.config.js
        |--- babel.config.json
    <pre>

3.  scripts
    "scripts": {
      "start": "npx webpack serve --progress",
      "build": "npx webpack"
    }

4.  webpack.config.js
    ```javascript
    const path = require('path');

    module.exports = {
        entry: path.resolve('src/index.js'),
        output: {
            path: path.resolve('public'),
            filename: 'bundle.js'
        },
        module: {
          rules:[{
              test: /\.js$/i,
              exclude: /node_modules/,
              loader: 'babel-loader'
          }]
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
5.  babel.config.json
    ```json
    {
      "presets":[["@babel/env", {
          "targets": {
              "ie": "11",
              "edge": "80",
              "firefox": "73",
              "chrome": "82",
              "opera": "69",
              "safari": "13"
          }
      }], "@babel/react"]
    }
    ```

6.  빌드(번들링)
    ```bash
    $ npm run build
    ```

7.  test(개발 서버 실행)
    ```bash
    $ npm start
    ```