import fs from 'fs';
let state;
let updateProducts;

console.log("=violation==========================================");
state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

updateProducts = state.order.products;
updateProducts.push({
    no: "s002-002",
    name: "블루 양말",
    price: 2000,
    amount: 1
});

console.log(state.order.products, updateProducts, state.order.products === updateProducts);

console.log("=1==========================================");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}
updateProducts = state.order.products.concat({
    no: "s002-002",
    name: "블루 양말",
    price: 2000,
    amount: 1
});

console.log(state.order.products, updateProducts, state.order.products === updateProducts);

console.log("=2==========================================");
state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}
updateProducts = [...state.order.products, {
    no: "s002-002",
    name: "블루 양말",
    price: 2000,
    amount: 1
}];

console.log(state.order.products, updateProducts, state.order.products === updateProducts);

const o1 = {a:1 , b:2}
const o2 = {b:3 , c:4}
const o3 = Obejct.assign({} , o1 , o2)

