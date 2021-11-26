import fs from 'fs';
let state;
let updateOrder;
state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}


console.log("=violation =========================================")

updateOrder = state.order;
updateOrder.receive = '김해시 삼계'


console.log(state.order , updateOrder , state.order == updateOrder)



console.log("=1 =========================================")

Object.assign({}, state.order , {
    receive: '김해시 삼계'
})


console.log(state.order , updateOrder , state.order == updateOrder)