import React from 'react';

const Service = ({ img, name }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amard Lorem ipsum dolor sit amet. </p>

            </div>
        </div>
    );
};

export default Service;

//Our services part is done Alhamdulillah.