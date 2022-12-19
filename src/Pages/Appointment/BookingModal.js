import React from 'react';
import { format } from 'date-fns';
const BookingModal = ({ date, treatment }) => {
    const { name, slots } = treatment;
    return (
        <div>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className=" btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-primary">Booking for : {name}</h3>

                    <form className='grid grid-cols-1 gap-4 justify-items-center mt-4'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />

                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                        <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;