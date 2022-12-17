import React from 'react';
import Chair from './../../assets/chair.png'

const Bannar = () => {
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse px-14">
                <img src={Chair} class="max-w-sm rounded-lg shadow-2xl" />

                <div class="text-left">
                    <h1 class="text-5xl font-bold ">Your New Smile </h1>
                    <h2 class="text-4xl font-bold ">Starts Here</h2>
                    <p class="py-6 text-left">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    <button class=" btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500">Get Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Bannar;