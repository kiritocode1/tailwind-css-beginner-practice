import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import  Slider from "react-slick";
//!components
import {NextArrow,PrevArrow} from "./arrows-component";
const HeroCarousel = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
        prevArrow: <PrevArrow />,
        nextArrow:<NextArrow />
    };
    const images = ["https://images.unsplash.com/photo-1594897347120-83ff4736d725?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1551910971-67b5f1cd546d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1642272083850-1fefe0d5c1f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1632215637008-8cf32e2df7e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1633507597987-158ac0ec7554?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1642358666536-6bcc92facfe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"];
    return (
        <>
            <Slider {...settings}>
                {images.map((image) => (
                    <div className="h-96 w-20 pt-6">
                        <img src={image} alt="mage" className="rounded-sm w-full h-full px-4 object-cover overflow-hidden"/>
                    </div>
                ))}
            </Slider>
        </>
    );
};

export default HeroCarousel;





// SimpleSlider() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };
//   return (
//     <Slider {...settings}>
//       <div>
//         <h3>1</h3>
//       </div>
//       <div>
//         <h3>2</h3>
//       </div>
//       <div>
//         <h3>3</h3>
//       </div>
//       <div>
//         <h3>4</h3>
//       </div>
//       <div>
//         <h3>5</h3>
//       </div>
//       <div>
//         <h3>6</h3>
//       </div>
//     </Slider>
//   );
// }