import React from "react";
import Slider from "react-slick";
import { NextArrow,PrevArrow } from "../hero.carousal/arrows-component";
const EntertainmentCard = (props) => {
    return (
        <>
            <div className="w-full h-30 px-2 py-6">
                <img src={props.src} className="w-full h-full rounded-xl" alt="entertainment Card"/>
            </div>
        </>
    );
};

const EntertainmentSlider = () => { 
    const EntertainmentImages=["data:image/jpeg;base64,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","https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTM1KyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png","https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png","https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png","https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-ODArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png","https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png","https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png","https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/esports-collection-202011150107.png","https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/self-improvement-collection-202007220710.png","https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/cooking-collection-202007222211.png"]
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
        arrows: true,
        autoplay: false,
        InitialSlide: 0,
        nextarrow: <NextArrow />,
    prevarrow:<PrevArrow/>
    };
    return (
        <>
            <Slider {...settings}>
                {EntertainmentImages.map((image)=>(<EntertainmentCard src={image}/>))}
            </Slider>
            </>
            );
};

export default EntertainmentSlider;