import fs from 'fs';
let state;
let updateOrder;
state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}


let updateOrder = Object.assign({

}, state.order , {receive: "김해시 삼계"});


console.log(updateOrder)

