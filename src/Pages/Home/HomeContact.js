import React from 'react';
import appointment from './../../assets/appointment.png'

const HomeContact = () => {
    return (

        <section className='mt-32'
            style={{
                background: `url(${appointment})`
            }}
        >

            <div class="hero my-24 ">
                <div class="hero-content flex-col ">
                    <div class=" text-center">
                        <h1 class="text-3xl font-bold text-primary">Contact Us</h1>
                        <h1 class="text-4xl font-bold text-white ">Stay connected with Us</h1>
                    </div>

                    <div class="card flex-shrink-0 w-full shadow-2xl bg-base-200">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>



                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                                <label class="label">

                                </label>
                            </div>

                            <div class=" form-control mt-0">
                                <label class="label">
                                    <span class="label-text">Your Message</span>
                                </label>
                                <input type="text" placeholder="Please Type Your Message..." class="input input-bordered h-24" />
                                <label class="label">

                                </label>
                            </div>


                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </section>

    );
};
export default HomeContact;


