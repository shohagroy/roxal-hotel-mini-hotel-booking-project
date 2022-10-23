import React from 'react';
import Carousel from './Carousel';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import HomeBookNow from './HomeBookNow';
import SpecialDescover from './SpecialDescover';
import SpecialOffer from './SpecialOffer';

const Main = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <SpecialOffer/>
            <HomeBookNow/>
            <Carousel/>
            <SpecialDescover/>
            <Footer/>
        </div>
    );
};

export default Main;