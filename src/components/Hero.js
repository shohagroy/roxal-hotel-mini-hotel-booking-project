import React from 'react';
import Navigation from './Navigation';
import reating from '../assets/rating.png'

const Hero = () => {
    return (
        <div className='heroContainer h-screen'>
            {/* navigation component  */}
            <Navigation/>

            {/* hero text section  */}
            <div className='flex h-[60vh] justify-center items-center'>
                <div className='uppercase text-white flex justify-center items-center flex-col'>
                    <img src={reating} alt="" />
                    <p className='p-2 text-xl'>The Marvelous Mrs. Maisel at The Plaza</p>
                    <h1 className='text-7xl font-bold font-serif'>Enjoy the best</h1>
                    <h2 className='text-5xl my-2 font-serif'>moments of life</h2>
                <button className='px-8 my-4 py-4 bg-[#E5BD43]'>room & suite NOW</button>

                </div>

            </div>
        </div>
    );
};

export default Hero;