"use strict";
// Learning Function
// Normal Function
// Arrow Function
function add(num1, num2) {
    return num1 + num2;
}
const addArrowFun = (num1, num2) => {
    return num1 + num2;
};
add(20, 30);
const customer = {
    name: "MD. HASAN MIA",
    balance: 10,
    addBalance(balance) {
        return `My New Balance is ${this.balance + balance}`;
    }
};
// console.log(customer.addBalance(200))
let arr = [2, 4, 6, 3];
const newArr = arr.map((item) => item * item);
// console.log(newArr)
