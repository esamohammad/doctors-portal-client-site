import React from 'react';
import quote from './../../icons/quote.svg'


const Testimonials = () => {
    return (
        <section className='my-28 '>
            <div className='flex justify-between'>
                <div className='text-left'>
                    <h4 className="text-xl text-primary font-bold"> Testimonials</h4>
                    <h2 className='text-3xl font-bold my-4'> What Our Patients Say</h2>
                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-48' alt='' />
                </div>
            </div>

            <div>


            </div>
        </section>
    );
};

export default Testimonials;