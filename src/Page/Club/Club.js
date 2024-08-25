import React, { useEffect, useState } from 'react';
import ClubCard from './ClubCard';

const Club = () => {
    const [clubs, setclubs] = useState([])
    useEffect(() => {
        fetch("club.json")
            .then(res => res.json())
            .then(data => setclubs(data))

    }, [])

    return (
        <div className='mt-10 mb-10'>
            <div>
                <h1 className='text-5xl font-bold text-center'>AIUB STUDENT ORGANIZATION</h1>
                <p className='p-6 mt-6 text-justify'>The Office of Student Affairs (OSA) oversees the extra-curricular activities of the student community through several student organizations, some of which are coordinated through their respective departments, in collaboration with OSA.</p>
            </div>
           
        <div className=' grid grid-cols-1 lg:grid-cols-2 lg:mx-auto  gap-20 mt-20 mb-10'>
            
            {
                clubs.map(club=><ClubCard key={club.id} club={club}></ClubCard>)
            }
        </div>
        </div>
    );
};

export default Club;