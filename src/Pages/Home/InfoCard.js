import React from 'react';

const InfoCard = ({ img, cardTitle,bgClass }) => {
    return (
        <div className={`card text-white px-1 md:card-side shadow-xl ${bgClass}`}>
            <figure className='pl-2'>
                <img src={img} alt="Album" />
            </figure>

            <div class="card-body text-white">
                <h3 class="card-title"> {cardTitle} </h3>
                <p>Click the button to </p>

            </div>
        </div>
    );
};

export default InfoCard;