{
    console.clear();
// 
// Union Type

type FrontendDeveloper =  'fakibazDeveloper' | 'juniorDeveloper'
type FullStackDeveloper = "forntend Developer" | 'Backend Developer'



type Developer = FrontendDeveloper | FullStackDeveloper;

const newDeveloper: FrontendDeveloper = 'juniorDeveloper';


type User = {
    name: string;
    age: number;
    gender: "male" | "female";
    bloodGroup: "A" | "B" | "AB" | "O" | "A+" | "A-" | "B+" | "B-" | "AB+";
    email: string;
}


const user1: User ={
    name: "Md. Hasan Mia",
    age: 25,
    gender: "male",
    bloodGroup: "A",
    email: "hasanmia@gmail.com",
}

console.log(user1)

//
}