import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div>
            <p className='text-primary text-3xl '>Available Appointments on {format(date, 'PP')} </p>;

            <div>

            </div>



        </div>
    );
};

export default AvailableAppointments;

//formate ke niye nibo ar date ke niye nibo props hishabe,,,,