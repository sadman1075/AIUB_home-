import React from 'react';
import diversity1 from '../../../Images/diversity1.jpg';
import diversity2 from '../../../Images/diversity2.jpg';
import diversity3 from '../../../Images/diversity3.jpg';
import diversity4 from '../../../Images/diversity4.jpg';

const Diversity = () => {
    return (
        <div className='mt-20 mb-10'>
            <h1 className='text-5xl font-bold text-center'>AIUB Diversity</h1>
            <div className="hero mt-16 mb-10">

                    <div className='w-full grid md:grid-cols-2 lg:grid-cols-4  gap-5 '>
                        <img src={diversity1} alt='' className="" />
                        <img src={diversity2} alt='' className="" />
                        <img src={diversity3} alt='' className="" />
                        <img src={diversity4} alt='' className="" />



                </div>
            </div>
            <div className=''>
                <p className="p-6 text-justify">Secular prayer facilities on campus, housing Muslim prayer rooms, a Christian chapel, a Hindu mandir, and a Buddhist prayer room, to empower everyone on campus to freely practice their faith.</p>
            </div>

        </div>
    );
};

export default Diversity;