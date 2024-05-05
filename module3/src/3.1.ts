{
  // OOP - Class
  // class Animal{
  //     name: string;
  //     species: string;
  //     sound: string;
  //     constructor(name: string, species: string, sound: string){
  //         this.name = name;
  //         this.species = species;
  //         this.sound = sound
  //     }
  //     makeSound(){
  //         console.log(`${this.name} says ${this.sound}`)
  //     }
  // }

  // const dog = new Animal ("Bashar", "Dog", "Ghew! Ghew!");
  // const Cat = new Animal ("Cat", "Cat", "Mhew! Mhew!");

  // Cat.makeSound()

  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}
    makeSound() {
      console.log(`${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("Bashar", "Dog", "Ghew! Ghew!");
  const Cat = new Animal("Cat", "Cat", "Mhew! Mhew!");

  Cat.makeSound();
}
