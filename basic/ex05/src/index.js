import ReactDOM from 'react-dom'; //rendering 한다.
import { App } from './App'       

//real Dom이랑 싱크 맞춘다. HIML 안에 맞춘다.
ReactDOM.render(App(), document.getElementById('root'));