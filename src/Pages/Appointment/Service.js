import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg: file:max-w-lg bg-base-100 shadow-2xl">
            <div className="card-body ">

                <div><h2 className="card-title justify-center py-4 text-primary">{name}</h2>

                    <p>{slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-600'>No Slot Available</span>}</p>

                    <p className='text-xl'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p></div>

                <div className="card-actions justify-center">
                    <button 
                    disabled={slots.length === 0} onClick={setTreatment}
                    className="btn btn-primary text-white ">Book Appointment</button>
                </div>

            </div>
        </div>
    );
};

export default Service;