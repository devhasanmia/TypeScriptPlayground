{
  // Generic Type

  interface Person<T> {
    name: string;
    age: number;
    role: string;
    isMarried: boolean;
    address: T;
  }

  type Address = string[];
  const person1: Person<Address> = {
    name: "Hasan",
    age: 30,
    role: "admin",
    isMarried: true,
    address: ["Dhaka", "Bangladesh"],
  };

  const person2: Person <{
    city: string,
    country: string,
    zipCode: number,
  }> ={
    name: "Hasan",
    age: 30,
    role: "admin",
    isMarried: true,
    address: {
        city: "Natore",
        country: "Bangladesh",
        zipCode: 6400
    }
  }
  console.log(person2);
}
