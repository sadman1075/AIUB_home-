import React from 'react';
import student_lounge1 from '../../../Images/student_lounge1.jfif';
import student_lounge2 from '../../../Images/student-lounge2.jfif';
import student_lounge3 from '../../../Images/student-lounge3.jfif';
import student_lounge4 from '../../../Images/student-lounge4.jfif';


const Student_lounge = () => {
    return (
        <div className='mt-20 mb-10'>
        <h1 className='text-5xl font-bold text-center'>AIUB Student Lounge</h1>
        <div className="hero mt-16 mb-10">

                <div className='w-full grid lg:grid-cols-4  gap-5 '>
                    <img src={student_lounge1} alt='' className="" />
                    <img src={student_lounge2} alt='' className="" />
                    <img src={student_lounge3} alt='' className="" />
                    <img src={student_lounge4} alt='' className="" />
       
            
                </div>

            
        </div>
        <div className=''>
            <p className="p-6 text-justify">Several student lounges/social rooms are dotted around AIUB campus. The university social room serves as a dynamic space fostering connections and relaxation for students, faculty, and staff. Designed for versatility, it accommodates various activities, from group study sessions to casual gatherings. Equipped with comfortable seating, and board games, it promotes both productivity and leisure.</p>
        </div>

    </div>
    );
};

export default Student_lounge;