{

    //  Spread Operator
    // Rest Operator
    //  Destructuring

    const primarySchool = {
        one: "Shahin",
        two: "human",
        three: "abul"
    }

    const highSchool = {
        six: "Tes",
        seven: "sdfs"
    }


    const totalClassList = {
        ...primarySchool,
        ...highSchool
    }

    // console.log(totalClassList)

    const greetFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`Hi ${friend} and Welcome to My Youtube Channel`))
    }

    greetFriends("Abdul", "kamdul", "tests")



}