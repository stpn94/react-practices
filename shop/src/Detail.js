import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { getDropdownMenuPlacement } from 'react-bootstrap/esm/DropdownMenu';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import { InventoryContext } from './App.js';
import { Nav } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

let Box = styled.div`
  padding: 20px;
`;
let Title = styled.h4`
  font-size: 25px;
  color: ${props => props.색상};
`;

function Detail(props) {
  let [alert, setAlert] = useState(true);
  let [inputData, setInputData] = useState();
  let [pressedTab, setPressedTab] = useState(0);
  let inventory = useContext(InventoryContext);
  let [instate, setInstate] = useState('');

  useEffect(() => {
    // 컴포넌트 (Detail)
    // update 될 때 mount 되었을때
    // 특정코드 를 실행할 수있다.

    // axios.get().then().catch();

    console.log('saaaaaaaay');
    // 2초 후에 alert 창을 안보이게 해 주셈
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    //실행할것이 많으면 순서대로 되니까 순서대로 하셈.
    // return 은 컴포넌트가 사라질때!!!!!!!!!!
    return () => {
      // timer가 끝나기전에 페이지에서 나가버리면 오류가 생길수 있기때문에 timer는 없애줘야함
      clearTimeout(timer);
    };
    //중요!!! 업데이트 될때도 실행된다. 그러기때문 주의!!!!! 위의 코드가 중복으로 실행될수 있기 때문이다.
    //끝에 대괄호[]에 실행될 조건을 지정할수 있다.
    //alert라고 넣으면 alert가 변경이 될때만 실행 useEffect가 실행된다.
    //그럼 [] 빈칸으로 해놓으면 <Detail>태그가 등장시에만 사용가능하다. ===페이지가 등장했을때만 사용가능
  }, []);

  let { id } = useParams();
  let getProd = props.shoes.find(function (prod) {
    return prod.id == id;
  });
  let history = useHistory();

  return (
    <div className="container">
      <Box>
        <Title className="red">Detail</Title>
      </Box>
      {alert === true ? (
        <div className="my-alert2">
          <p>재고가 얼마 남지 않았습니다.</p>
        </div>
      ) : null}
      {inputData}
      <input
        onChange={e => {
          setInputData(e.target.value);
        }}
      />

      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes1.jpg`} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{getProd.title}</h4>
          <p>{getProd.contents}</p>
          <p>{getProd.price} 원</p>
          <Info inventory={props.inventory}></Info>
          <button
            className="btn btn-danger"
            onClick={() => {
              props.setInventory([props.inventory[0] - 1]);
              props.dispatch({ type: '항목추가', payload: { id: getProd.id, name: getProd.title, quan: 1 } });
              history.push('/cart');
            }}
          >
            주문하기
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              //   history.goBack();
              history.push('/');
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              setInstate(false);
              setPressedTab(0);
            }}
          >
            Option 0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              setInstate(false);
              setPressedTab(1);
            }}
          >
            Option 1
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <CSSTransition in={instate} classNames="wow" timeout={500}>
        <TabContent pressedTab={pressedTab} setInstate={setInstate} />
      </CSSTransition>
    </div>
  );
}

function TabContent(props) {
  useEffect(() => {
    props.setInstate(true);
  });
  if (props.pressedTab === 0) {
    return <div>0번째 내용입니다.</div>;
  } else if (props.pressedTab === 1) {
    return <div>1번째 내용입니다.</div>;
  }
}

function Info(props) {
  return <p>재고 : {props.inventory[0]}</p>;
}

function stateToProps(state) {
  console.log(state.reducer);
  console.log(state.reducer2);
  return {
    state: state.reducer,
    off: state.reducer2,
  };
}

export default connect(stateToProps)(Detail);
