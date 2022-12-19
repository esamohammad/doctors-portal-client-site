import React from 'react';

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div className="card lg: file:max-w-lg bg-base-100 shadow-2xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>

                <p>{slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-600'>No Slot Available</span>}</p>

                <p className='text-xl'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>

                <div className="card-actions justify-end">
                    <button disabled={slots.length === 0} className="btn btn-primary">Buy Now</button>
                </div>

            </div>
        </div>
    );
};

export default Service;