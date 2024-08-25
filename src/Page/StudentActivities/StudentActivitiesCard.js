import React from 'react';

const StudentActivitiesCard = ({ activity }) => {
    const { name, organizar, date, day, img, location, description } = activity
    return (
        <div className="card w-96 shadow-xl hover:shadow-2xl">
            <figure><img className='h-72 w-full hover:scale-125  ' src={img} alt="Shoes" /></figure>
            <div className="card-body hover:bg-sky-300 duration-1000 hover:text-white">
                <h2 className="card-title">{name}</h2>
                <p > <b>Organizer:</b> <span className='font-semibold'>{organizar}</span> </p>


                <p><b>Date: </b>{date}</p>
                <p><b>Day: </b>{day}</p>
                <p><b>Location: </b>{location}</p>
                <p className='text-justify'> 
                    {
                        description.length > 250 ?
                            <p>{description.slice(0, 250)+"..."}</p> :
                            <p>{description}</p>
                    }
                </p>

            </div>
        </div>
    );
};

export default StudentActivitiesCard;