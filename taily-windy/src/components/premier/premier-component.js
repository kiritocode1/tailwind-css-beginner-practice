import React,{useState,useEffect} from "react";
import Slider from "react-slick";
import Poster from "../poster/poster-component";
import {MdOutlineNavigateNext} from "react-icons/md"
import axios from "axios";





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

    const [PremierImages, setPremierImages] = useState([]);
        useEffect(() => {
        const requestPremierImages = async () => { 
            const getPremierImage = await axios.get("/movie/popular");
            console.log({ PremierImages });
            setPremierImages(getPremierImage.data.results);
        };
        requestPremierImages();
     },[]);
    // const PremierImages = [
    //     {
    //         src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122526-xavthzuprr-portrait.jpg",
    //         alt: "dune",
    //         title:"dune",
    //         subtitle: "English"
            
    //     }, {
    //         src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122532-rvwldkjbqk-portrait.jpg",
    //         alt: "venom",
    //         title: "Venom-2:let there be carnage",
    //         subtitle: "English"
            
    //     }, {
    //         src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00056556-zftjbeevvq-portrait.jpg",
    //         alt: "fast and furious 9",
    //         title: "family man 9",
    //         subtitle: "English",
            
    //     }, {
    //         src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00316141-munvacnnhm-portrait.jpg",
    //         alt: "the Sinister -Season 1",
    //         title: "the Sinister -Season 1",
    //         subtitle: "English"
    //     }, {
    //         src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00316141-munvacnnhm-portrait.jpg",
    //         alt: "the Sinister -Season 1",
    //         title: "the Sinister -Season 1",
    //         subtitle: "English"
    //     },{
    //         src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122532-rvwldkjbqk-portrait.jpg",
    //         alt: "venom",
    //         title: "Venom-2:let there be carnage",
    //         subtitle: "English"
            
    //     },
    // ]
    return (
        <>
            <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1 pt-2 px-4">
                <h3 className="text-white text-xl font-bold py-2"> Premiers</h3>
                <p className="text-white  text-sm  font-bold py-2">brand new releases epicly </p>
                </div>
            <h5 className="text-red-500 flex items-center font-semibold hover:animate-pulse">See all<MdOutlineNavigateNext className="w-6 h-6"/></h5>
            </div>
            <Slider {...settings}>
                {PremierImages.map((images)=>(<Poster {...images} isDark/>))}
            </Slider>
        </>
    );
}; 
export default Premier;
