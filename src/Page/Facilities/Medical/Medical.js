import React from 'react';
import health1 from '../../../Images/health1.jfif';
import health2 from '../../../Images/health2.jfif';

const Medical = () => {
    return (
        <div className='mt-20 mb-10'>
            <h1 className='text-5xl font-bold text-center'>AIUB Medical Facilities</h1>
            <div className="hero mt-16 mb-10">

                
                    <div className='w-full grid lg:grid-cols-2  gap-5 '>
                        <img src={health1} alt='' className="lg:h-96" />
                        <img src={health2} alt='' className="lg:h-96 md:w-full" />



                

                </div>
            </div>
            <div className=''>
                <p className="p-6 text-justify">​For ensuring good health, AIUB holds a medical center which is located in Annex 1. The medical center of AIUB is accessible to all students and employees of AIUB where medical advice and free medication are given by medical professionals. The medical center is open in weekdays (9 am-5pm). Following facilities are available at the AIUB medical center:
                    <br />
                    <br />
                    <li>Fully equipped 6-bedded medical center.</li>
                    <li>Routine and emergency medical services to students, teachers, officers and staff.</li>
                    <li>Full time Medical Professionals are available to provide medical assistance.</li>
                    <li>Special care is given to pregnant women and lactating mothers.</li>
                    <li>Regular monitoring of hypertensive and diabetic patients including blood glucose screening.</li>
                    <li>Oxygen therapy and nebulization are given if necessary.</li>
                    <li>Free hygiene products are provided to women in case of emergency.</li>
                    <li>The medical center has an air-conditioned ambulance which is well equipped for carrying emergency patients to hospitals.</li>
                    <li>Regular deep-cleaning and full-disinfection done throughout the buildings in the campus premises.</li>
                </p>
            </div>

        </div>
    );
};

export default Medical;