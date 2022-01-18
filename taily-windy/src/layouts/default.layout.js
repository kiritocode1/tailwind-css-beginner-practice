import React from 'react';
import Navbar from '../components/navbar';
import HeroCarousel from '../components/hero.carousal/hero.carousal-component';
const DefaultLayout = (props) => {
    return (
        <>
            <Navbar />
            <HeroCarousel/>
            {props.children}
        </>
    );
};
export default DefaultLayout;