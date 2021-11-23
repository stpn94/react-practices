## webpack-practice: ex06
1. 프로젝트 생성
```bash
$ mkdir ex06
$ cd ex06
$ npm init -y
$ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass image-loader
```
2. 프로젝트 구조
    <pre>
      /ex04
        |--- package.json
        |--- package-lock.json
        |--- node-modules
        |--- public
        |       |--- assets
        |       |       |--- images
        |       |               |--- logo.svg  [build 결과]  
        |       |--- index.html
        |       |--- bundle.js                 [build 결과]  
        |--- src
        |       |--- index.css
        |       |--- App.scss
        |       |--- logo.svg
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
    module: {
        rules: [{
            test: /\.css$/i,
            use:['style-loader', 'css-loader']
        }, {
            test: /\.s[ac]ss/i,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },{
            test: /\.svg$/i,
            loader: 'file-loader',
            options: {
                outputPath: '/assets/images',
                name: '[name].[ext]'
            }
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

4. 빌드하기(image 복사를 위해서 먼저 꼭 해야함)
```bash
$ npx webpack    
```

5. test server 실행
```bash
$ npx webpack serve --progress
```