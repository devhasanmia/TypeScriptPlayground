"use strict";
{
    //
    // type stu = {id: string, name: string, email: string}
    // const addCourseToStudent = <T extends stu>(student: T) => {
    //   const course = "Next Lavel web Development";
    //   return {
    //     ...student,
    //     course,
    //   };
    // };
    // const studnet1 = addCourseToStudent({id: "sd", name:"MD. HASAN MIA", email:'hassaan@gmail.com'})
    // const studnet2 = addCourseToStudent({id:"2553", name: "s", email:'sd', status:"success"})
    // console.log(studnet1)
    // console.log(studnet2)
    function generateRandomId(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    const createNID = (nid) => {
        const id = generateRandomId(8);
        return Object.assign({ id: id }, nid);
    };
    const bashanNid = createNID({ name: "MD. Bashar Ali", email: "bashar@gmail.com" });
    console.log(bashanNid);
    //
}
