import React from 'react';
import Carousel from './Carousel';
import Header from './Header';
import Hero from './Hero';
import HomeBookNow from './HomeBookNow';
import SpecialOffer from './SpecialOffer';

const Main = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <SpecialOffer/>
            <HomeBookNow/>
            <Carousel/>
        </div>
    );
};

export default Main;