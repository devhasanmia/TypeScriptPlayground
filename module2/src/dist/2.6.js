"use strict";
{
    const addCourseToStudent = (student) => {
        const course = "Next Lavel web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const studnet1 = addCourseToStudent({ id: "sd", name: "MD. HASAN MIA", email: 'hassaan@gmail.com' });
    const studnet2 = addCourseToStudent({ id: "2553", name: "s", email: 'sd', status: "success" });
    console.log(studnet1);
    console.log(studnet2);
    //
}
