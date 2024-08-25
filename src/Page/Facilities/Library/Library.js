import React from 'react';
import library from '../../../Images/library2.jpg';
import { Link } from 'react-router-dom';

const Library = () => {
    return (
        <div className="hero mt-10 mb-10">

        <div className="hero-content flex-col lg:flex-row">
            <div className='lg:w-1/2  '>
                <img src={library} alt='' className="" />

            </div>
            <div className='lg:w-1/2 lg:ml-10'>
                <h1 className="text-5xl font-bold"> AIUB Library</h1>
                <p className="py-6 text-justify">The AIUB Library was started in 1994 in order to cater to the academic and research needs of the faculty, research scholars, students, and officers. Over the years, the Library has grown steadily and expanded its services and holdings by leaps and bounds to live-up to the expectations of its immediate patrons. The book stock is arranged in a classified sequence based on the Dewey Decimal System (DDC), and the great majority of volumes in the Library are on open shelves, available for borrowing.

                    The library of AIUB is the collection of the knowledge and built up a balanced and rich collection in Business Administration, Science and Technology, Computer and Social Science.....</p>
                <Link to='library' className='btn bg-blue-400 hover:bg-blue-500'>More About Library</Link>
            </div>
        </div>
    </div>
    );
};

export default Library;