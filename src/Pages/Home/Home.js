import React from 'react';
import Bannar from './Bannar';

import Info from './Info';
import Services from './Services';
import CareUnit from './CareUnit';
import MakeAppointment from './MakeAppointment';
import Testimonial from './Testimonial';
import HomeContact from './HomeContact';
import Footer from './Footer';
import CopyRight from './CopyRight';

const Home = () => {
    return (
        <div className='px-14'>
            <Bannar></Bannar>
            <Info></Info>
            <Services></Services>
            <CareUnit></CareUnit>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <HomeContact></HomeContact>
            <Footer></Footer>
            <CopyRight></CopyRight>
        </div>
    );
};

export default Home;