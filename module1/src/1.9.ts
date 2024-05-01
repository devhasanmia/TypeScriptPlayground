{
  console.clear();
  //
  // Type Alias

  type Student = {
    name?: string;
    age: number;
    gender: string;
    contactNo: string;
    address: string;
  };

  type Username = string;
  type isAdmin = boolean;

  const hasan: isAdmin = true;

  console.log(hasan)

  const username: Username = "Hossen";
  console.log(username)

  const student1: Student = {
    name: "Altab",
    age: 25,
    gender: "Male",
    contactNo: "01711111111",
    address: "Dhaka",
  };

  console.log(student1);
  //
}
