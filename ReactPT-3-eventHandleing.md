# 4장 이벤트 핸들링.

사용자가 웹 브라우저에서 DOM 요소들과 상호 작용하는 것을 이벤트(event)라고 합니다. 예를들어 버튼에 마수르 커서를 올렸을 때는 onmouseover 이벤트를 실행하고, 클릭했을 때는 onclick 이벤트를 실행합니다. Form 요소는 값이 바뀔 때 onchange 이벤트를 실행하죠. HTML을 사용한 적이 있다면 매우 익숙할 것 입니다. HTML 에서 DOM요소에 이벤트를 설정하는 방법을 한번 보자

## 리액트의 이벤트 시스템

### 이벤트를 사용할 때 주의사항

1. 카멜표기
2. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달
3. DOM 요소에만 이벤트를 설정할 수 있다.
   - 우리가 만든 컴포넌트에는 이벤트를 자체적으로 설정할 수 없습니다.
   - <MyComponent onClick={doSomething}/> 은 클릭할때 함수를 실행하는것이 아니라 onClick인 props를 MyComponent에게 전달하는 것.
   - 따라서 컴포넌트에 자체적으로 이벤트를 설정할 수는 없습니다. 하지만 전달받은 props를 컴포넌트 내부의 DOM 이벤트로 설정할 수는 있죠.
   - <div onClick={this.props.onClick}> {/*(...)*/} </div>

### 이벤트 종류

1. Clipboard
2. Composition
3. keyboard
4. Focus
5. Form
6. Mouse
7. Selection
8. Touch
9. UI
10. Wheel
11. Media
12. Image
13. Animation
14. Transition

여기서 흔히 사용하는 이벤트만 4장에서 다룰꺼.

## 예제로 이벤트 핸들링 익히기

- 실습단계
  - 컴포넌트 생성 및 불러오기
  - onChange 이벤트 핸들링하기
  - 임의 메서드 만들기
  - input 여러개 다루기
  - onKeyPress 이벤트 핸들링하기

### 컴포넌트 생성 및 불러오기

```
App.js

import EventPractice from './EventPractice';

const App = () => {
  return <EventPractice />;
};

export default App;


## 함수 컴포넌트로 구현해 보기

## 정리
```

```
import React, { Component } from 'react';

class EventPractice extends Component {
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
      </div>
    );
  }
}

export default EventPractice;

```

### onChange 이벤트 핸들링하기

#### onChange 이벤트 설정

EventPractice 컴포넌트에 input 요소를 렌더링하는 코드와 해당 요소에 onChange 이벤트를 설정하는 코드를 작성합니다. 다음 코드를 EventPractice 컴포넌트의 render 메서드에 작성하세요.

```
EventPractice.js
 <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          onChange={(e) => {
            console.log(e);
          }}
        />
```

여기서 콘솔에 기록되는 e 객체 SyntheticEvent는 웹 브라우저의 네이티브 이벤트를 감싸는 객체입니다. 네이티브 이벤트와 인터페이스가 같으므로 순수 자바스크립트에서 HTML 이벤트를 다룰 때와 똑같이 사용하면 됩니다.
SyntheticEvent(합성 이벤트) 는 네이티브 이벤트와 달리 이벤트가 끝나고 나면 이벤트가 초기화되므로 정보를 참조할 수 없습니다. 예를 들어, 0.5초 뒤에 e 객체를 참조하면 e 객체 내부의 모든 값이 비워지게 됩니다.
만약 비동기적으로 이벤트 객체를 참조할 일이 있다면 e.persist()(persist=끈질기다) 함수를 호출해 주어야 합니다.

```
EventPractice.js

console.log(e.target.value);
```

#### state에 input 값 담기

이번에는 state에 input 값 담기 입니다.

3장에서 배운 대로 생성자 메서드인 constructor 에서 state 초깃값을 설정하고, 이벤트 핸들링 함수 내부에서 this.setState 메서드를 호출하여 state를 업데이틑해 봅시다.

그 다음에는 input의 value 값을 state 에 있는 값을 설정하세요.

```
import { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: '',
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={(e) => {
            this.setState({
              message: e.target.value,
            });
          }}
        />
      </div>
    );
  }
}

export default EventPractice;
```

#### 버튼 누를 때 comment 값을 공백으로 설정

검증해보자 .
input 요소 코드 아래쪽에 button을 하나 만들고, 클릭 이벤트가 발생하면 현재 comment 값을 메시지 박스로 띄운 후 commnet 값을 공백으로 설정하겠습니다.

```
class EventPractice extends Component {
  state = {
    message: '',
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={(e) => {
            this.setState({
              message: e.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({ message: '' });
          }}
        >
          확인
        </button>
      </div>
    );
  }
}
```

### 임의 메서드 만들기

이벤트에서 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달합니다. 라고 배웠습니다.
그렇기에 이벤트를 처리할 때 렌더링을 하는 동시에 함수를 만들어서 전달해 주었습니다.
이 방법 대신 함수를 미리 준비하여 전달하는 방법도 있습니다. 성능상으로는 차이가 거의 없지만, 가독성은 훨씬 높습니다. (하지만 상황에 따라 렌더링 메서드 내부에서 함수를 만드는 것이 더 편할 때도 있습니다. 이는 6장 컴포넌트 매핑을 다룰 때 배웁니다.)

#### 기본 방식

```
import { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: '',
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleClick() {
    alert(this.state.message);
    this.setState({
      message: '',
    });
  }
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input type="text" name="message" placeholder="아무거나 입력해 보세요" value={this.state.message} onChange={this.handleChange} />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
```

함수가 호출될 때 this는 호출부에서 따라 결정되므로, 클래스의 임의 메서드가 특정 HTMl 요소의 이벤트로 등록되는 과정에서 메서드와 this의 관계가 끊어져 버립니다. 이 때문에 임의 메서드가 이벤트로 등록되어도 this를 컴포넌트 자신으로 제대로 가리키기 위해서는 메서드를 this와 바인딩(binding)하는 작업이 필요합니다. 만약 바인딩하지 않는 경우라면 this가 undefined를 가리키게 됩니다.

현재 constructor 함수에서 함수를 바인딩하는 작업이 이루어지고 있습니다.

#### Property Initializer Syntax를 사용한 메서드 작성

메서드 바인딩은 생성자 메서드에서 하는 것이 정석입니다. 하지만 이작업을 불편하다고 느낄 수 있다. 새 메서드를 만들 때마다 constructor도 수정해야 하기 때문이다. 이 작업을 좀더 간단하게 하는 방법이 바로 바벨의 transform-class-properties 문법을 사용하여 화살표 함수 형태로 메서드를 정의하는 것.

```
  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.message);
    this.setState({
      message: '',
    });
  };
```

### input 여러게 다루기

input이 여러 개일 때는 어떻게 작업할까요? 메서드를 여러 개 만들어야 할까요? 물론 그것도 하나의 해법이기는 합니다만, 더 쉽게 처리하는 방법이 있습니다.

바로 event 객체를 활용하는 것입니다. e.target.name. 값을 사용하면 됩니다. onChange 이벤트 핸들러에서 e.target.name은 해당 인풋의 name을 가리킵니다. 지금은 message겠죠? 이 값을 사용하여 state를 설정하면 쉽게 해결할 수 있습니다. 코드를 한번 살펴봅시다.

다음 코드에서는 render 함수에서 name값이 username인input을 렌더링해 주었고 , state 쪽에도 username 이라는 겂을 추가해 주었습니다. 그리고 handleChange도 조금 변경해 주었습니다.

```
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(`${this.state.username} : ${this.state.message}`);
    this.setState({
      username: '',
      message: '',
    });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input type="text" name="username" placeholder="사용자명" value={this.state.message} onChange={this.handleChange} />
        <input type="text" name="message" placeholder="아무거나 입력해 보세요" value={this.state.message} onChange={this.handleChange} />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}
```

여기서는

```
handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
```

이코드가 핵심이다.

객체 안에서 key를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용됩니다.

예를 들어

```
const name='variantKey';
const object ={
  [name]:'value'
}
```

위 코드는
(참고 : 'variantKey=변형키')

```
{
  'variantKey':'value'
}
```
