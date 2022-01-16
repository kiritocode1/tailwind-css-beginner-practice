import React from "react";
import {BiChevronRight,BiSearch} from "react-icons/bi";

const NavSm = () => {
    return (<>
        
        <div className="bg-[#100c1f] flex justify-between items-center w-full">
            <div className=" flex-wrap text-slate-50 ">
                <h3 className="font-bold text-[#a09595]">IT ALL STARTS HERE</h3>
                <span className="text-xs flex text-[#463e3e] justify-left items-center">bhubhuneshwar<BiChevronRight className="mt-[4px]"/></span>
            </div>
            <div className="text-white flex justify-center items-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white mx-2 shadow-inner text-xs  p-[5px] rounded">click me!</button>            
            <div className="w-4 h-4"><BiSearch className="w-full h-full mr-2 "/></div>
            </div>
        </div>    
    </>);
};
const NavMd = () => { };
const NavLg = () => { };

const Navbar = () => {

    return (
        <>
        <nav>
        <div className="md:hidden"><NavSm/></div>
                <div className="hidden md:flex lg:hidden">{/*tablet screen*/}</div>
                <div className="hidden lg:flex">{/*large screen*/ }</div>
        </nav>
        </>
    );
};

export default Navbar;