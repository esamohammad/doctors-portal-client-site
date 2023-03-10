import React, { useState } from 'react';
import CopyRight from '../Home/CopyRight';
import Footer from '../Shared/Footer';
import AppointmentBannar from './AppointmentBannar';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className='px-10'>
            <AppointmentBannar date={date} setDate={setDate}></AppointmentBannar>
            <AvailableAppointments date={date}></AvailableAppointments>
            <Footer></Footer>
            <CopyRight></CopyRight>
        </div>
    );
};

export default Appointment;

//date ar set date state lift korte hoiche