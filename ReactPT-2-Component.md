# Component 컴포넌트

## 들어가기전에..

```

일정 관리 만들꺼임
TodoTemplate 컴포넌트----------------|
TodoInput    컴포넌트-------------   |
TodoList     컴포넌트-------     |   |
TodoItem     컴포넌트--|    |    |   |
_____________________________________

```

컴포넌트 기능은 단순한 템플릿 이상이다. 데이터가 주어졌을 때 이에 맞추어 UI를 만들어주는 것은 물론,
라이프사이클 API를 이용하여 컴포넌트가 화면에서 나타날 때, 사라질 때, 변화가 일어날 때 주어진 처리,
임의 메서드를 만들어 특별한 기능을 부여 할 수 있다.

클래스형 컴포넌트 알아보고 , 컴포넌트를 새로 만들고 사용하는 방법을 알아보겠다.
그리고 컴포넌트의 속성 값을 지닌 porps와 상태 값을 지닌 state를 사용하는 방법도 알아보자.

## 클래스형 컴포넌트

컴포넌트 사용 방법은 두가지다.
클래스형 , 함수형

클래스형 먼저 보자

```
import{Component} from 'react';

class App extends Component {
  render() {
    const name = 'react';
    return <div className="react">{name}</div>
  }
}

export default App;
```

클래스형 컴포넌트와 함수 컴포넌트의 차이점은 클래스형 컴포넌트의 경우 이후 배울 state 기능 및 라이프사이클 기능을 사용할 수 있다는 것과 임의 메서드를 정의할 수 있다는 것.

- Es6 이전의 클래스형

```
function Dog(name){
  this.name = name;
}

Dog.prototype.say = function(){     // prototype 사용
  concole.log(this.name + ': 멍멍');
}

var dog = new Dog('멍멍이');
dog.say();

// 멍멍이 : 멍멍
```

- Es6 클래스형

```
class Dog{
  constructor(name){
    this.name = name;
  }
  say(){
    console.log(this.name + ':멍멍');
  }
}

const dog = new Dog('멍멍이');
// 멍멍이 : 멍멍

```

클래스형 컴포넌트에서는 render함수가 꼭 있어야 하고, 그 안에서 보여 주어야 할 JSX를 반환해야 한다.

어떤걸 쓸까?

먼저 함수 컴포넌트의 장정을 보자.

- 클래스형 보다 선언이 쉽다.
- 메모리도 덜 사용한다.
- 프로젝트를 완성하여 빌드한 후 배포할 때도 함수 컴포넌트를 사용하는 것이 결과물의 파일이 작다.

함수 컴포넌트의 단점은

- 라이플 사이클 API 사용 불가
- state 사용 불가

이 단점은 React v16.8 업데이트 이후 Hooks라는 기능을 도입되면서 해결됨.

리액트 공식 메뉴얼에서는 컴포넌트를 새로 작성할 때 함수 컴포넌트와 Hooks를 사용하도록 권장.
그렇다고 해서 클래스형이 사라지는게 아니다.
알아두자

### 첫 컴포넌트 생성

퍄일 만들기 -->> 코드 작성하기 -->> 모듈 내보내기 및 불러오기

## src 디렉터리에 MyComponent.js 만들기

ES6의 화살표 함수

기존 function 함수와 사용 용도가 조금 다름.
이 분법은 주로 함수를 파라미터로 전달할 때 유요함.

```
setTimeout(function(){
  console.log('');
},1000);
```

```
setTimeout(() => {
  console.log('');
},1000);
```

function을 대체할 수 없는 것은 용도가 다르기 때문이다. 무엇보다 서로 가리키고 있는 this 값이 다르다.

```
function BlackDog(){
  this.name = 'gg';
  retrun {
    name: 'black',
    bark: function(){
      console.log(this.name + ':walwal!');
    }
  }
}

const blackDog = new BlackDog();
blackDog.bark(); //black : walwal!
```

```
function WhiteDog() {
  this.name = 'gg';
  return{
    name : 'black',
    bark: ()=> {
      console.log(this.name + ': 멍멍!');
    }
  }
}

const whiteDog = new WhiteDog();
whiteDog.bark(); // gg : walwal!

```

일반 함수는 자신이 종속된 객체를 this로 가리키며, 화살표 함수는 자신이 종속된 인스턴스를 가리킵니다.
화살표 함수는 값을 연산하여 바로 반환해야 할 때 사용하면 가동성을 높일 수 있습니다.

### 모듈 내보내기 및 불러오기

#### 모듈 내보내기(export)

#### 모듈 불러오기(import)

```
import React from 'react';
import MyComponent from '../../../../ReactPT/todo/src/Mycomponent';

const App = () => {
  return <MyComponent />;
};

export default App;
```

## props

props는 properties 를 줄인 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소입니다.
props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트(현 상황에서는 App 컴포넌트가 부모 컴포넌트입니다.)에서 설정할 수 있습니다.

### JSX 내부에서 props 렌더링

```MyComponent.js
const MyComponent = (props) => {
  return <div>나의 새롭고 멋진 {props.name} 입니다.</div>;
};
```

### 컴포넌트를 사용할 때 props 값 지정하기

```App.js
const App = () => {
  return <MyComponent name="React" />;
};
```

// 결과 : 나의 새롭고 멋진 React 입니다.

### props 기본값 설정 : defaultProps

```App.js
const App = () => {
  return <MyComponent />;
};
```

// 결과 : 나의 새롭고 멋진 입니다.

```MyComponent.js
MyComponent.defaultProps = {
  name: '기본 이름',
};
```

// 결과 : 나의 새롭고 멋진 기본 이름 입니다.

### 태그 사이의 내용을 보여 주는 children

```App.js
const App = () => {
  return <MyComponent>리액트</MyComponent>;
};
```

```MyComponent.js
const MyComponent = (props) => {
  return (
    <div>
      나의 새롭고 멋진 {props.name} 입니다.
      <br />
      children 값은 {props.children}입니다.
    </div>
  );
};
```

// 결과 : 나의 새롭고 멋진 기본 이름 입니다.
children 값은 리액트입니다.

### 비구조화 할당 문법을 통해 props 내부 값 추출하기

현재 MyComponent에서 props 값을 조회할 때마다 props.name, props.children 과 같이 props. 이라는 키워드를 앞에 붙여 주고 있습니다. 이러한 작업을 더 편하게 하기 위해 ES6의 비구조화 할당 문법을 사용하여 내부 값을 바로 추출하는 방법을 알아 보겠다.

```MyComponent.js
const MyComponent = (props) => {
  const { name, children } = props;
  return (
    <div>
      나의 새롭고 멋진 {name} 입니다.
      <br />
      children 값은 {children}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름',
};
export default MyComponent;
```

위에서 사용한 것이 ES6의
객체에서 값을 추출하는 문법을 비구조화 할당이라고 부릅니다. 구조 분해 문법이라고도 불리며, 함수의 파라미터 부분에서도 사용할 수 있습니다. 만약 함수의 파라미터 객체라면 그 값을 바로 비구조화해서 사용하는 것이죠.

```
const MyComponent = ({ name, children }) => {
  return (
    <div>
      나의 새롭고 멋진 {name} 입니다.
      <br />
      children 값은 {children}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름',
};
export default MyComponent;
```

이렇게도 쓸수 있다.

### propTypes를 통한 props 검증

컴포넌트의 필수 props를 지정하거나 props의 타입(type )을 지정할 때는 propTypes를 사용합니다.
컴포넌트의 propTypes를 지정하는 벙법은 defaultProp을 설정하는 것과 비슷합니다. 우선 propTypes를 사용하려면 코드 상단에 import 구문을 사용하여 불러와야 합니다.

```MyComponent.js

import PropTypes from 'react';

`
`
`

MyComponent.propTypes = {
  name: PropTypes.string,
};
```

이렇게 설정해 주면 name 값은 무조건 문자열(string)형태로 전달해야 된다는 것을 의미.
App 컴포넌트에서 name 값을 문저열이 아닌 숫자로 전달한 뒤 개발자 도구의 Console 탭을 열어 보세요.

```
App.js
const App = () => {
  return <MyComponent name={3}> 리액트 </MyComponent>;
};
```

값이 3으로 나오긴 하지만 , 콘솔에 개발자에게 proTypes가 잘못 되었다는 것을 알려 줍니다

```
import MyComponent from './Mycomponent';

const App = () => {
  return <MyComponent name="React"> 리액트 </MyComponent>;
};

export default App;
```

원래대로 ㄱㄱ.

#### isRequired를 사용하여 필수 propTypes 설정.

propTypes를 지정하지 않았을 때 경고 메시지를 띄워 주는 작업을 해 봅시다.
propTypes를 지정할 때 뒤에 isRequired를 붙여 주면 됩니다. 이번에는 favoriteNumber라는 숫잘르 필수props로 지정.

```
Mycomponent.js

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

```

#### 더 많은 PropTypes 종류

- array: 배열
- arrayOf(다른 PropType): 특정 PropType으로 이루어진 배열을 의미합니다. 예를 들어 arrayOf(PropTypes.number) 는 숫자로 이루어진 배열입니다.
- bool : true 혹은 false 값
- func: 함수
- number: 숫자
- object: 객체
- string: 문자열
- symbol:ES6 Symbol
- node : 렌더링할 수 있는 모든 것 (숫자, 문자열, 혹은 JSX 코드 children도 node PropType 입니다.)
- instanceOf(클래스) : 특정 클래스의 인스턴스(ex : instanceOf(MyClass))
- oneOf(['dog','cat']) : 주어진 배열 요소 중 값 하나.
- oneOfType([React.PropTypes.string, PropTypes.number]) : 주어진 배열 안의 종류 중 하나
- objectOf(React.PropType.number): 객체의 모든 키 값이 인자로 주어진 PropType인 객체
- shape({name:PropTypes.string, num:PropTypes.number}) : 주어진 스키마를 가진 객체
- any : 아무 종류

### 클래스형 컴포넌트에서 props 사용하기

사용하려면 render함수에서 this.props를 조회하면 됨.

## state

state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미합니다. props는 컴포넌트가 사용 되는 과정에서 부모 범포넌트가 설정하는 값이며, 컴포넌트 자신의 해당 props를 일기 전용으로만 사용할 수 있습니다. props를 바꾸려면 부모 컴포넌트에서 바꾸어 주어야 합니다..
예를 들어 현재 상황에서는 App 컴포넌트에서 MyComponent를 사용할 때 props를 바꾸어 주어야 값이 변경될 수 있는 거이죠. 반면 MyComponent에서는 전달받은 name 값을 직접 바꿀 수 없습니다.

리액트는 두 가지 종류의 state가 있습니다. 하나는 클래스형 컴포넌트가 지니고 있는 state이고, 다른 하나는 함수 컴포넌트에서 useState라는 함수를 통해 사용하는 state 입니다.

### 클래스형 컴포넌트의 state

새 컴포넌트 Counter.js를 src디렉터리에 생성

```
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // state의 초깃값 설정하기
    this.state = {
      number: 0,
    };
  }
  render() {
    const { number } = this.state; //state를 조회할 때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <button // onClick을 통해 버튼이 클릭될때 호출할 함수
          onClick={() => {
            //this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
export default Counter;

```

위 코드를 해부해보자.

1. 컴포넌트에 state를 설정할 때는 다음과 같이 constructor 메서드를 작성하여 설정합니다. 이는 컴포넌트 생성자 메서드인데요. 클래스형 컴포넌트에서 constructor를 작성할 때는 반드시 super(props)를 호출해 주어야 합니다. 이 함수가 호출되면 현재 클래스형 컴포넌트가 상속받고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 호출해 줍니다. 그 다음에는 this.state 값에 초깃값을 설정해 주없슺니다. 컴포넌트의 state는 객체 형식이어야 합니다.

```
Counter.js

 constructor(props) {
    super(props);
    // state의 초깃값 설정하기
    this.state = {
      number: 0,
    };
  }
```

2. 이제 render 함수를 봅시다.

```
Counter.js

  render() {
    const { number } = this.state; //state를 조회할 때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <button // onClick을 통해 버튼이 클릭될때 호출할 함수
          onClick={() => {
            //this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
```

render함수에서 현재 state를 조회할 때는 this.state를 조회하면 됩니다. 그리고 button 안에 onClick 이라는 값을 props로 넣어 주었는데, 이는 버튼이 클릭될 때 호출시킬 함수를 설정할 수 있게 해 줍니다. 이를 이벤트를 설정한다고 하는데요. 리액트의 이벤트 시스템은 4장에서 더 자세히 알아보겠습니다.

#### state 객체 안에 여러 값이 있을 때

state 객체 안에는 여러 값이 있을 수 있습니다.

```
Counter.js

constructor(props) {
    super(props);
    // state의 초깃값 설정하기
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }
```

#### state를 constructor에서 꺼내기

다른 방식

```

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };
```

이렇게 하면 constructor 메서드를 선언하지 않고도 state 초깃값을 설정할 수 있습니다.

#### this.setState에 객체 대신 함수 인자 전달하기

this.setState를 사용하여 state 값을 없데이트할 때는 상태가 비동기적으로 업데이트됩니다. 만약 다음과 같이 onClick에 설정한 함수 내부에서 this.setState를 두 번 호출하면 어떻게 될까요?

```
onClick={() => {
            //this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
            this.setState({ number: number + 1 });
            this.setState({ number: this.state.number + 1 });
          }}

```

코드를 위와 같이 작성하면 this. setState를 두번 사용하는 것임에도 불고하고 버튼을 클릭할 때 숫자가 1씩 더해진다. this.setState를 사용한다고 해서 state 값이 바로 바뀌지는 않기 때문임.

이에 대한 해결책은 this.setState를 사용할 때 객체 대신에 함수를 인자로 넣어 주는 것입니다.
this.setState의 인자로 함수를 넣어 줄 때는 코드를 다음과 같은 형식으로 작성합니다.

```
this.setState((prevState,props) => {
  retrun{
    // 업데이트하고 싶은 내용
  }
})

```

여기서 prevState는 기존 상태이고, props는 현재 지니고 있는 props를 가리킵니다. 만약 업데이트하는 과정에서 props가 필요하지 않다면 생략해도 됩니다.

화살표 함수에서 값을 바로 반환하고 싶다면 코드 블로 {}를 생략하면 됩니다. 예를 들어, 파라미터 a와 b를 받아 와서 합을 구해 주는 함수를 작성하고 싶다면 다음과 같이 작성할 수 있습니다.

const sum = (a.,b) => a+b;

onClick 에서 두 번째로 this.setState 함수를 사용할 때는 화살표 함수에서 바로 객체를 반환하도록 했기 때문에 prevState => ({}) 와 같은 형태로 코드가 이루어집니다.

#### this.setState 가 끝난 후 특정 적업 실행하기

setState를 사용하여 값을 업데이트하고 난 다음에 특정 작업을 하고 싶을 때는 setState 의 두 번째 파라미터로 콜백(callback) 함수를 등록하고 작업을 처리할 수 있습니다.

```
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log('방금 setState가 호출되었습니다.');
                console.log(this.state);
              }
            );
          }}
```

이렇게 콜백 함수를 등록한 뒤 브라우저를 열어서 버튼을 누르고 개발자 도구의 Console 탭을 확인할수 있다.

### 함수 컴포넌트에서 useState 사용하기

리액트 16.8 이전 버전에서는 함수 컴포넌트에서 state를 사요할 수 없었습니다. 하지만 16.8 이후부터는 useState라는 함수를 사용하여 함수 컴포넌트에도 state를 사용할 수 있게 되었습니다. 사용법은 조금 다릅니다.
이 과정에서 Hooks라는 것을 사용하게 되는데요. Hooks의 종류는 다양하지만, 이 장에서는 useState만 배워 보고 나머지는 8장에서 이어서 공부하겠습니다.

#### 배열 비구조화 할당

Hooks를 사용하기 전에 배열 비구조화 할당이라는 것을 알아봅시다. 배열 비구조화 할당은 이전에 배운 객체 비구조화 할당과 비슷합니다. 즉, 배열 안에 들어 있는 값을 쉽게 추출할 수 있도록 해 주는 문법입니다.

```
const array = [1,2];
const one = array[0];
const two = array[1];
```

array 안에 있는 값을 one과 two에 담아 주는 코드인데요, 위 코드는 배열 비구조조화 할당을 사용하면 다음과 같이 표현할 수 있습니다.

```
const array = [1,2];
const [one, two] = array;
```

훨씬 꺨끔~~

#### useState 사용하기

배열 비구조화 할당 문법을 알고 나면 useState 사용 방법을 쉽게 이해할 수 있습니다. 새 컴포넌트를 만들어서 useState를 사용해 보겠습니다.
src 디렉터리에 Say.js생성

```
import { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요');
  const onClickLeave = () => setMessage('안녕히 가세요!');
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};
export default Say;
```

useState 함수의 인자에는 상태의 초깃값을 넣어 줍니다. 클래스형 컴포넌트에서의 state 초깃값은 객체 형태를 넣어 주어야 한다고 배웠는데요.
useState에서는 반드시 객체가 아니어도 상관없습니다. 값의 형태는 자유입니다. 숫자일 수도, 문자열일 수도,객체일 수도, 배열일 수도 있습니다.

함수를 호출하면 배열이 반환되는데요. 배열의 첫 번째 원소는 현재상태이고, 두 번째 원소는 상태를 바꾸어 주는 함수입니다. 이 함수를 세터(Setter) 함수라고 합니다. 그리고 배열 비구조화 할당을 통해 이름을 자유롭게 정해 줄 수 있습니다. 현재 message와 setMessage라고 이름을 설정해 주었는데요. text와 setText라고 이름을 자유롭게 바꾸어 주어도 상관없습니다.

```
App.js
import Say from './Say';

const App = (props) => {
  return <Say />;
};

export default App;

```

#### 한 컨포넌트에서 useState 여러 번 사용하기

useState는 한 컴포넌트에서 여러 번 사용해도 상관없습니다. 또 다른 상태를 useState로 한번 관리해 봅시다.

```

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파란색
      </button>
    </div>
  );

```

## state를 사용할 때 주의 사항

클래스형 컴포넌트든 함수 컴포넌트든 state를 사용할 때는 주의해야 할 사항이 있습니다. state값을 바꾸어야 할 때는 setState 혹은useState를 통해 전달받은 세터 함수를 사용해야합니다.

아래는 잘못된 코드 입니다.

```
// 클래스형
this.state.number = this.state.number+1;
this.state.array = this.array.push(2);
this.state.object.value = 5;

// 함수형

const[object, setObject] =useState({a:1,b:2});
object.b =2;

```

그렇다면 배열이나 객체를 업데이트해야 할 때는 어떻게 해야할까요? 이런 상황에서는 배열이나 객체 사본을 만들고 그 사본에 값을 업데이트한 수 , 그 사본의 상태를 setState 혹은 세터 함수를 통해 업데이트 합니다.

사본은 만들어 업데이트하는 예시는 다음과 같다.

```
//객체 다루기
const object = {a:1,b:2,c:3};
const nextObject = {...object,b:2}; 사본을 만들어서 b 값만 덮어쓰기
```

```

//배열 다루기
const array = [
  {id:1, value:true},
  {id:2, value:true},
  {id:3, value:false}
];
let nextArray = array.concat({id:4}); // 새 항목 추가
nextArray.filter(item => item.id != 2); //id가 2인 학목 제거
nextArray.map(item.id===1?{...item.value:false}:item)); // id가 1인항목의 value를 false로 설정

```

객체에 대한 사본을 만들 때는 spread 연산자라 불리는 ...을 사용하여 처리하고, 배열에 대한 사본을 만들 때는 배열의 내장 함수들을 활용합니다.

## 정리

이 장에서는 컴포넌트를 만들어서 내보내고 불러오는 방법과 props 및 state를 사용하는 방법을 배워 보았습니다. props와 state는 둘 다 컴포넌트에서 사용하거나 렌더링할 데이터를 담고 있으므로 비슷해 보일 수 있어도 그 역할은 매우 다르낟.
props는 부모 컴포넌트가 설정하고 state는 컴포넌트 자체적으로 지닌 값으로 내부에서 값을 업데이트할 수 있습니다.
props를 이용한다고 해서 값이 무조건 고정적이지 않습니다. 부모 컴포넌트의 state를 자식 컴포넌트의 props로 전달하고 , 자식 컴포넌트에서 특정 이벤트가 발생할 때 부모 컴포넌트의 메서드를 호출하면 props도 유동적으로 사용할 수 있습니다. 이후 만들어 볼 일정 관리 어플에서 이러한 구조로 프로젝트를 설계하게 됩니다.

```
부모컴포넌트=================================
|________________ ________________ _________|
| state  |       | 컴포넌트                 |
|        |       |                          |
|        |       |         | props|  | state|
|        |       |         |      |  |      |
|         →→→→→→→→→→→→→→→→→       |  |      |
|        |       |         |      |  |      |
|        |       |         |      |  |      |
|        |       |         |      |  |      |
|        |       |         |      |  |      |
|--------|-------|--------------------------|

```

이 장에서는 state를 다루기 위해 클래스형 컴포넌트의 state와 함수 컴포넌트의 useState에 대해 배워 보았는데요. 앞으로 새로운 컴포넌트를 만들 때는 useState를 사용할 것을 권장합니다. 이로써 코드가 더 간결해질 뿐만 아니라. 리액트 개발 팀이 함수 컴포넌트와 Hooks를 사용하는 것이 주요 컴포넌트 개발 방식이 될 것이라고 공지했기 때문입니다.
