import React from 'react';
import aiub2 from '../../../Images/Aiub2.jpg';
import aiub3 from '../../../Images/Aiub3.jpg';
import aiub4 from '../../../Images/Aiub4.jpg';
import aiub5 from '../../../Images/Aiub5.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className='carousal-img'>
                            <img src={aiub5} className="w-full h-full" alt='' />
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                            <a href="#slide2" className="btn btn-circle bg-orange-500">❯</a>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5  top-1/4 lg:absolute lg:lg:left-24 flex justify-end transform -translate-y-1/2   lg:top-1/2">
                            <h1 className='text-xl font-bold text-white lg:text-6xl font-bold text-white '>
                                Welcome To <br />
                                Aiub Campus <br />
                                Life

                            </h1>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 w-1/2 left-5 top-1/2 lg:absolute flex justify-end transform -translate-y-1/2 w-1/2 lg:lg:left-24  lg:top-2/3">
                            <p className='text-white text-xs lg:text-xl text-white'>The AIUB campus is open-architecture and connected to nature and the product of a remarkable collaboration </p>
                        </div>

                    </div>

                    <div id="slide2" className="carousel-item relative w-full">
                        <div className='carousal-img'>
                            <img src={aiub4} className="w-full h-full" alt='' />
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                            <a href="#slide3" className="btn btn-circle bg-orange-500">❯</a>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5  top-1/4 lg:absolute lg:lg:left-24 flex justify-end transform -translate-y-1/2   lg:top-1/2">
                            <h1 className='text-xl font-bold text-white lg:text-6xl font-bold text-white '>
                                Welcome To <br />
                                Aiub Campus <br />
                                Life

                            </h1>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 w-1/2 left-5 top-1/2 lg:absolute flex justify-end transform -translate-y-1/2 w-1/2 lg:lg:left-24  lg:top-2/3">
                            <p className='text-white text-xs lg:text-xl text-white'>The AIUB campus is open-architecture and connected to nature and the product of a remarkable collaboration </p>
                        </div>
                     
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className='carousal-img'>
                            <img src={aiub3} className="w-full" alt=''/>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                            <a href="#slide4" className="btn btn-circle bg-orange-500">❯</a>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5  top-1/4 lg:absolute lg:lg:left-24 flex justify-end transform -translate-y-1/2   lg:top-1/2">
                            <h1 className='text-xl font-bold text-white lg:text-6xl font-bold text-white '>
                                Welcome To <br />
                                Aiub Campus <br />
                                Life

                            </h1>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 w-1/2 left-5 top-1/2 lg:absolute flex justify-end transform -translate-y-1/2 w-1/2 lg:lg:left-24  lg:top-2/3">
                            <p className='text-white text-xs lg:text-xl text-white'>The AIUB campus is open-architecture and connected to nature and the product of a remarkable collaboration </p>
                        </div>
                     
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className='carousal-img'>
                            <img src={aiub2} className="w-full h-full" alt='' />
                        </div>                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide3" className="btn btn-circle  mr-5">❮</a>
                            <a href="#slide1" className="btn btn-circle bg-orange-500">❯</a>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5  top-1/4 lg:absolute lg:lg:left-24 flex justify-end transform -translate-y-1/2   lg:top-1/2">
                            <h1 className='text-xl font-bold text-white lg:text-6xl font-bold text-white '>
                                Welcome To <br />
                                Aiub Campus <br />
                                Life

                            </h1>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 w-1/2 left-5 top-1/2 lg:absolute flex justify-end transform -translate-y-1/2 w-1/2 lg:lg:left-24  lg:top-2/3">
                            <p className='text-white text-xs lg:text-xl text-white'>The AIUB campus is open-architecture and connected to nature and the product of a remarkable collaboration </p>
                        </div>
                   
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Banner;