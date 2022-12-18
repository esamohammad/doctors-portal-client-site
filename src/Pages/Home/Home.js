import React from 'react';
import Bannar from './Bannar';

import Info from './Info';
import Services from './Services';
import CareUnit from './CareUnit';


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Info></Info>
            <Services></Services>
            <CareUnit></CareUnit>
        </div>
    );
};

export default Home;