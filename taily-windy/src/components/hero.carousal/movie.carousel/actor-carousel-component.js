import React from "react";
import Slider from "react-slick";



const ActorSlider = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    arrows: true,
        autoplay: true,
    };
    // const images = ["https://in.bmscdn.com/iedb/artist/images/website/poster/large/allu-arjun-125-03-10-2016-01-55-06.jpg",
    //     "https://in.bmscdn.com/iedb/artist/images/website/poster/large/rashmika-mandanna-1076783-28-12-2016-12-20-39.jpg",
    //     "https://in.bmscdn.com/iedb/artist/images/website/poster/large/fahadh-faasil-37756-24-03-2017-17-27-27.jpg",
    //     "https://in.bmscdn.com/iedb/artist/images/website/poster/large/anasuya-bharadwaj-1065308-24-03-2017-16-24-30.jpg",
    //     "https://in.bmscdn.com/iedb/artist/images/website/poster/large/dayanand-reddy-2011871-17-02-2021-02-08-20.jpg",
    //     "https://in.bmscdn.com/iedb/artist/images/website/poster/large/rajsekhar-aningi-1266833-07-05-2019-10-51-39.jpg",
    //     "https://in.bmscdn.com/iedb/artist/images/website/poster/large/anasuya-bharadwaj-1065308-24-03-2017-16-24-30.jpg"];
    
    const imagesWithActors = [
        {
            src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/allu-arjun-125-03-10-2016-01-55-06.jpg", Name: "Allu arjun",
            character: "as Pushpa raj"
        },
        {
            src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/rashmika-mandanna-1076783-28-12-2016-12-20-39.jpg",
            Name: "Rashmika mandhana",
            character: "actor"
        },
        {
            src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/fahadh-faasil-37756-24-03-2017-17-27-27.jpg",
            Name: "Fahad Fassil",
            character: "actor"
        },
        {
            src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/anasuya-bharadwaj-1065308-24-03-2017-16-24-30.jpg",
            Name: "Anasuya Bharadwaj",
            character: "actor"
        },
        {
            src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/dayanand-reddy-2011871-17-02-2021-02-08-20.jpg",
            Name: "Actor",
            character:"actor"
        },
        {
            src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/rajsekhar-aningi-1266833-07-05-2019-10-51-39.jpg",
            Name: "Actor",
            character:"actor"
        },
        {
            src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/anasuya-bharadwaj-1065308-24-03-2017-16-24-30.jpg",
            Name: "Actor",
            character:"actor"
        }
    ];
    
    
    
    return (
        <>
            <hr className="pt-2 text-red-600"/>
        <div className="text-3xl font-semibold py-2 px-1"> Cast</div>
            <Slider {...settings} >
                {/* {images.map((image) => (
                    <div className="w-full h-96">
                <img src={image} alt="actors/actresses" className="rounded-full w-40 overflow-hidden" />
                </div>
            ))} */}
                {imagesWithActors.map((image) =>
                (
                    <div className=" bg-transparent h-60   flex  flex-col items-center justify-center">
                        <div className="w-full bg-transparent flex justify-center">
                            <img src={image.src} alt="actor/actresser/crew" className="rounded-full w-40 h-40 overflow-hidden cursor-pointer " />
                        </div>
                        <div className=" text-2xl font-semibold pt-2 px-2 bg-transparent  w-full h-10 text-center ">{image.Name}</div>
                        <div className="text-sm font-semibold text-gray-500 px-10 bg-transparent  text-center">{image.character}</div>
                    </div>
                ))}
            </Slider>
        
        
        
        </>
    );
};


export default ActorSlider;