"use strict";
{
    // 
    // ternary operator || optional chaining || nullish coalescing operator
    const age = 65;
    if (age >= 18) {
        console.log("You are an adult");
    }
    else {
        console.log("You are a child");
    }
    const isAdult = age >= 18 ? "You are an adult" : "You are a child";
    console.log(isAdult);
    let married = false;
    const isMarried = married ? "You are married" : "You are not married";
    console.log(isMarried);
    // nullish coalescing operator
    const isAuthenticated = null;
    // 
}
