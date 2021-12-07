import React, { useEffact } from 'react';
import { Table } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';

function Cart(props) {
  let state = useSelector(state => state);
  console.log(state.reducer);
  console.log(state.reducer2);
  let dispatch = useDispatch();

  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {state.reducer.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.quan}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch({ type: 'ADD', payload: { i: a.id } });
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      dispatch({ type: 'SUB', payload: { i: a.id } });
                    }}
                  >
                    -
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {state.reducer2 === true ? (
        <div className="my-alert2">
          <p>지금 구매하시면 신규할인 20%</p>
          <button
            onClick={() => {
              dispatch({ type: 'OFF' });
            }}
          >
            Close
          </button>
        </div>
      ) : null}
    </div>
  );
}

//state를 ==> props화 하는 함수
// function stateToProps(state) {
//   console.log(state.reducer);
//   console.log(state.reducer2);
//   return {
//     state: state.reducer,
//     off: state.reducer2,
//   };
// }

// export default connect(stateToProps)(Cart);
export default Cart;
