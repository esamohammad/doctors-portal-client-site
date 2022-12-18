import React from 'react';
import Treatment from './../../assets/treatment.png'

const CareUnit = () => {
    return (
        <div class="hero min-h-screen px-14 my-8">
            <div class="hero-content flex-col lg:flex-row">
                <img src={Treatment} class="w-96 rounded-lg shadow-2xl" />
                <div className='text-left px-10'>
                    <h1 class="text-5xl font-bold">Exceptionnal Dental Care,</h1>
                    <h1 class="text-5xl font-bold">On Your Terms</h1>
                    <p class="py-6"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi sit, rem facere fuga saepe inventore deserunt enim repudiandae earum est sequi qui nisi. Maiores maxime earum nam ratione amet qui nesciunt nemo, debitis ex vel quidem accusamus incidunt magni dolore? Optio, ex ut. Culpa ullam consequuntur blanditiis quas deleniti nisi ex unde minima beatae, et incidunt aspernatur fuga architecto modi labore ipsum optio aliquam laudantium iure ab dolorem? Ducimus, provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti quis consequatur excepturi delectus sunt rem eos soluta voluptatibus laborum. Iste doloremque aut quibusdam impedit eius quidem nostrum iure eveniet, culpa facere quo error inventore.Iste doloremque aut quibusdam impedit eius quidem nostrum iure eveniet, culpa facere quo error inventore. Repellat quo deleniti error dignissimos.Iste doloremque aut quibusdam impedit eius quidem nostrum iure eveniet, culpa facere quo error inventore. Repellat quo deleniti error dignissimos. Repellat quo deleniti error dignissimos.                </p>
                    <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default CareUnit;