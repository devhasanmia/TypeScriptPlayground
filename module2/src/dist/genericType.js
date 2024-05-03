"use strict";
{
    const person1 = {
        name: "Hasan",
        age: 30,
        role: "admin",
        isMarried: true,
        address: ["Dhaka", "Bangladesh"],
    };
    const person2 = {
        name: "Hasan",
        age: 30,
        role: "admin",
        isMarried: true,
        address: {
            city: "Natore",
            country: "Bangladesh",
            zipCode: 6400
        }
    };
    console.log(person2);
}
