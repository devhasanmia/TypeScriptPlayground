{
    // utility Type
    // Pick

    type Person = {
        name: string,
        age: number,
        email?: string
    }


    type NameAge = Pick<Person, "name"|"age">

    console.log()


}