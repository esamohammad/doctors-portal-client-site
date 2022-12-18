import React from 'react';

const InfoCard = ({ img }) => {
    return (
        <div class="card lg:card-side bg-gradient-to-r from-cyan-500 to-blue-500 shadow-xl">
            <figure className='m-2'>
                <img src={img} alt="Album" />
            </figure>

            <div class="card-body text-white">
                <h2 class="card-title">Opening Hours</h2>
                <p>Click the button to listen on Spotiwhy app.</p>

            </div>
        </div>
    );
};

export default InfoCard;