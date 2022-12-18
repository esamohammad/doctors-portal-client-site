import React from 'react';
import InfoCard from './InfoCard';
import clock from './../../icons/clock.svg';
import marker from './../../icons/marker.svg';
import phone from './../../icons/phone.svg';





const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-20 py-0'>
            <InfoCard bgClass='bg-gradient-to-r from-cyan-500 to-blue-500' cardTitle='Opening Hours' img={clock}></InfoCard>
            <InfoCard bgClass='bg-accent' cardTitle='Visit Our Location' img={marker}></InfoCard>
            <InfoCard bgClass='bg-gradient-to-r from-cyan-500 to-blue-500' cardTitle='Contact Us Now' img={phone}></InfoCard>
        </div>
    );
};

export default Info;