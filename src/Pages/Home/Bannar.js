import React from 'react';
import Chair from './../../assets/chair.png'
import bg from './../../assets/bg.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Bannar = () => {
    return (
        <section style={{
            background: `url (${bg})`
        }} className='flex'>
            <div class="hero min-h-screen py-14">
                <div class="hero-content flex-col lg:flex-row-reverse ">
                    <img src={Chair} class="max-h-80  rounded-lg shadow-2xl" />

                    <div class="text-left ">
                        <h1 class="text-6xl font-bold ">Your New Smile </h1>
                        <h1 class="text-5xl font-bold ">Starts Here</h1>
                        <p class="py-6 text-left">Provident cupiditate voluptatem et in.Quaerat fugiat ut assumenda excepturi exercitationem quasi.

                            In deleniti eaque aut repudiandae et a id nisi.</p>

                        <PrimaryButton>Get Appointment

                        </PrimaryButton>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bannar;

//bg cover dite parlam na abar try korbo..
