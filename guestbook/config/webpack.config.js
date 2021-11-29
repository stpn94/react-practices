const path = require('path');

module.exports = (env) => {
  // 처음 의존성 검사를 하는 곳
  const entry = path.resolve(`src/index.js`);

  return {
    mode: 'development',
    entry: entry, // 예제가 01, 02.... 이렇게 src에 나누어져 있기 때문에 entry포인트를 설정
    output: {
      path: path.resolve('./public'),
      filename: 'bundle.js',
      assetModuleFilename: 'assets/images/[hash][ext]',
    },
    // css 번들링 설정
    module: {
      rules: [
        {
          // babel loader 설정
          test: /\.js$/i,
          exclude: /node_module/,
          // 바벨 로더한테 webpack config가 어디있는지 알려줘야함 파일을 옵겨놓았기 때문에
          loader: 'babel-loader',
          options: {
            configFile: path.resolve('config/babel.config.json'),
          },
        },
        {
          // 어떤 파일을 로더로 로딩할지 설정 정규표현식으로 .css로 끝나는 파일은 자바스크립트로 바꿔준다?
          test: /\.(sa|sc|c)ss$/i,
          use: ['style-loader', { loader: 'css-loader', options: { modules: true } }, 'sass-loader'],
        },
        {
          // [image-uploader] webpack 4 까지만 가능 5는 페기됨
          test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i, // 파일 이름 지정
          type: 'asset/resource',
        },
      ],
    },
    devtool: 'eval-source-map', // 에러가 나면 번들링한 소스의 라인을 가져다 주기 때문에 원래 소스와 맵핑해서 에러를 알려주는 설정 디버그에 용의
    // 데브 서버 설정
    devServer: {
      // 감시해야할 디렉토리
      host: '0.0.0.0',
      port: 9999,
      liveReload: true,
      hot: false,
      compress: true, // 압축 설정
      historyApiFallback: true, // 라우팅시 가상 url 404 에러를 없에고  main으로 돌려주는 설정
    },
  };
};
