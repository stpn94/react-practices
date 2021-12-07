import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
// import { BrowserRouter } from "react-router-dom";
// HashRouter는 개발하는 중에 쓰기 좋다. localhost/# --> 동작한다. #때문에 front 에서 좀더 쓰기 좋다. ==서버가 없을때(=서버에 전송되지않음).
// BrowserRouter는 Browser에서 경로를 착각할수 있다. 이거 사용할려면 따로 설정이 필요하며 라우트 안되게 해야한다.
let defaultAlert = true;

function reducer2(state = defaultAlert, Action) {
  if (Action.type == 'OFF') {
    state = !state;
  }

  return state;
}

let defaultState = [
  { id: 0, name: '멋진신발', quan: 2 },
  { id: 1, name: '예쁜신발', quan: 1 },
];

function reducer(state = defaultState, Action) {
  if (Action.type === '항목추가') {
    // state안에 id: 액션.데이터인게 있냐?
    let found = state.findIndex(a => {
      return a.id === Action.payload.id;
    });
    if (found >= 0) {
      let copy = [...state];
      copy[found].quan++;
      return copy;
    } else {
      let copy = [...state];
      copy.push(Action.payload);
      return copy;
    }
  } else if (Action.type === 'ADD') {
    let copy = [...state];
    copy[Action.payload.i].quan++;
    return copy;
  } else if (Action.type === 'SUB') {
    let copy = [...state];
    copy[Action.payload.i].quan--;
    return copy;
  } else {
    return state;
  }
}

let store = createStore(combineReducers({ reducer, reducer2 }));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
