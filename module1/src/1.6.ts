// Learning Function

// Normal Function
// Arrow Function

function add(num1: number, num2: number){
    return num1+num2
}


const addArrowFun = (num1: number, num2: number): number => {
    return num1 + num2
};
add(20,30)

const customer = {
    name: "MD. HASAN MIA",
    balance: 10,
    addBalance(balance: number): string {
        return `My New Balance is ${this.balance + balance}`
    }
}

// console.log(customer.addBalance(200))

let arr: number[] = [2,4,6,3]; 

const newArr: number[] = arr.map((item: number) :number => item * item);

// console.log(newArr)

