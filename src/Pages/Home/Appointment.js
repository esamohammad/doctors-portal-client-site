import React from 'react';
import Doctor from './../../assets/doctor.png'

const Appointment = () => {
    return (
        <div class="hero min-h-min   bg-slate-400">
            <div class="hero-content flex-col lg:flex-row">
                <img src={Doctor} class="w-96 " />
                <div className='text-left px-10'>
                    <h3 class="text-3xl font-bold uppercase text-primary my-16">Apointment</h3>
                    <h1 class="text-5xl font-bold">Make an Appointment Today</h1>
                    <p class="my-8"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi sit, rem facere fuga saepe inventore deserunt enim repudiandae earum est sequi qui nisi. </p>

                    <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 my-2">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Appointment;