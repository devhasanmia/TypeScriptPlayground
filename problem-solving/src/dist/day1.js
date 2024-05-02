"use strict";
{
    /**
     * Problem 1: User Profile Interface
     * Define a TypeScript interface UserProfile that represents a user's profile with the following properties:
     * userId (string), username (string), email (string), and age (number, optional).
     */
    {
        const user1 = {
            userId: "1",
            username: "hasanmia",
            email: "hasanmiaweb@gmail.com",
            age: 23, // optional property
        };
        // console.log(user1);
    }
    /**
     *  Problem 2: Order Status Enum
     *  Create a TypeScript enum OrderStatus that represents the status of an online order with the following values:
     *  Pending, Shipped, Delivered, Cancelled.
     */
    let OrderStatus;
    (function (OrderStatus) {
        OrderStatus["Pending"] = "Pending";
        OrderStatus["Shipped"] = "Shipped";
        OrderStatus["Delivered"] = "Delivered";
        OrderStatus["Cancelled"] = "Cancelled";
    })(OrderStatus || (OrderStatus = {}));
    const myOrder = OrderStatus.Pending;
    // console.log(myOrder);
    // Problem 3: Maximum of Two Numbers
    const maxOfTwoNumbers = (num1, num2) => {
        return num1 > num2 ? num1 : num2;
    };
    // console.log(maxOfTwoNumbers(10, 20));
    // Problem 4: Maximum of Three Numbers
    const maxOfThreeNumbers = (num1, num2, num3) => {
        return maxOfTwoNumbers(num1, maxOfTwoNumbers(num2, num3));
    };
    // console.log(maxOfThreeNumbers(10, 20, 30));
    // Problem 2: Greeting Function
    const greeting = (name) => {
        return `Hello, ${name}`;
    };
    // console.log(greeting("Hasan"));
    // Problem 3: Array Sum
    const numarray = [1, 2, 3, 4, 5, 6];
    let sum = 0;
    // for (let i = 0; i < numarray.length; i++) {
    //   sum += numarray[i];
    // }
    // anaother way solve this problem
    // const sumArr = (arrNumber: number[]) => {
    //   arrNumber.reduce((accumulator: number, currentValue: number) => {
    //     return (accumulator += currentValue);
    //   }, 0);
    // };
    const sumArr = (arrNumber) => {
        return arrNumber.reduce((accumulator, currentValue) => {
            console.log(`Acc, ${accumulator}, Crr ${currentValue}`);
            return accumulator + currentValue;
        }, 0); // It's a good practice to provide an initial value for the accumulator
    };
    console.log(sumArr(numarray));
    console.log(sum);
}
