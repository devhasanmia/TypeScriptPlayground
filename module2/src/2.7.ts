type Vehicle = {
    bike: string,
    car: string,
    ship: string
}

type Owner = "bike" | "car" | "ship";

type Owner2 = keyof Vehicle;

const person: Owner2 = "ship";

const getPropertyValue = <ob, kays extends keyof ob>(obj: ob, key: kays) => {
    return obj[key]
}


const user = {
    name: "Mr. Hasan",
    age: 26,
    address: "Chandrapur, Purulia",
    postCode: 6400
}

const result1 = getPropertyValue(user, "name")

console.log(result1)
