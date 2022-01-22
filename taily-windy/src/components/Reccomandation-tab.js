import React from "react";
const Reccommendations = () => { 



    return (
        <>
            <div className="w-full bg-[#222539] text-neutral-300 h-12 flex gap-10 px-8 font-sans" >
                <div className="bg-transparent w-full flex justify-evenly">
                    <h3 className="h-full w-20 flex items-center hover:text-white transition-all text-lg font-normal cursor-pointer ">Movies</h3>
                    <h3 className="h-full w-20 flex items-center hover:text-white transition-all text-lg font-normal cursor-pointer ">Stream<h6 className="text-[8px] text-red-600 pb-4 font-bold ">NEW</h6></h3>
                    <h3 className="h-full w-20 flex items-center hover:text-white transition-all text-lg font-normal cursor-pointer ">Events</h3>
                    <h3 className="h-full w-20 flex items-center hover:text-white transition-all text-lg font-normal cursor-pointer ">Plays</h3>
                    <h3 className="h-full w-20 flex items-center hover:text-white transition-all text-lg font-normal cursor-pointer ">Sports</h3>
                    <h3 className="h-full w-20 flex items-center hover:text-white transition-all text-lg font-normal cursor-pointer ">Activities</h3>
                    <h3 className="h-full w-20 flex items-center hover:text-white transition-all text-lg font-normal cursor-pointer ">Buzz</h3>

                </div>
                <div className="bg-transparent w-full  flex text-white justify-evenly">
                    <h3 className="h-full w-20 flex items-center hover:text-white transition-all text-lg font-normal cursor-pointer ">ListYourShow<h6 className="text-[8px] text-red-600 pb-4 font-bold ">NEW</h6></h3>
                    <h3 className="h-full w-20 flex items-center hover:text-white transition-all text-lg font-normal cursor-pointer px-2 ">Corporates</h3>
                    <h3 className="h-full w-20 flex items-center hover:text-white transition-all text-lg font-normal cursor-pointer ">Offers</h3>
                    <h3 className="h-full w-20 flex items-center hover:text-white transition-all text-lg font-normal cursor-pointer ">Gift Cards</h3>
                </div>

        </div>
        
        </>
    );
};

export default Reccommendations;







