import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li> <Link to='/' className="font-semibold">Home</Link></li>
                        <li>
                            <Link to='/facilities' className="font-semibold">Facilities</Link>
                        </li>
                        <li> <Link to="/club" className="font-semibold">Clubs</Link></li>
                        <li> <Link to="/activities" className="font-semibold">Activities</Link></li>
                        <li> <Link to='/contact' className="font-semibold">Contact</Link></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl">AIUB CAMPUS LIFE</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li> <Link to='/' className="font-semibold">Home</Link></li>
                    <li>
                        <Link to='/facilities' className="font-semibold">Facilities</Link>
                    </li>
                    <li> <Link to="/club" className="font-semibold">Clubs</Link></li>
                    <li> <Link to="/activities" className="font-semibold">Activities</Link></li>
                    <li> <Link to='/contact' className="font-semibold">Contact</Link></li>
                </ul>
            </div>

        </div>
    );
};

export default Header;