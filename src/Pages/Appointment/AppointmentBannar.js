import React, { useState } from 'react';
import bg from './../../assets/bg.png';
import chair from './../../assets/chair.png';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBannar = () => {
    const [date, setDate] = useState(new Date());
    return (

        <section className=''
            style={{
                background: `url(${bg})`,
                backgroundSize: 'cover'
            }}>
            <p className='text-blue-900 text-3xl '>You have Selected: {format(date, 'PP')}</p>;
            <div className="hero pt-1 ">

                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={chair} alt="Dentist" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='px-16'>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}

                        />

                    </div>

                </div>

            </div>
        </section>
    );
};

export default AppointmentBannar;