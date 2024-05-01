{
  console.clear();

  // Destructuring

  const userInfo = {
    id: 345,
    name: {
      firstName: "Hasan",
      middleName: "Abedin",
      lastName: "Persian",
    },
    contactNo: "01711111111",
    address: "Dhaka",
  };

  const {
    contactNo,
    name: { lastName },
  } = userInfo;

  //   console.log(contactNo);
  // //   console.log(address);
  // console.log(lastName)

  // array destructuring

  const myFriends = ["jhon", "james", "jim", "jimmy", "harry", "jack"];

  const [a, b, c, ...rest] = myFriends;
    console.log(b,rest);
}
 