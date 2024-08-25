import React, { useEffect, useState } from 'react';
import StudentActivitiesCard from './StudentActivitiesCard';

const StudentAcivities = () => {
    const [activities,setActivities]=useState([])
    useEffect(()=>{
        fetch("activities.json")
        .then(res=>res.json())
        .then(data=>setActivities(data))
    },[])
    return (
        <div className='mt-10 mb-10'>
             <div className='mb-10'>
                <h1 className='text-5xl font-bold text-center'>AIUB STUDENT ACTIVITIES</h1>
                <p className='p-6 mt-6 text-justify'>AIUB’s student activities are designed to create a well-rounded educational environment. These activities provide students with opportunities to develop their skills, engage with the community, and prepare for their future careers. Whether through clubs, sports, cultural events, or professional development opportunities, AIUB ensures that students have a vibrant and enriching campus life.</p>
            </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
            {
                activities.map(activity=><StudentActivitiesCard key={activity.id} activity={activity}></StudentActivitiesCard>)
            }
        </div>
        </div>
    );
};

export default StudentAcivities;