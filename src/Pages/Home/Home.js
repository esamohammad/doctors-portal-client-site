import React from 'react';
import Bannar from './Bannar';

import Info from './Info';
import Services from './Services';
import CareUnit from './CareUnit';
import Appointment from './Appointment';


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Info></Info>
            <Services></Services>
            <CareUnit></CareUnit>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;