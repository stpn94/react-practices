## Immutability(불변성) of Component's State :  컴포넌트 상태 변화의 불변성


### 기본 개념

1. 절대 컴포넌트의 상태를 직접으로 변화 시켜서는 안된다
2. 컴포넌트의 상태는 불변적으로 다루어야 한다.
3. 항상 setState , useState Hook 함수 호출에서 반환하는 seeter 를 사용한다.


### 이유 :

1. 직접적으로 this.state를 변경하면 React의 상태 관리를 우회 -> React 원리를 어기는 거고 애플리케이션이 오작동 할 수 있다.

2. this.state를 직접 조작한 내용은 this.set_state 호출로 무효화가 된디.

3. 나중에 성능 개선의 여지가 없다
- 객체의 변경 유무 검사 시 객체의 동질성 비교 -> 고비용
- 객체읩 변경 유무 검사 시 객체의 동일성 비교 -> 저비용

4. 결론은 변경하지 말고 교체하라
5. 함수형 프로그래밍을 지원하는 자바스크립트 에서는 4번 내용이 표준이 아니다. 
   -> 의도치 않게 변경할 가능성이 있다.




### Violation Example
```javascript
this.setState({
    emails: [{}, {}, {}]
})
const emails = this.state.emails;
emails.push({});

```


### How I
1. 비파괴 배열 메소드 및 연산자 : map , filter , concat , ...(spread) 연산자
2. src/ 01


### How II

1. Object.assign을 이용해서 변경이 적용된 새로운 객체를 생성하는 방법
2. src/02

### How III

1. I ,II 는 Nest Object가 있는 경우 까다롭다.
    -Object.assign 은 deep copy 지원 하지 않음
    -deep clone은 고비용이다.
    - 직접 하는 방법은 관리가 어렵고 코드에 실수가 있을 수 있다.

2. 자바스크립트 언어적 특징이 때문이 할 수 없다.
3. React Addon 에 복잡하고 중첩된 객체의 변경을 도와주는 immutality helper 사용한다.
   - src/04
   - 적용
        ```bash
        $ npm i react-addons-update
        ```

```bash 

$ npm i react-addons-update

```

```javascript
import update from 'react-addons-update';

const newObject = update(objectInState, {[where]:{ [what]:updateValue }});

```
   - what 명령
          1) $push * [배열 요소 추가]
          2) $splice
          3) $unsift
          4) $set * [속성 변경]
          5) $merge
          6) apply

### How IV







