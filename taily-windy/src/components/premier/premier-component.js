import React from "react";
import Slider from "react-slick";
import Poster from "../poster/poster-component";







const Premier = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,

    };
    const PremierImages = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122526-xavthzuprr-portrait.jpg",
            alt: "dune",
            title:"dune",
            subtitle: "English",
            isDark:false
            
        }, {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122532-rvwldkjbqk-portrait.jpg",
            alt: "venom",
            title: "Venom-2:let there be carnage",
            subtitle: "English",
            isDark:false
            
        }, {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00056556-zftjbeevvq-portrait.jpg",
            alt: "fast and furious 9",
            title: "family man 9",
            subtitle: "English",
            isDark:false
            
        }, {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00316141-munvacnnhm-portrait.jpg",
            alt: "the Sinister -Season 1",
            title: "the Sinister -Season 1",
            subtitle: "English",
            isDark:false
        }, {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00316141-munvacnnhm-portrait.jpg",
            alt: "the Sinister -Season 1",
            title: "the Sinister -Season 1",
            subtitle: "English",
            isDark:false
        },{
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122532-rvwldkjbqk-portrait.jpg",
            alt: "venom",
            title: "Venom-2:let there be carnage",
            subtitle: "English",
            isDark:false
            
        },
    ]
    return (
        <>
            <Slider {...settings}>
                {PremierImages.map((images)=>(<Poster {...images}/>))}
            </Slider>
        </>
    );
}; 
export default Premier;