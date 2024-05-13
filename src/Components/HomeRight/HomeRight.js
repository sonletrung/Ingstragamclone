import React from 'react';
import SuggetionCard from "./SuggetionCard";

const HomeRight = () => {
    return (
        <div className=''>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <div>
                        <img className='w-12 h-12 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTegCMTPm7F31C6Flmb0I_2NcfZ_wwjJZo3Nw&s' alt=''/>
                    </div>
                    <div className='ml-3'>
                        <p> Full name</p>
                        <p className='opacity-70'> User name</p>
                    </div>
                </div>
                <p className=' text-blue-700 font-semibold'>Swith</p>
            </div>
            <div className='space-y-5 mt-10'>
                {[1,1,1,1].map((item)=><SuggetionCard/>)}
            </div>
        </div>
    );
};

export default HomeRight;