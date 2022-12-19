import React from 'react';
import bg from './../../assets/bg.png';
import chair from './../../assets/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBannar = () => {
    return (
        <section className=''
            style={{
                background: `url(${bg})`,
                backgroundSize: 'cover'

            }}
        >
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={chair} alt="Dentist" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='px-16'>
                        <DayPicker />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBannar;