import React, { useContext, useState, lazy, Suspense } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import Detail from './Detail';
// let Detail = lazy(() => import('./Detail.js'));
import axios from 'axios';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import Cart from './Cart';

export let InventoryContext = React.createContext();

function App() {
  let [shoes, setShoes] = useState(Data);
  let [inventory, setInventory] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/detail">
                Detail
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <Container className="background">
            <div>Switch는 Swich안에 있는 라우터중에 무조건 하나만 연다</div>
            <h1>20% Season off</h1>
            <p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Container>

          <div className="container">
            <InventoryContext.Provider value={inventory}>
              <div className="row">
                {shoes.map((a, i) => {
                  return <Card shoes={shoes[i]} i={i} key={i} />;
                })}
              </div>
            </InventoryContext.Provider>
            <button
              className="btn btn-primary"
              onClick={() => {
                // axios.post('서버URL', { id: 'codingapple', pw: 1234 });

                //fetch는 Json 파일을 받아와서 Object로 바꾸는 코드를 적어야 한다.
                // 로딩중이라는 UI 띄우기
                axios
                  .get('https://codingapple1.github.io/shop/data2.json')
                  .then(result => {
                    // 로딩중이라는 UI 안보이게 하기
                    setShoes([...shoes, ...result.data]);
                  })
                  .catch(() => {
                    // 로딩중이라는 UI 안보이게 하기
                    console.log('실패입니다.');
                  });
              }}
            >
              더보기
            </button>
          </div>
        </Route>

        <Route path="/detail/:id">
          <InventoryContext.Provider value={inventory}>
            <Detail shoes={shoes} inventory={inventory} setInventory={setInventory} />
          </InventoryContext.Provider>
        </Route>

        <Route path="/cart">
          <Cart></Cart>
        </Route>

        <Route path="/:id">
          <div>아무거나적었을때 이거 보여주세요.</div>
        </Route>
      </Switch>
      {/* <Route path="/blah" component={Modal}></Route> */}
    </div>
  );
}

function Card(props) {
  let inventory = useContext(InventoryContext);
  let history = useHistory();

  return (
    <div
      className="col-md-4"
      onClick={() => {
        history.push(`/detail/${props.shoes.id}`);
      }}
    >
      {props.shoes.id}
      <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width="100%" />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
      <Test shoes={props.shoes} />
    </div>
  );
}
function Test(props) {
  let inventory = useContext(InventoryContext);
  return <p>재고 : {inventory[0]}</p>;
}

export default App;
