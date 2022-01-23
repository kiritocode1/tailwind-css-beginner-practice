import React from "react";
import MovieNavbar from "../Movie.navbar-component";
import { BiShareAlt} from "react-icons/bi";
import { BsFillPlayFill ,BsFillSuitHeartFill} from "react-icons/bs";
// import {AiFillHeart} from "react-icons/ai"
import { MdOutlineNavigateNext } from "react-icons/md";
import ActorSlider from "../hero.carousal/movie.carousel/actor-carousel-component";

const launchRazorPay = () => {
    let options = {
        key: "rzp_test_8fDzj010ap6uwv",
        amount: 10000,
        currency: "INR",
        name: "BMS CLONE",
        description: "movie purchase",
        image: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1490416068/snddxyieomgp4s7sj7bp.png",
        handler: () => {
            alert("payement done");
        },
        theme: { color: "#c4242d" }
    };
    let rzp = new window.Razorpay(options);
    rzp.open();
};









const Movie = () => { 
    return (<>
        <MovieNavbar />
        <div className="relative w-full h-[40rem] font-sans">
            <div className="w-full h-full bg-gradient-to-r from-neutral-800 via-transparent to-neutral-800 text-slate-50 z-20 absolute flex   justify-right gap-40">
                <div className="w-[1010px]  h-full bg-transparent flex  gap-2 pt-8 px-10">
                    <div className="bg-black rounded-3xl h-[33rem] w-[24rem] flex flex-col items-center text-xs justify-center font-bold text-slate-50 gap-[2px] mt-2">
                        <div className=" w-full h-[33rem] rounded-t-3xl relative flex items-center justify-center overflow-hidden">
                            <img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pushpa--the-rise-et00129538-08-12-2021-01-21-46.jpg" alt="this is the movie " className="w-full h-full rounded-t-3xl" />
                        <div className=" absolute flex bg-black opacity-80 z-80 items-center justify-center rounded-full w-[85px] h-[20px] cursor-pointer text-md font-bold"> <BsFillPlayFill className="h-4 w-6"/><spam className=" text-slate-50  ">Trailers(6)</spam></div>
                        </div>
                        in cinemas</div>
                    
                    
                    <div className="bg-transparent rounded-lg h-[25rem] w-[45rem] flex flex-col align-top px-4 gap-2 py-6 mt-6">
                        <h3 className="text-[45px] font-bold text-slate-50">Pushpa-i hate tears </h3>
                        <div className="flex gap-2 items-center">
                            <span className="text-2xl  flex  items-center gap-2 font-bold"><BsFillSuitHeartFill className="text-rose-500"/>87%</span>
                            <span className="flex items-center justify-right text-md font-bold">439.1k ratings<MdOutlineNavigateNext className="text-sm opacity-60"/></span>
                        </div>
                        <div className="my-4 w-[30rem] h-[5.9rem] bg-[#333333] rounded-lg cursor-pointer flex items-center justify-between p-4">
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-xl">Add your ratings & review</h3>
                                <h3 className="text-neutral-400 font-semibold">Your ratings matter</h3>
                            </div>
                            <button className="bg-white w-[6.9rem] text-stone-700 h-[3rem] rounded-xl text-lg font-bold">Rate now</button>
                        </div>
                    
                        <div className="flex gap-2">
                            <button className="text-black bg-white hover:underline font-semibold w-10 px-2  h-6 rounded-sm ">2D</button>
                            <button className="text-black bg-white flex font-semibold  rounded-sm px-2  gap-1">
                                <h4 className="hover:underline">Telgu, </h4>
                                <h4 className="hover:underline">kannada,</h4>
                                <h4 className="hover:underline">Tamil,</h4>
                                <h4 className="hover:underline">Malyalam, </h4>
                                <h4 className="hover:underline">Hindi</h4>
                            </button>
                        </div>
                    
                        <div className="flex gap-1 font-semibold mt-2">
                            <h4>2h 59m</h4>
                            <h4>•</h4>
                            <h4 className="hover:underline">Action, </h4>
                            <h4 className="hover:underline">Thriller</h4>
                            <h4>•</h4>
                            <h4>UA</h4>
                            <h4>•</h4>
                            <h4>17 Dec,2021</h4>
                        </div>
                    
                    <div className="mt-6"><button  onClick={launchRazorPay} className="bg-[#F84464]  w-[13.9rem]  h-[3rem]   rounded-lg font-semibold cursor-pointer text-lg ">Book tickets</button></div>
                    
                    
                    </div>

                
                </div>
                
                
                
                <div className="flex w-100 h-20 relative items-center mt-6"><div className="absolute w-[115px] h-[3rem] flex text-md text-white justify-center items-center  gap-2 bg-black opacity-50 rounded-md font-semibold"><BiShareAlt className="w-8 h-6  z-60 stroke-0 hover:stroke-2" />Share</div></div>
        </div>
            
            <img src="https://images.news18.com/ibnlive/uploads/2021/01/1611818353_pushpa-1.jpg" alt="jnkjfkj" className="w-full h-full z-10 absolute "/>
        </div>
        <ActorSlider/>
    </>);
};


export default Movie;