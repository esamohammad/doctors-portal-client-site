import React from 'react';
import quote from './../../icons/quote.svg'


const Testimonials = () => {
    return (
        <section>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold"> Testimonials</h4>
                    <h2 className='text-3xl font-bold'> What Our Patients Say</h2>
                </div>
                <div>
                    <img src={quote} alt='' />
                </div>
            </div>

            <div></div>
        </section>
    );
};

export default Testimonials;