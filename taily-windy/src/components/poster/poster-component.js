import React from "react";


const Poster = (props) => { 

//todo : render when dark is dark and render when white is white 
    return (<>
        <div>
            <div className="h-100 px-4 pt-2 "><img src={props.src} alt="poster" className="w-full h-full rounded-lg "  /></div>
            <h3 className={`text-lg font-bold ${props.isDark?"text-white":"text-gray-800"} px-4`}>
                {props.title}
            </h3>
            <p className={`text-sm font-bold ${props.isDark?"text-white":"text-gray-700"} justify-center px-4`}>{props.subtitle}</p>
        </div>
    </>);
};


export default Poster;