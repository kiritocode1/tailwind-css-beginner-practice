import React from "react";
import EntertainmentSlider from "../entertainment-component/entertainment-component";
import Navbar from "../navbar";
import HeroCarousel from "../hero.carousal/hero.carousal-component";
import Premier from "../premier/premier-component";
// import axios from "axios";








// 2b3148


const HomePage = () => { 
    // const [PopularMovies, setPopularMovies] = useState([]);
    // useEffect(() => { 
    //     const requestPopularMovies = async () => {
    //         const getPopularMovies = await axios.get("/movie/popular");
    //         console.log({PopularMovies})
    //         setPopularMovies(getPopularMovies.data.results);
    //         };
    //     requestPopularMovies();
    // },[]);
    return (<>
        <div className="flex flex-col gap-9 ">
            <Navbar />
            <HeroCarousel />
        <div className="container px-24 ">
            <h1 className="font-bold text-2xl pt-20 flex items-center my-2 mx-auto  text-gray-900">The Best Of Entertainment</h1>
            <EntertainmentSlider />
        </div>
        <div  className="container px-20 bg-[#2b3148] p-6 w-full">
            <div >
                <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="premier-rupay i"  className="w-full h-full px-4  "/>
            </div>
            <div>
                <Premier isDark="true"/>
            </div>
        </div>
        </div>
        </>
        );
};

export default HomePage;