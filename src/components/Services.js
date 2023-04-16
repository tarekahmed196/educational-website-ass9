import React from 'react';
import Picture from './Picture';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const eduflex = useLoaderData()
    return (
        <div className='mb-32'>
            <h2 className='bg-sky-500 text-yellow-500'>Services page</h2>
            {/* <Picture></Picture> */}
            <div className='max-w-7xl mx-auto grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-16 mt-6'>
               {
                eduflex.map(picture=> <Picture picture={picture}></Picture>)
               }
           </div>

        </div>
    );
};

export default Services;