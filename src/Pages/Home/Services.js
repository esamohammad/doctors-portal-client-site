import React from 'react';
import Service from './Service';
import cavity from './../../assets/cavity.png'

const Services = () => {
    return (
        <div>
            <h3 className='text-3xl font-bold uppercase text-primary py-16'>Our Services</h3>
            <h2 className='text-6xl font-bold py-0'>Service We Provides</h2>
            <Service img={cavity}></Service>
        </div>
    );
};

export default Services;