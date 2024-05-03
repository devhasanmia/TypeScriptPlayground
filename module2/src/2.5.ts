{
  // function with generics
  const createArray = (param: string): string[] => {
    return [param];
  };

  const result1 = createArray("Hasan");
  // console.log(result1);

  // create Array with generics

  const createArrayWithGenerics = <T>(param: T): T[] => {
    return [param];
  };

  type User = {
    name: string;
    age: number;
  };
  const result2 = createArrayWithGenerics<User>({ name: "sd", age: 30 });
  // console.log(result2);

  //
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res10 = createArrayWithTuple<string, number>("Hasan", 30);
  const res11 = createArrayWithTuple<string, string>("Hasan", "Mia");

  // new example

  const newExample = createArrayWithTuple<string, { name: string }>("sdfsd", {
    name: "sdf",
  });

  console.log(newExample);
  // console.log(res10)
  // console.log(res11)

  // Anather Example

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Lavel Web Development Course 2.0 !";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({name:"MR. HASAN", email:"mr.hasan@gmail.com", devType: "Next Level"});
  console.log(student1)


}

