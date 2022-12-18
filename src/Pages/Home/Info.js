import React from 'react';
import InfoCard from './InfoCard';
import clock from './../../icons/clock.svg';
const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard img={clock}></InfoCard>
            <InfoCard img={clock}></InfoCard>
            <InfoCard img={clock}></InfoCard>
        </div>
    );
};

export default Info;