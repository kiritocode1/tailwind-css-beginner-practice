import React from "react";


const Poster = (props) => { 

//todo : render when dark is dark and render when white is white 
    return (<>
        <div>
            <div className="h-80"><img src={props.src} alt="poster" className="w-full h-full rounded-xl"  /></div>
            <h3 className={`text-lg font-bold ${props.isDark?"text-white":"text-gray-800"}`}>
                {props.title}
            </h3>
            <p>{props.subtitle}</p>
        </div>
    </>);

};