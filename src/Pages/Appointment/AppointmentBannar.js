import React from 'react';
import bg from './../../assets/bg.png'
import chair from './../../assets/chair.png'

const AppointmentBannar = () => {
    return (
        <section className=''
            style={{
                background: `url(${bg})`,
                backgroundSize: 'cover'

            }}
        >
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair}  alt ="Dentist" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBannar;