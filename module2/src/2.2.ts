{

    // interface

    type User1 = {
        name: string;
        age: number;
    }

    interface User2 {
        name: string;
        age: number;
    }


    type UserWithRoll1 = User1 & {role: string};

    interface UserWithRole2 extends User2 {
        role: string;
    }

    const user1: UserWithRole2 = {
        name: "Hasan",
        age: 30,
        role: "admin"
    }

    // const user1: User1WithRoll2 = {
    //     name: "Hasan",
    //     age: 30,
    //     role: "admin"
    // }


    type rollNumber = number;



    // js ==> object , array ==> object, function ==> object

    type Roll1 = number[];

    interface Roll2 {
        [index: number]: number;
    }

    const rollNumber2: Roll2 = [1, 2, 3, 4, 5, 6, 7];

    console.log(rollNumber2)

    const rollNumber1: Roll1 = [1, 2, 3, 4, 5, 6, 7];












// interface


























  



}