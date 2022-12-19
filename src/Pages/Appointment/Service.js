import React from 'react';

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div className="card lg: file:max-w-lg bg-base-100 shadow-2xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;