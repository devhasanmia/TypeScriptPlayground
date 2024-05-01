"use strict";
{
    //  Spread Operator
    // Rest Operator
    //  Destructuring
    const primarySchool = {
        one: "Shahin",
        two: "human",
        three: "abul"
    };
    const highSchool = {
        six: "Tes",
        seven: "sdfs"
    };
    const totalClassList = Object.assign(Object.assign({}, primarySchool), highSchool);
    // console.log(totalClassList)
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend} and Welcome to My Youtube Channel`));
    };
    greetFriends("Abdul", "kamdul", "tests");
}
