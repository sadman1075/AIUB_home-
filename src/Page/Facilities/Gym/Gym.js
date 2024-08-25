import React from 'react';
import gym from '../../../Images/gym.jpg';


const Gym = () => {
    return (
        <div className="hero mt-20 mb-10">

        <div className="hero-content flex-col lg:flex-row">

            <div className='lg:w-1/2 lg:mr-10'>
                <h1 className="text-5xl font-bold"> AIUB Gym</h1>
                <p className="py-6 text-justify">For ensuring proper fitness of all staff including students, AIUB possesses a highly facilitated with modern fitness equipment gymnasium which is accessible for all students (both male and female), faculty (both male and female) and administrative staff. The gym is located at the 10th floor of D-building of AIUB permanent campus. There are two instructors who help the beginners with the workout routine and training. The gym facilities are free for all faculties and administrative staff whereas in case of students, they have to go for registration and have to pay a lump some money every month to avail the facilities of gym.

                    There are total three sessions available to avail the gym facilities out of which one session dedicated only for female students (from 9.00 am-12.00 pm) and one for male students (from 12.00 pm-4.30 pm). There is a session after office hours (5.00 pm) specially for all staffs including faculties and officials.</p>
            </div>
            <div className='lg:w-1/2  '>
                <img src={gym} alt='' className="" />

            </div>
        </div>
    </div>
    );
};

export default Gym;