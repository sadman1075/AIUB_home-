import React from 'react';
import cafeteria1 from '../../../Images/cafeteria.jfif';
import cafeteria2 from '../../../Images/cafeteria2.jfif';
import cafeteria3 from '../../../Images/cafeteria3.jfif';

const Cafeteria = () => {
    return (
        <div className='mt-20 mb-10'>
        <h1 className='text-5xl font-bold text-center'>AIUB Cafeteria</h1>
        <div className="hero mt-16 mb-10">

                <div className='w-full grid md:grid-cols-2 lg:grid-cols-3  gap-5 '>
                    <img src={cafeteria1} alt='' className="" />
                    <img src={cafeteria2} alt='' className="" />
                    <img src={cafeteria3} alt='' className="" />

                </div>

        
        </div>
        <div className=''>
            <p className="p-6 text-justify">In-house cafeteria and food carts bustling with variety of delicious and healthy options, catering to the needs of students and staff, from breakfast, lunch, and snacks throughout the day. The university cafeteria serves as a vital hub for students, faculty, and staff, providing not just sustenance but also fostering social interactions and promoting a sense of community.</p>
        </div>

    </div>
    );
};

export default Cafeteria;