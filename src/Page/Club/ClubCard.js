import React from 'react';
import { Link } from 'react-router-dom';

const ClubCard = ({ club }) => {
    const { name, img, objective,membership,activites } = club
    return (
        <div className="card lg:w-fit shadow-2xl ">
            <figure><img className='h-60 ' src={img} alt="Img" /></figure>
            <div className="card-body ">
                <h2 className="card-title">{name}</h2>
                <p className='text-justify'><b>Objective:</b>
                    {
                        objective.length > 350?
                        <p>{objective.slice(0,350)+"..."}</p>:
                        <p>{objective}</p>
                    }
                </p>
                <p className='text-justify' >
                {
                    activites?
                    <p><b>Activities:</b><br />{activites}</p>:
                    <p></p>
                }
                
                </p>
                <p className='text-justify' > 
                {membership?
                <p><b>Membership:</b><br />{membership}</p>:
                <p></p>}
                </p>

            </div>
        </div>
    );
};

export default ClubCard;