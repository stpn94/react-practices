## Core 라이브러리
1.  변환 규칙을 소스에 적용해서 변환 파일을 생성한다. 
2.  변환 규칙은 가지고 있지 않다
3.  바벨 플러그인이 변환 규칙을 가지고 있다.

## 코어 라이브러리 설치
```bash
$ npm i -D @babel/core
```

## 코어 라이브러리 사용해보기
```javascript
const babel = require('@babel/core');
const result = babel.transform("const fn = () => 1;", {});

console.log(result);
```

