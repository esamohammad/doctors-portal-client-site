import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div>
            <p className='text-primary text-3xl '>Available Appointments on {format(date, 'PP')} </p>;

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {/* Parent */}
            {/* //This is all service ar container tai atar upor css hobe, */}
            {treatment && <BookingModal treatment={treatment}></BookingModal>}
            {/* jodi treatment peye thake tahole modal open hobe */}

        </div>
    );
};

export default AvailableAppointments;

//formate ke niye nibo ar date ke niye nibo props hishabe,,,,