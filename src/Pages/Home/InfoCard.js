import React from 'react';

const InfoCard = ({ img }) => {
    return (
        <div class="card lg:card-side bg-gradient-to-r from-cyan-500 to-blue-500 shadow-xl">
            <figure>
                <img src={img} alt="Album" />
            </figure>

            <div class="card-body">
                <h2 class="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
               
            </div>
        </div>
    );
};

export default InfoCard;