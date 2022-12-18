import React from 'react';
import InfoCard from './InfoCard';
import clock from './../../icons/clock.svg';
import marker from './../../icons/marker.svg';
import phone from './../../icons/phone.svg';





const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle='Opening Hours' img={clock}></InfoCard>
            <InfoCard cardTitle='Visit Our Location' img={marker}></InfoCard>
            <InfoCard cardTitle='Contact Us Now' img={phone}></InfoCard>
        </div>
    );
};

export default Info;