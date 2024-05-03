{
  // Interface
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      ram: number;
      hardDisk: number;
      processor: string;
    };
    smartWatch: T;
    bike?: X
  }

  type Hp ={
    brand: string;
    model: string;
    ram: number;
    hardDisk: number;
    processor: string;
  }

  const poorDeveloper: Developer<Hp, null> = {
    name: "Md. Hasan Mia",
    computer: {
      brand: "Apple",
      model: "MacBook Pro",
      ram: 16,
      hardDisk: 512,
      processor: "i9",
    },
    smartWatch: {
      brand: "Apple",
      model: "S10",
      ram: 4,
      hardDisk: 128, 
      processor: "i5",
    },
  };




type Apple = {
    brand: string;
    model: string;
    ram: number;
    hardDisk: number;
    processor: string;
}

interface YamahaBike{
    model: string;
    engineCapacity: string;
}
  const richDeveloper: Developer<Apple, YamahaBike> = {
        name: "Md. Abul Bashar",
        computer: {
            brand: "Apple",
            model: "MacBook Pro",
            ram: 16,
            hardDisk: 512,
            processor: "i9",
        },
        smartWatch: {
            brand: "Apple",
            model: "S10",
            ram: 4,
            hardDisk: 128, 
            processor: "i5",
        },
        bike: {
            model: "Yamaha",
            engineCapacity: "1000cc",
        }
  }

  console.log(poorDeveloper)
  console.log(richDeveloper)
} 
