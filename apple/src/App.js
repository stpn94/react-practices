import React, { useState } from 'react';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState('');

  // function 반복된UI() {
  //   var 어레이 = [];
  //   for (var i = 0; i < 3; i++) {
  //     어레이.push(<div>안녕하세요</div>);
  //   }
  //   return 어레이;
  // }

  // {
  //   반복된UI();
  // }

  // let Array = [2, 3, 4];

  // let NewArray = Array.map(function (a) {
  //   return a * 2;
  // });

  // function 제목바꾸기() {
  //   var newArray = [...글제목];
  //   newArray[0] = '여자코트 추천';
  //   글제목변경(newArray);
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {글제목.map(function (글, i) {
        return (
          <div className="list" key={i}>
            <h3
              onClick={() => {
                누른제목변경(i);
              }}
            >
              {글}
              <span
                onClick={() => {
                  따봉변경(따봉 + 1);
                }}
              >
                💛
              </span>
              {따봉}
            </h3>
            <p>2월 15일 발행</p>
            <hr />
          </div>
        );
      })}

      {/* <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      /> */}

      <button
        onClick={() => {
          modal변경(!modal);
        }}
      >
        열고 닫기
      </button>

      {modal === true ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>제목{props.글제목[1]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
