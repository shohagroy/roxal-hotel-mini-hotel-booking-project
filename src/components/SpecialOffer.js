import React from 'react';
import spicalLogo from '../assets/reservation_icon.png';
import about1 from '../assets/about_img01.jpg';
import about2 from '../assets/about_img02.jpg';
import about3 from '../assets/about_img03.jpg';

const SpecialOffer = () => {
    return (
        <div className='mx-10'>
            <div className='pl-8 flex  items-center h-screen w-full'>
                <div className='w-[40%]'>
                    <p className='text-gray-700'>SPECIAL OFFERS</p>
                    <div>
                        <h3 className='text-5xl py-2 font-serif'>Enjoy a</h3>
                        <h3 className='text-5xl font-serif'>Luxury <span className='text-[#E5BD43]'>Experience</span></h3>
                        <p className='py-3 text-gray-500'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meanies content used placeholder.</p>
                        <div className='flex items-center'>
                            <img className='py-8 pr-10' src={spicalLogo} alt="" />
                            <div>
                                <div className='p-3 border-l-4 '>
                                    <p className='font-serif text-xl font-bold'>Reservation</p>
                                    <h2 className='text-[#E5BD43] text-3xl'>555 000 8888</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between w-[60%] ml-10'>
                    <div className='image-shadow'>
                        <img src={about1} alt="" />
                    </div>
                    <img className='rounded-full' src={about2} alt="" />
                    <div className='image-shadow'>
                        <img src={about3} alt="" />
                    </div>


                </div>

            </div>
        </div>
    );
};

export default SpecialOffer;