import React from 'react';
import Bannar from './Bannar';

import Info from './Info';
import Services from './Services';
import CareUnit from './CareUnit';
import MakeAppointment from './MakeAppointment';


const Home = () => {
    return (
        <div className='px-14'>
            <Bannar></Bannar>
            <Info></Info>
            <Services></Services>
            <CareUnit></CareUnit>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;