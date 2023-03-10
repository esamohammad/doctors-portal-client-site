import React from 'react';
import doctor from './../../assets/doctor.png';
import appointment from './../../assets/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section className='mt-32'
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className="hero mt-56">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt="" className="-mb-4 -mt-44  hidden md:block lg:w-1/2 rounded-lg " />
                    <div className='text-left'>
                        <h4 className='text-2xl mb-4 text-primary font-bold'>Appointment</h4>
                        <h1 className=" text-white text-4xl font-bold">Make an appointment Today</h1>
                        <p className="text-white py-6 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;