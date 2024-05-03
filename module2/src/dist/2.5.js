"use strict";
{
    // function with generics
    const createArray = (param) => {
        return [param];
    };
    const result1 = createArray("Hasan");
    // console.log(result1);
    // create Array with generics
    const createArrayWithGenerics = (param) => {
        return [param];
    };
    const result2 = createArrayWithGenerics({ name: "sd", age: 30 });
    // console.log(result2);
    //
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const res10 = createArrayWithTuple("Hasan", 30);
    const res11 = createArrayWithTuple("Hasan", "Mia");
    // new example
    const newExample = createArrayWithTuple("sdfsd", {
        name: "sdf",
    });
    console.log(newExample);
    // console.log(res10)
    // console.log(res11)
    // Anather Example
    const addCourseToStudent = (student) => {
        const course = "Next Lavel Web Development Course 2.0 !";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ name: "MR. HASAN", email: "mr.hasan@gmail.com", devType: "Next Level" });
    console.log(student1);
}
