{
  //
  let anything: any;

  anything = "Next Lavel Web development";

  console.log(anything);

  anything as number;

  // Problem 1 :: KG to Grams

  // const kgToGm = (value: string | number) => {
  //     if (typeof value === "string") {
  //         const convertedValue = parseFloat(value) * 1000;
  //         return `The converted value is ${convertedValue}`;
  //     }

  //     if (typeof value === "number") {
  //         return value * 1000;
  //     }
  // }

  // console.log(kgToGm(2));

  // Grams to KG

  const gmToKg = (value: string | number) => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) / 1000;
      return `The converted value is ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value / 1000;
    }
    return "Invalid input";
  };

  console.log(gmToKg("500"));

  //
}
