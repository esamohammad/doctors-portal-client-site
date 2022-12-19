import React from 'react';

const InfoCard = ({ img, cardTitle, bgClass }) => {
    return (
        <div className={`card text-white  md:card-side shadow-xl ${bgClass}`}>
            <figure className='pl-2'>
                <img src={img} alt="Album" />
            </figure>

            <div className="card-body text-white py-10 ">
                <h3 className="card-title"> {cardTitle} </h3>
                <p>Click the button to </p>

            </div>
        </div>
    );
};

export default InfoCard;