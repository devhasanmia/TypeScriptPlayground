{
  // OOP ==> Inheritence
  // class Person {
  //   name: string;
  //   age: number;
  //   address: string;
  //   constructor(name: string, age: number, address: string) {
  //     this.name = name;
  //     this.age = age;
  //     this.address = address;
  //   }
  //   getIntroDuction() {
  //     console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  //   }
  //   getSleep(numberOfHours: number) {
  //     console.log(`I am sleeping only ${numberOfHours} hours a day.`);
  //   }
  // }
  // class Student {
  //   name: string;
  //   age: number;
  //   address: string;
  //   constructor(name: string, age: number, address: string) {
  //     this.name = name;
  //     this.age = age;
  //     this.address = address;
  //   }
  //   getSleep(numberOfHours: number) {
  //     console.log(`I am sleeping only ${numberOfHours} hours a day.`);
  //   }
  // }
  // class Student extends Person {
  //   constructor(name: string, age: number, address: string) {
  //     super(name, age, address);
  //   }
  // }
  // const student1 = new Student("Bashar", 20, "Dhaka");
  // console.log(student1);
  // student1.getSleep(8);
  // student1.getIntroDuction();
  //  Teacher
  // class Teacher extends Person {
  //   designation: string;
  //   constructor(
  //     name: string,
  //     age: number,
  //     address: string,
  //     designation: string
  //   ) {
  //     super(name, age, address);
  //     this.designation = designation;
  //   }
  //   getIntroduction(){
  //     super.getIntroDuction();
  //     console.log(`I am a ${this.designation}.`);
  //   }
  //   TakeClass(NumberOfClass: number) {
  //     console.log(`I am taking class of ${NumberOfClass} a day.`);
  //   }
  // }
  // const teacher = new Teacher("MD. Hasan", 40, "Natore", "Professor");
  // teacher.getIntroDuction();
  // console.log(
  //   `My name is ${teacher.name}, I am ${teacher.age} years old, I live in ${teacher.address} and my designation is ${teacher.designation}`
  // )
  // teacher.getIntroDuction();
  // teacher.getSleep(8);
  // teacher.TakeClass(10);
}
{
  class Person {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {}
    getIntroDuction() {
      console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
    getSleep(numberOfHours: number) {
      console.log(`I am sleeping only ${numberOfHours} hours a day.`);
    }
    getWork(numberOfHours: number) {
      console.log(`I am working only ${numberOfHours} hours a day.`);
    }
    getEat(numberOfHours: number) {
      console.log(`I am eating only ${numberOfHours} hours a day.`);
    }
    getExercise(numberOfHours: number) {
      console.log(`I am exercising only ${numberOfHours} hours a day.`);
    }
  }
  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }
  // const student1 = new Student("Bashar", 20, "Dhaka");

  class Teacher extends Person {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    getClass(NumberOfClass: number) {
      console.log(`I am taking class of ${NumberOfClass} a day.`);
    }
  }
  const teacher = new Teacher("MD. Hasan", 40, "Natore", "Professor");
  console.log(teacher)
}
