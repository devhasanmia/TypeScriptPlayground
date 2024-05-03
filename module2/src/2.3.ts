{
  //  Generic type

  //

  type GenericArray<t> = Array<t>;

  const rollNumbers: GenericArray<number> = [1, 2, 3, 4, 5, 6];

  //   const rollNumbers: number[] = [1, 2, 3, 4, 5, 6];
  const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];
  const boolArray: GenericArray<boolean> = [true, false, true, false];

  console.log(rollNumbers);
  console.log(mentors);
  console.log(boolArray);

  const user: GenericArray<{name: string, age: number, }> = [
    { name: "Md. Hasan Mia", age: 20 },
    { name: "Mst Labonno Akter Lakhi", age: 18 },
    // { role: "Admin" },
  ];

  console.log(user)


  // generic Tuple

  const manush: [string, string] = ["Mr. X", "Mr. Y"];

  


  // interface ApiResponse <T> {
  //   status: string;
  //   message: string;
  //   data: T;
  // }

  // const apiResponse: ApiResponse <Dtss> = {
  //   status: "success",
  //   message: "Data fetched successfully",
  //   data: {
  //     name: "Hasan",
  //     age: 30,
  //     role: "admin"
  //   },
  // }

// Define a type that matches the structure of your data
type UserData = {
  name: string;
  age: number;
  role: string;
};

// Use the newly defined type in your ApiResponse
interface ApiResponse<T> {
  status: string;
  message: string;
  data: T;
}

// Now, use UserData as the type for the data in ApiResponse
const apiResponse: ApiResponse<{
  name: string;
  age: number;
  role: string;
  st:string
}> = {
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





  console.log(apiResponse)

  // generic function








  
}
