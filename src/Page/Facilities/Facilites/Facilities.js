import React from 'react';
import Library from '../../Facilities/Library/Library';
import Gym from '../Gym/Gym';
import Cafeteria from '../Cafeteria/Cafeteria';
import Student_lounge from '../Student_lounge/Student_lounge';
import Medical from '../Medical/Medical';
import Diversity from '../Diversity/Diversity';
import Daycare from '../Daycare/Daycare';
import Sports from '../Sports/Sports';
import Laboratory from '../Laboratory/Laboratory';

const Facilities = () => {
    return (
        <div>
            <Library></Library>
            <Laboratory></Laboratory>
            <Gym></Gym>
            <Cafeteria></Cafeteria>
            <Student_lounge></Student_lounge>
            <Medical></Medical>
            <Diversity></Diversity>
            <Daycare></Daycare>
            <Sports></Sports>
        </div>
    );
};

export default Facilities;