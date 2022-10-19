import React from 'react';
import Logo from '../assets/logo.png'

const Navigation = () => {
    return (
        <div className='w-full bg-[#00000041]'>
            <div className='flex py-2 px-8 border-b-2 border-[#E5BD43] justify-between items-center text-white '>
            <img className='w-[300px]' src={Logo} alt="" />
            <div className='flex items-center'>
                <div className='flex'>
                    <p className=' m-4 border-b-2 border-[#00000000] hover:border-white duration-300'>HOME</p>
                    <p className='m-4 border-b-2 border-[#00000000] hover:border-white duration-300'>ROOMS</p>
                    <p className='m-4 border-b-2 border-[#00000000] hover:border-white duration-300'>ABOUT</p>
                    <p className='m-4 border-b-2 border-[#00000000] hover:border-white duration-300'>SERVICES</p>
                    <p className='m-4 border-b-2 border-[#00000000] hover:border-white duration-300'>BLOGS</p>
                    <p className='m-4 border-b-2 border-[#00000000] hover:border-white duration-300'>CONTACT</p>
                </div>
                <div>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    </span>
                </div>
                <button className='px-8 py-4 ml-4 bg-[#E5BD43]'>BOOKING NOW</button>
            </div>
        </div>
        </div>
    );
};

export default Navigation;