import React from "react";
import {BiChevronRight} from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import bookmyshow from "./bookmyshow-removebg-preview.png";
import { FaSortDown, FaBars } from "react-icons/fa";
import Reccommendations from "./Reccomandation-tab";


const NavSm = () => {
    return (<>
        
        <div className="bg-[#333545] flex justify-between items-center w-full h-[67px] hover:rounded-b-sm border-b-4">
            <div className=" flex-wrap text-slate-50 ">
                <h3 className="text-[#ffffff] px-4 text-2xl font-semibold  hover:underline decoration-fuchsia-700 hover:animate-pulse">It All Starts Here!</h3>
                <span className="text-xs flex text-[#a7a7a7]  px-4 justify-left items-center hover:underline decoration-indigo-500 hover:animate-pulse ">bhubhuneshwar<BiChevronRight className="mt-[4px]"/></span>
            </div>
            <div className="text-white flex justify-center items-center w-40">
            <button className="bg-[#F84464] hover:bg-fuchsia-900 text-white mx-4 shadow-inner text-xs w-[62px] h-[32px] p-[5px]  font-semibold rounded-lg border-collapse">Use App</button>            
            <div className="w-6 h-6"><IoSearchOutline className="w-full h-full mr-10 "/></div>
            </div>
        </div>    
    </>);
};
const NavMd = () => {
    return (
        <>
            <div className="w-full bg-[#333545] flex text-slate-50 items-center justify-start p-6">
                <div className="flex bg-white rounded-md w-full gap-3">
                <IoSearchOutline className="bg-white text-slate-500 h-8 w-8  rounded-lg ml-1 pl-3 "/>
                    <input placeholder="Search for Movies , shows , events , plays🎭 , Sports ⚽ and much more " type="search" className="w-full italic focus:border-blue-500 rounded-sm text-black h-[35px] pl-5 pb-[3px]" required/>
                </div>
            </div>
        </>
    )};
const NavLg = () => {
    return (
        <>
        <div className="bg-[#333545] flex w-full text-slate-50 items-center justify-between py-2 px-20 h-20" >
            <div className="bg-inherit flex items-center">
                    <img src={bookmyshow} alt="not successful" className="bg-inherit w-40 h-20 mr-2 cursor-grab" />
                    <span className="flex  bg-white rounded-sm">
                    <IoSearchOutline className="bg-white text-slate-500 h-10 w-10 py-2 rounded-full ml-1 " />
                    <input placeholder="Search for Movies , shows , events , plays🎭 , Sports ⚽ and much more " type="search" className="h-10 w-[600px] px-6 rounded-sm"/>
                    </span>
                </div>
                <div className="bg-invisible flex gap-2 items-center">
                    <h6 className="text-md bold bg-inherit flex gap-1 text-slate-100 hover:animate-pulse  cursor-pointer hover:underline hover:decoration-sky-500">Mumbai<FaSortDown/></h6>
                    <button className="bg-[#F84464]  w-20  h-8  text-sm rounded-lg font-bold cursor-pointer ">Sign in</button>
                    <FaBars className="w-10 h-6 cursor-pointer"/>
                </div>
            </div>
        </>
    );
};


const Navbar = () => {
    return (
        <>
        <nav>
        <div className="md:hidden"><NavSm/></div>
                <div className="hidden md:flex lg:hidden"><NavMd/></div>
                <div className="hidden lg:flex lg:flex-col"><NavLg/><Reccommendations/></div>
        </nav>
        </>
    );
};

export default Navbar;