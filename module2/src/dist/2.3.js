"use strict";
{
    const rollNumbers = [1, 2, 3, 4, 5, 6];
    //   const rollNumbers: number[] = [1, 2, 3, 4, 5, 6];
    const mentors = ["Mr. X", "Mr. Y", "Mr. Z"];
    const boolArray = [true, false, true, false];
    console.log(rollNumbers);
    console.log(mentors);
    console.log(boolArray);
    const user = [
        { name: "Md. Hasan Mia", age: 20 },
        { name: "Mst Labonno Akter Lakhi", age: 18 },
        // { role: "Admin" },
    ];
    console.log(user);
    // generic Tuple
    const manush = ["Mr. X", "Mr. Y"];
    // Now, use UserData as the type for the data in ApiResponse
    const apiResponse = {
        status: "success",
        message: "Data fetched successfully",
        data: {
            name: "Hasan",
            age: 30,
            role: "admin",
            st: "sdfsd"
        },
    };
    console.log(apiResponse);
    console.log(apiResponse);
    // generic function
}
