import React from 'react';
import specialImage from '../assets/reservation_icon.png';
import serviceImage from '../assets/services_details01.jpg';
import blogImage from '../assets/inner_blog_img02.jpg';

import detail1 from '../assets/details01.jpg';
import detail4 from '../assets/details04.jpg';

const SpecialDescover = () => {
    return (
        <div className='h-screen w-full bg-white flex justify-center items-center '>
            <div className='max-w-[1200px] mx-auto '>
                <div className='grid grid-cols-[500px_minmax(300px,_1fr)_400px] gap-6'>
                    <div className=' bg-white'>
                        <img className='w-[50px]' src={specialImage} alt="" />
                        <p className='text-gray-600 py-2 '>SPECIAL DISCOVER</p>
                        <div className='font-serif text-3xl font-bold'>
                        <h2>Welcome To </h2>
                        <h2>Our Extra <span>Services</span></h2>
                        </div>
                        <p className='text-gray-600 py-2'>In publng and graphic design, Lorem ipsum placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaniul.</p>
                    </div>
                    <div className=' bg-white rounded-lg shadow-xl'>
                        <img className='h-[300px] p-3' src={serviceImage} alt="" />
                    </div>
                    <div className='bg-white rounded-lg shadow-xl'>
                        <img className='p-3 h-[300px]' src={blogImage} alt="" />
                    </div>
                </div>
                <div className='grid grid-cols-3 my-10 gap-6'>
                    <div className='bg-white p-4 shadow-2xl rounded-lg'>
                        <img className='h-[300px]' src={detail1} alt="" />
                    </div>
                    <div  className='bg-white p-4 shadow-2xl rounded-lg'>
                        <img className='h-[300px]' src={detail4} alt="" />
                    </div>

                    <div  className='bg-gray-200 p-4 h-[200px] my-auto rounded-full flex justify-center flex-col items-center'>
                        <img className='w-[40px] p-1' src={specialImage} alt="" />
                        <h2 className='text-3xl font-bold font-serif'>Find all services</h2>
                        <button className='px-8 my-4 py-3 bg-[#E5BD43] text-white font-bold' >Find All</button>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default SpecialDescover;