import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({ date }) => {
    return (
        <div>
            <p className='text-blue-900 text-3xl '>Available Appointments on {format(date, 'PP')} </p>;




            
        </div>
    );
};

export default AvailableAppointments;

//formate ke niye nibo ar date ke niye nibo props hishabe,,,,