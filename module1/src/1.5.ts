// Reference Type ==> Object

const user: {
    readonly company: string
    firstName: string,
    middleName?: string, // Optional Type
    lastName: string,
    isMarried: boolean
} = {
    company: "Solution Point",
    firstName: "Hasan",
    middleName: "abedin",
    lastName: "Persian",
    isMarried: true
}



console.log(user)