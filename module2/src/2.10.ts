{
    // mapped Types

    const rollArr: number[] = [2, 3, 6, 9, 8, 5];

    const rollArrString: string[] = rollArr.map((s) => s.toString());

    // console.log(rollArrString)


    type contact = {
        mobile: number,
        address: number
    }

    type contactBoolean ={
        [key in keyof contact]: string
    }

   

    //
}