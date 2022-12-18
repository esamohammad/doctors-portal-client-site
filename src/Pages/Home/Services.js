import React from 'react';
import Service from './Service';
import cavity from './../../assets/cavity.png';
import fluoride from './../../assets/fluoride.png';
import whitening from './../../assets/whitening.png';

const Services = () => {
    return (
        <div >
            <h3 className='text-3xl font-bold uppercase text-primary py-16'>Our Services</h3>
            <h2 className='text-6xl font-bold py-0'>Service We Provides</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-20 py-20'>
                <Service img={cavity}></Service>
                <Service img={fluoride}></Service>
                <Service img={whitening}></Service>
            </div>
        </div>
    );
};

export default Services;