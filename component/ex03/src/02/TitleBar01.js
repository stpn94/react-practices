import React, { Component } from 'react';

export default class TitelBar01 extends Component {
  constructor() {
    // super(arguments); 이렇게 쓰면 안됨 arguments를 분해 시켜야한다. 그래서 스프레드 연산자 쓴다.
    // arguments 의 배열(유사) 상관업이 자동적으로 인덱스하나하나를 분해해 준다.
    // (arguments[0],arguments[1],arguments[2],arguments[3]) 이렇게 된다.
    super(...arguments);
    // this.no = 10;
    this.state = {
      no: 10,
    };
  }

  // 확장 객체 리터럴에서 지원 해준다 ↙↙↙↙↙↙↙↙↙↙
  onClickHeader(e) {
    // this.no++;
    // console.log('TitelBar01 Click!!', ":", this.no);
    // this.render(); // render는 스스로 부르지 말자 , react에서 하지말자.

    console.log('TitelBar01 Click!!', ':', this.state.no);
    this.setState({
      no: this.state.no + 1,
    });
  }

  render() {
    return (
      <h1
        /* {onClickHeader} 그냥 이렇게 쓰면 안되고 this를 써야한다. */
        onClick={this.onClickHeader.bind(this)}
        style={{
          cursor: 'pointer',
        }}
      >
        ex03 - Functional Event Handler(Class Component)
        {this.state.no}
        {/*this.no*/}
      </h1>
    );
  }
}
