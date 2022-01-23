import React from "react";


const Poster = (props) => { 

//todo : render when dark is dark and render when white is white 
    return (<>
        <div className="flex flex-col justify-center items-center h-96">
            <div className="h-full w-full   px-4 pt-2 "><img src={`https://image.tmdb.org/t/p/original${props.backdrop_path}`} alt="poster" className="w-full h-full rounded-lg object-cover overflow-hidden "  /></div>
            <h3 className={`text-lg font-bold ${props.isDark?"text-white":"text-gray-800"} px-4`}>
                {props.original_title}
            </h3>
            <p className={`text-sm font-bold ${props.isDark?"text-white":"text-gray-700"} justify-center px-4`}>{props.original_language}</p>
        </div>
    </>);
};


export default Poster;