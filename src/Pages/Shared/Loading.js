import React from 'react';
import loding from './../../icons/loding.gif'
const Loading = () => {
    return (
        <div className="flex items-center justify-center ">
            <div>
                <img src={loding} className="max-h-60  rounded-lg " alt='loading spinner' />

            </div>
        </div>
    );
};

export default Loading;

