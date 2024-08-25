import React from 'react';
import aiub1 from '../../../Images/Aiub5.jpg'
import club1 from '../../../Images/club1.jfif';
import activity1 from '../../../Images/activity1.jpg';
import activity2 from '../../../Images/activity2.jpg';
import activity3 from '../../../Images/activity3.jpg';
import { Link } from 'react-router-dom';

const Overview = () => {
    return (
        <div>
            <div className="hero mt-20 mb-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2  '>
                        <img src={aiub1} alt='' className="" />
                    </div>
                    <div className='lg:w-1/2 lg:ml-10'>
                        <h1 className="text-5xl font-bold"> AIUB Facilities</h1>
                        <p className="py-6 text-justify"> The American International University-Bangladesh (AIUB) offers a range of facilities to support its students' academic and extracurricular activities.AIUB has a well-equipped library with a vast collection of books, journals, and digital resources to support research and learning.Sports Complex: AIUB has comprehensive sports facilities, including areas for basketball, cricket, football, and a gym. These facilities are used for various sports events and tournaments, contributing to a vibrant campus life​ (AIUB)​​ (Times Higher Education (THE))​. </p>
                        <Link to='/facilities' className='btn bg-blue-400 hover:bg-blue-500'>About More</Link>
                    </div>
                </div>
            </div>

            {/* STUDENT CLUB */}

            <div className="hero mt-20 mb-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='lg:w-1/2  '>
                        <img src={club1} alt='' className="" />
                    </div>
                    <div className='lg:w-1/2 lg:mr-10'>
                        <h1 className="text-5xl font-bold"> AIUB Clubs</h1>
                        <p className="py-6 text-justify">
                            American International University-Bangladesh (AIUB) offers a diverse array of student clubs designed to enrich the campus experience and foster personal and professional growth among students​. </p>
                        <Link to='/club' className='btn bg-blue-400 hover:bg-blue-500'>About More</Link>
                    </div>
                </div>
            </div>

            {/* STUDENT ACTIVITIES */}

            <div className='mt-20 mb-10'>
                <h1 className='text-5xl font-bold text-center'>AIUB STUDENT ACTIVITIES</h1>
                <div className="hero mt-10 mb-10">

                    <div className="hero-content flex-col lg:flex-row">
                        <div className='w-full grid lg:grid-cols-3 md:grid-cols-2  gap-5 '>
                            <img src={activity1} alt='' className="h-72 w-full" />
                            <img src={activity2} alt='' className="h-72" />
                            <img src={activity3} alt='' className="h-72" />


                        </div>

                    </div>
                </div>
                <div className=''>
                    <p className="p-6 text-justify">AIUB’s student activities are designed to create a well-rounded educational environment. These activities provide students with opportunities to develop their skills, engage with the community, and prepare for their future careers. Whether through clubs, sports, cultural events, or professional development opportunities, AIUB ensures that students have a vibrant and enriching campus life.</p>
                </div>
                <div className='ml-5'>
                    <Link to='/activities' className='btn bg-blue-400 hover:bg-blue-500 '>About More</Link>

                </div>

            </div>


        </div>
    );
};

export default Overview;