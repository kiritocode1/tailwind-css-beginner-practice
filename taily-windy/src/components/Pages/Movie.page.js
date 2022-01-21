import React from "react";
import MovieNavbar from "../Movie.navbar-component";
import { BiShareAlt} from "react-icons/bi";

const Movie = () => { 

    return (<>
        <MovieNavbar />
        <div className="relative w-full h-96">
            <div className="w-full h-full bg-gradient-to-r from-green-900 text-green-500 z-20 absolute flex justify-evenly">
                <div className="w-40 h-10">
                        dbjhdfbjhb
                </div>
                <div className="flex w-100 h-20 relative items-center"><div className="absolute w-40 h-10 flex text-sm text-white justify-center items-center "><BiShareAlt  className="w-10 h-8" />button here </div></div>
        </div>
        <img src="https://images.news18.com/ibnlive/uploads/2021/01/1611818353_pushpa-1.jpg" alt="jnkjfkj" className="w-full h-full z-10 absolute "/>
        </div>
    </>);
};


export default Movie;