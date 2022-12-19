import React from 'react';
import appointment from './../../assets/appointment.png'

const HomeContact = () => {
    return (

        <section className='mt-32'
            style={{
                background: `url(${appointment})`
            }}
        >

            <div className="hero my-24 ">
                <div className="hero-content flex-col ">
                    <div className=" text-center">
                        <h1 className="text-3xl font-bold text-primary">Contact Us</h1>
                        <h1 className="text-4xl font-bold text-white ">Stay connected with Us</h1>
                    </div>

                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-200">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">

                                </label>
                            </div>

                            <div className=" form-control mt-0">
                                <label className="label">
                                    <span className="label-text">Your Message</span>
                                </label>
                                <input type="text" placeholder="Please Type Your Message..." className="input input-bordered h-24" />
                                <label className="label">

                                </label>
                            </div>


                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </section>

    );
};
export default HomeContact;


