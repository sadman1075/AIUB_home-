import React from 'react';
import daycare1 from '../../../Images/daycare1.jfif';
import daycare2 from '../../../Images/daycare2.jfif';
import daycare3 from '../../../Images/daycare3.jfif';

const Daycare = () => {
    return (
        <div className='mt-20 mb-10'>
            <h1 className='text-5xl font-bold text-center'>AIUB Daycare</h1>
            <div className="hero mt-16 mb-10">


                <div className='w-full grid md:grid-cols-2 lg:grid-cols-3  gap-5 '>
                    <img src={daycare1} alt='' className="" />
                    <img src={daycare2} alt='' className="" />
                    <img src={daycare3} alt='' className="" />
                </div>
            </div>
            <div className=''>
                <p className="p-6 text-justify">As a part of its commitment to the university community, the American International University–Bangladesh (AIUB) always strives to create an environment that enables its students and employees to pursue their educational and professional goals at the university. Childcare is an integral part of parenthood but is also a challenge to manage when it comes to full-time students or working parents. Hence, the AIUB Daycare Facility is an initiative geared towards providing a form of support to the students and employees, who have children and face the difficulties of having to care for them during their study/work hours, enabling them to be able to balance both their children’s responsibilities and study/work obligations. The Daycare facility is a safe and secured place for the children to learn, play and grow, giving the parents a peace of mind to pursue their education or careers, knowing that their children are also a part of the AIUB family and are being well taken care of.</p>
            </div>

        </div>
    );
};

export default Daycare;