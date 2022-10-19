import React from 'react';
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
        </div>
    );
};

export default Main;