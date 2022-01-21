import React from "react";
import MovieNavbar from "../Movie.navbar-component";
import { BiShareAlt} from "react-icons/bi";
import { BsFillPlayFill ,BsFillSuitHeartFill} from "react-icons/bs";
// import {AiFillHeart} from "react-icons/ai"
import { MdOutlineNavigateNext } from "react-icons/md";
const Movie = () => { 
    return (<>
        <MovieNavbar />
        <div className="relative w-full h-96 ">
            <div className="w-full h-full bg-gradient-to-r from-gray-900 via-transparent to-gray-900 text-slate-50 z-20 absolute flex justify-evenly gap-20">
                <div className="w-[800px] h-full bg-transparent flex  gap-2 p-4">
                    <div className="bg-black rounded-lg h-80 w-50 flex flex-col items-center text-xs  text-slate-50">
                        <div className=" w-full h-[290px] rounded-t-lg relative flex items-center justify-center">
                            <img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pushpa--the-rise-et00129538-08-12-2021-01-21-46.jpg" alt="this is the movie " className="w-full h-full rounded-t-lg" />
                        <div className=" absolute flex bg-black opacity-90 z-80 items-center justify-center rounded-full w-[70px] "> <BsFillPlayFill/><spam className=" text-slate-50 text-md">trailer</spam></div>
                        </div>
                        in cinemas</div>
                    
                    
                    <div className="bg-transparent rounded-lg h-80 w-96 flex flex-col align-top px-2 ">
                        <h3 className="text-[30px] font-semibold text-slate-50">Pushpa-i hate tears </h3>
                        <div className="flex gap-2 items-center">
                            <span className="text-xl  flex  items-center gap-2 font-bold"><BsFillSuitHeartFill className="text-rose-500"/>87%</span>
                            <span className="flex items-center justify-right text-sm">439.1k ratings<MdOutlineNavigateNext className="text-xs opacity-60"/></span>
                        </div>
                    </div>
                
                
                </div>
                
                
                
                <div className="flex w-100 h-20 relative items-center"><div className="absolute w-[95px] h-10 flex text-sm text-white justify-center items-center  gap-2 bg-black opacity-60 rounded-sm font-bold"><BiShareAlt className="w-8 h-6  z-60" />Share</div></div>
        </div>
        
            
            <img src="https://images.news18.com/ibnlive/uploads/2021/01/1611818353_pushpa-1.jpg" alt="jnkjfkj" className="w-full h-full z-10 absolute "/>
        </div>
    </>);
};


export default Movie;