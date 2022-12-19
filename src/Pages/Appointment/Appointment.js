import React from 'react';
import CopyRight from '../Home/CopyRight';
import Footer from '../Shared/Footer';
import AppointmentBannar from './AppointmentBannar';

const Appointment = () => {
    return (
        <div>
            <AppointmentBannar></AppointmentBannar>
            <Footer></Footer>
            <CopyRight></CopyRight>
        </div>
    );
};

export default Appointment;