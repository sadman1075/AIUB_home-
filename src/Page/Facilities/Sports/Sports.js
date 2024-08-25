import React from 'react';
import sports1 from '../../../Images/sports1.jfif';
import sports2 from '../../../Images/sports2.jfif';
import sports3 from '../../../Images/sports3.jfif';
import sports4 from '../../../Images/sports4.jfif';
import sports5 from '../../../Images/sports5.jfif';
import sports6 from '../../../Images/sports6.jfif';
import sports7 from '../../../Images/sports7.jfif';
import sports8 from '../../../Images/sports8.jfif';
import sports9 from '../../../Images/sports9.jfif';

const Sports = () => {
    return (
        <div className='mt-20 mb-10'>
            <h1 className='text-5xl font-bold text-center'>AIUB Sports</h1>
            <div className=''>
                <p className="p-6 text-justify">The university also has an engaging Sports Complex sprawling across the campus with a full-length football field, cricket practice-pitch, basketball, tennis, badminton, volleyball courts, and an open gallery with a seating capacity of around 500. The Sport Complex is overseen by the Office of Sports, that is responsible for the overall development of sports for the students, academic faculties, and administrative officials of the university. The university promotes sports activities by organizing, facilitating, and participating in various internal and external sporting events and tournaments throughout the semesters.</p>
            </div>
            <div className=''>
                <p className="p-6 text-justify">
                    <li>Intra-AIUB Cricket Tournament</li>
                    <li> Intra-AIUB Football Tournament</li>
                    <li>AIUB Champions League (Football Tournament)</li>
                    <li>AIUB Indoor Games</li>
                    <li>AIUB Premier League (Cricket Tournament)</li>
                    <li>AIUB World Cup (Football Tournament)</li>
                    <li>Duke of Edinburgh Awards</li>
                    <li>  Bangabandhu Inter University Sports Champs</li>
                    <li>Clemon Indoor Uni Cricket</li>
                    <li>Wings Uni Futsal</li>
                    <li> Hero Honda Cup Cricket Tournament</li>
                    <li>BCB-Walton Cup</li>
                    <li>MoU with the Bangladesh Cricket Board, Bangladesh Football Federation, and the National Shooting Federation</li>                   
                     </p>
            </div>
            <div className="hero mt-16 mb-10">

              
                    <div className='w-full grid lg:grid-cols-3  gap-5 '>
                        <img src={sports1} alt='' className="lg:h-72 md:w-full" />
                        <img src={sports2} alt='' className="lg:h-72 md:w-full" />
                        <img src={sports3} alt='' className="lg:h-72 md:w-full" />
                        <img src={sports4} alt='' className="lg:h-72 md:w-full" />
                        <img src={sports5} alt='' className="lg:h-72 md:w-full" />
                        <img src={sports6} alt='' className="lg:h-72 md:w-full" />
                        <img src={sports7} alt='' className="lg:h-72 md:w-full" />
                        <img src={sports8} alt='' className="lg:h-72 md:w-full" />
                        <img src={sports9} alt='' className="lg:h-72 md:w-full" />


                    </div>

                
            </div>


        </div>
    );
};

export default Sports;