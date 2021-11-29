# 리액트 혼자 공부하기 책-리액트를 다루는 기술

# 시작

## 1 리액트 이해

- 리엑트는 MVC와 다르게 오직 V(View)만 신경 쓰는 라이브러리
- 특정 부분이 어떻게 생길지 정하는 선언체 = 컴포넌트
- 컴포넌트 != 사용자 인터페이스를 다룰 때 사용하는 템플릿
- 템플릿은 데이터셋이 주어지면 HTML 태그 형식을 문자열로 반환
- 컴포넌트는 재사용이 가능한 API로 수많은 기능을 내장하고 있다.
- 컴포넌트 하나에 해당 컴포넌트의 생김새와 작동 방식을 정의

- 사용자 화면에 뷰를 보여 주는 것이 렌더링
- 어떻게? 성능 좋게 UX 제공
- 비밀은 초기 렌더링과 컴포넌트 데이터 변경으로 다시 실행되는 리렌더링 알아야함

### 1 초기 렌더링

- 어떻게 보일지를 정하는 초기 렌더링 = render함수

> render() {...}

- 컴포넌트 어떻게 생겼는지 정의
- html 형식 아님
- 뷰가 어떻게 생겼고 어떻게 작동하는지에 대한 정보를 지닌 객체를 반환
- 컴포넌트 안에 컴포넌트 가능
- 이때 render함수 실행하면 그 내부에 있는 컴포넌트들도 재귀적으로 렌더링
- 최상위 컴포넌트의 렌더링 작업이 끝나면 지니고 있는 정보들을 사용하여 HTMl 을 만들고,
- 이를 우리가 정하는 실제 페이지의 DOM 요소 안에 주입한다.

> 렌더링 -->> HTML 마크업 /* <div>...</div> */ --주입-->>DOM------>>화면

- render는 두가지 절차를 따름.
- 문자열 형태의 HTMl 코드 생성한후
- DOM에 해당 내용을 주입하면 이벤트가 적용됨.

### 2 조화 과정

#### 업데이는 어떻게?

리엑트는 "업데이트"보단 "조화 과정(reconciliation)"이 맞는말이다.
컴포넌트에서 데이터변화가 있을 때 우리가 보기에는 변화에 따라 뷰가 변형 되는 것처럼 보이지만,
사실 새로운 요소로 갈아 끼운다.
이것도 render()가 한다.
컴포넌트는 데이터를 업데이트했을 때 단순히 업데이트한 값을 수정하는 것이 아니라, 새로운 데이터를 가지고 render함수 또 호출
그러면 그 데이터 지닌 뷰 생성
but 이때 render함수가 반환하는 결과를 곧바로 DOM에 반영 하지 않고,
이전에 render 함수가 만들었던 컴포넌틑 정보와 현재 render 함수가 만든 컴포넌 정보를 비교

더 구체적으로 이해를 위해 Virtual DOM을 알아야 함.

## 2 리엑트 특징

리엑트의 특징 중 하나 Virtual DOM을 사용

### DOM이란?

Document Object Model의 약어.
객체로 문서 구조를 표현하는 방법으로 XML이나 HTML로 작성한다.

웹 브라우저는 DOM을 활용하여 객체에 JS와CSS를 적용.
DOM은 트리 형태 특정 노드 찾거나 수정 제거 삽입 가능

DOM은 느림?

HTML은 정적 JS로 동적으로.
그래서 느림?
DOM은 빠른데 DOM에 변화가 일어나면 CSS 다시 연산하고 레이아웃 구성하고 페이지를 리페인팅한다. 이 과정이 시간을 허비함
그래서?
DOM 조작은 필연적
그 대신 최소한으로 조작하는 방식으로 개선
> 리엑트는 Virtual DOM 방식을 사용하여 DOM 업데이트를 추상화함으로써 DOM 처리 횟수를 최소화하고 효율적으로 진행

### Virtual DOM

가상 DOM이다.

- 리액트에서 데이터가 변하여 웹 브라우저에 실제 DOM을 업데이트할 때는 세 가지 절차를 밟는다.
    1. 데이터를 업데이트하면 전체 UI를 Virtual DOM에 리렌더링.
    2. 이전 Virtual DOM에 있던 내용과 현재 내용을 비교
    3. 바뀐 부분만 실제 DOM에 적용.

무조건 좋은거냐?

리액트 메뉴얼에는 다음 문장이 있다.
> 우리는 다음 문제를 해결하려고 리액트를 만들었다. "지속적으로 데이터가 변화하는 대규모 애플리케이션 구축하기"
간편 작업(정적페이지)는 오히려 독.
리액트와 Virtual DOM이 언제나 제공할 수 있는 것은 바로 업데이트 처리 간결성.
UI를 업데이트 하는 과정에서 생기는 복잡함을 모수 해소하고, 더웃 쉽게 업데이트에 접근할 수 있다.

### 다른특징?
오직 View 만 담당
프레임웍 x 라이브러리 o
기타 기능은 직접 구현
BUT 걱정 ㄴㄴ
라우터는 react-router
Ajax 는 axios나 fetch
상태 관리는 리덕스나 MobX
등드 취향대로 스택을 설정할 수 있다는 장점이 있다.
여러 라이브러리를 접해야 한다는 단점도 있다.

## 3 작업 환경 설정

### Node.js와 npm

Node.js는 필수
Node.js는 크롬V8 Js 엔진으로 빌드한 JS Runtime이다.
웹 브라우저가 아니라도 js사용 가능

설치는 알아서

### 에디터

1. ESLint  : 자바스크립트 문법 및 코드 스타일을 검사해 주는 도구
2. Reactjs Code Snippets : 리액트 컴포넌트 및 라이프사이클 함수를 작성할 때 단축 단어 사용 가능. charalampos karypidis설치
3. Prettier-Code formatter : 코드 스타을 자동으로 정리

### git 설치 알어서

## Code 이해

모듈F <<〓〓 모듈D <<〓〓〓
  ↓                        ↖
  ↓   모듈A <〓 모듈B <〓 index.js 〓〓〓〓〓〓〓〓 <strong>webpack</strong> 〓〓〓〓〓〓〓> 합친 (bundeled JS File)
  ↓                        ↙
모듈G <<〓〓 모듈C <<〓〓〓

Webpack을 사용하면 SVG 파일 CSS 파일도 불러와서 사용할 수 있습니다.
이렇게 파일들을 불러오는 건 Webpack의 로더(loader) 라는 기능이 담당한다.

ex)
css-loade : CSS 파일 불러옴
file-loader : 웹 폰트나 미디어 파일 등을 불러옴
babel-loader : JS 파일을 최신 js 문법으로 작성된 코드를 바벨이라는 도구를 사용하여 ES5으로 변환

왜 ES5으로 변환?
구버전 웹 브라우저 호환때문에,,, 앞으로 배우게 될JSX라는 문법도 정식 자버스크립트 아니라서 babel-loader가 변환해준다.

## JSX

### 보기 쉽고 익숙하다. like HTML
### 활용도가 높다. Can use <div></div><span></span>

#### Note
#### ReactDOM.render는 무엇?
- 이 코드는 컴포넌트를 페이지에 렌더링하는 역할, react-dom 모듈을 불러와 사용 가능.
#### React.StrictMode 는 무엇?
- 리액트 레거시 기능을 사용하지 못하게 하는 기능
- ref,componentWillMany 등 사라질 예날 기능 사용했을 때 경고를 준다.

## JSX 문법
편하지만 문법이 있다.

### 감싸인 요소

컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸야 한다.

`<div></div>`로 감싸도 되지만

리액트 v16이상 부터 도입된 Fragment라는 기능을 사용해도 된다.

import {Fragment} from 'react';

`<div></div>` 대신 `<Fragment></Fragment>` 를 쓰면 된다.
`<></>` 그냥 이렇게 적도 된다.

### 자바스크립트 표현
JSX가 단순히 DOM 요소를 렌더링하는 기능밖에 없었으면 뭔가 아쉬웠을 것.
하지만 JSX 안에서 자바스크립트 표현식을 사용 가능
코드를 {...} 중괄호로 감싸면 됨.

#### Note
#### const 와 let
const 는 ES6 문법에서 새로 도입되었으며 한번 지정하고 나면 변경이 불가능한 상소룰 선언할 때 사용하는 키워드
let은 동적인 값을 담을 수 있는 변수를 선언할 때 사용하는 키워드

var는 scope(해당 값을 사용할 수 있는 코드 영역)가 함수 단위입니다.

자바를 공부한 사람은 그냥 변수와 상수 느낌인거 같다.

변수에는 let 상수에는 const 사용하자.

더 쉽게 기본적으로 const 사용하고 해당 값이 바뀔때는 let을 사용.

### IF 문 대신 조건부 연산자

JSX에서는 if문을 사용할 수 없다.
하지만 사용해야 할 때가 있다.
그땐 삼항 연산자
` {name === '리액트' ? (True일때) : (False일때) } `

### AND 연산자(&&)를 사용한 조건부 렌더링

개발하다 보면 특정 조건을 만족할 때 내용을 보여 주고, 만족하지 않을 때 아예 아무것도 렌더링 하지 않아야 하는 상황이 있다.
이때도 조건부 연산자 사용.

` {name === '리액트' ? (True일때) : (null) } `
 
하지만 이것보다 더 짧은 코드로 똑같은 작업을 할 수 있다.
&&연산자를 사용해서 조건부 렌더링을 할 수 있다.

`{name === '리액트' ? (True일때) : (null) } `
대신
` {name === '리액트' && (True일때) `

### undefined 렌더링 하지 않기

리액트 컴포넌트에서는 함수에서 undefined만 반환하여 렌더링하는 상황을 만들면 안됨.

어떤 값이 undefined일 수도 있다면, OR(||)연산자를 사용하면 해당 값이 undefined일 때 사용할 값을 지정할 수 있다.

` name || 'undefined일때 이 값이 나옴' `

반면 JSX 내부에서 undefined를 렌더링하는 것은 괜찮다.

물론 내부에서도 가능하다.

` <>{name || 'undefined일때 이 값이 나옴'}<> `

### 인라인 스타일링

리액트에서 DOM요소에 스타일을 적용할 때는 문자열 형대로 넣는 것이 아니라 객체 형태로 넣어 주어야 합니다.
background-color 처럼 - 문자가 포함되어 있는건 - 문자를 없애고 카멜 표기법 으로 작성.
backgroundColor

예시
```
function App(){
    const name = '리액트'
    const style = {
        backgroundColor: 'black',
        color : 'aquq',
        fontSize : '48px',
        fontWeight : 'bold',
        padding : '16', //단위를 생략하면 px로 지정됨.
    };
    return <div style={style}> name </div>
}

export default App;

```
혹은
```
function App(){
    const name = '리액트'
    return <div backgroundColor: 'black',
        color : 'aquq',
        fontSize : '48px',
        fontWeight : 'bold',
        padding : '16'> name </div>
}

export default App;

```
둘다 됨

### class 대신 className

### 태그는 꼭 닫아야함.

### 주석
JSX내부에서 주석을 쓸때는 {/* 이렇게 해야함 */}

### ESLint와 Prettier 적용

내가 자주쓰는 거
```
{
  "editor.formatOnSave": true,
  "javascript.format.enable": false,
  "prettier.printWidth": 140,
  "prettier.singleQuote": true
}

```
