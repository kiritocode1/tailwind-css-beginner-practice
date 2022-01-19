import React from "react";
import EntertainmentSlider from "../entertainment-component/entertainment-component";
import Navbar from "../navbar";
import HeroCarousel from "../hero.carousal/hero.carousal-component";
const HomePage = () => { 

    return (<>
        
        <div className="container">
            <Navbar />
            <HeroCarousel />
            <h1 className="font-bold text-2xl pt-20 flex items-center px-2 text-sky-900">The Best Of Entertainment</h1>
            <EntertainmentSlider />
        </div>
    </>);
};

export default HomePage;