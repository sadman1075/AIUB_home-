import React from 'react';
import lab1 from '../../../Images/lab1.jpg';
import lab2 from '../../../Images/lab2.jpg';
import lab3 from '../../../Images/lab3.jpg';
import lab4 from '../../../Images/lab4.jpg';
import lab5 from '../../../Images/lab5.jpg';
import lab6 from '../../../Images/lab6.jpg';

const Laboratory = () => {
    return (
        <div className='mt-20 mb-10'>
            <h1 className='text-5xl font-bold text-center'>AIUB Labratory</h1>

            <div className='mt-16'>
                <p className="p-6 text-justify">
                    <li>The largest virtual lab setup is the South Asian region.</li>
                    <li>25 computer labs, 19 engineering labs, 10 design studios, 4 physics labs, 2 chemistry labs, and 1 language lab with 40 workstations in each and 24 servers to support the IT infrastructure.</li>
                    <li>6 dedicated workshops, including foundry, woodworks, and machinery casting, for the Industrial Production and Engineering (IPE) Lab.</li>
                    <li>International standard Moot Court to facilitate the overall clinical legal education, through practical applications of the rules, regulations, and procedures of the legal system to develop advocacy skills amongst students beyond the theoretical borders of a classroom.</li>
                    <li>Media Studio with professional-grade facilities for shooting, online editing, and live broadcasting, including a studio console, audio recording booth, video cameras (including options with Full HD Resolution), DSLR cameras, light & sound system, full-time studio personnel, set stage, dressing room, etc. with a seating capacity of 120.</li>
                    <li>MoU with the Bangladesh Cricket Board, Bangladesh Football Federation, and the National Shooting Federation</li>
                </p>
            </div>
            <div className="hero mt-10 mb-10">

                    <div className='w-full grid lg:grid-cols-3  gap-5 '>
                        <img src={lab1} alt='' className="lg:h-72" />
                        <img src={lab2} alt='' className="lg:h-72" />
                        <img src={lab3} alt='' className="lg:h-72" />
                        <img src={lab4} alt='' className="lg:h-72" />
                        <img src={lab5} alt='' className="lg:h-72" />
                        <img src={lab6} alt='' className="lg:h-72" />



                    </div>

                
            </div>


        </div>
    );
};

export default Laboratory;