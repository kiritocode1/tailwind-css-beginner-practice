import React from "react";
import EntertainmentSlider from "../entertainment-component/entertainment-component";
import Navbar from "../navbar";
import HeroCarousel from "../hero.carousal/hero.carousal-component";

const HomePage = () => { 

    return (<>
        
        <div className="container">
            <Navbar />
            <HeroCarousel />
            <h1 className="bold pt-20 flex items-center justify-center">The Best Of Entertainment</h1>
            <EntertainmentSlider />
        </div>
    </>);
};

export default HomePage;