
import React from 'react';
import { Link } from 'react-router';

const BookDetails = () => {
    return (
        <div>
<div className='container mx-auto min-h-[300px] my-20 flex lg:flex-row flex-col items-center lg:items-start justify-center gap-6 pt-8 px-4'>

 
    <div className='lg:w-[30%] w-[70%] sm:w-[50%]'>
        <img
            className='w-full h-full rounded-sm shadow-xl '
            src="https://th.bing.com/th/id/OIP.PoJkOCVEIeVPuLPCFpZliwHaLG?w=118&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
            alt=""
        />
    </div>

   
    <div className='lg:w-[49%] w-full p-4'>
        <div>
            <h2 className='text-lg lg:text-2xl font-medium mb-2'>
                Star Wars Lightsaber Forge Yoda Electronic Lightsaber
            </h2>

            <p className='text-sm lg:text-[16px] text-[#FF005E] font-medium mb-2'>
                Author: Alauddin Al Azad
            </p>

            <p className='text-sm lg:text-[16px] mb-2'>
                Category: Programming
            </p>

            <div className='flex gap-2 text-gray-400 text-sm'>
                <span>0 star</span>
                <span>0 book</span>
            </div>

            <div className='my-2'>
                <h3 className='text-lg lg:text-2xl font-semibold'>
                    Your Details
                </h3>

                <p className='font-medium text-sm lg:text-base my-2'>
                    Name: Alauddin Al Azad
                </p>

                <p className='font-medium text-sm lg:text-base mb-4'>
                    Email: alaudinf92@gmail.com
                </p>
            </div>

            <Link className='btn bg-blue-600 text-white w-full rounded-xl text-sm lg:text-base'>
                Borrow Now
            </Link>
        </div>

        <div>
            <h2 className='text-lg lg:text-xl my-2'>Details:</h2>
            <p className='text-sm lg:text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
        </div>
    </div>

</div>
</div>
    )
};

export default BookDetails;