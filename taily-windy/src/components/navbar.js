import React from "react";
import {BiChevronRight} from "react-icons/bi";

const NavSm = () => {
    return (<>
        
        <div className="bg-[#1c0842]  flex justify-between antialiased w-max">
            <div className=" flex-wrap text-slate-50 ">
                <h3 className="bold">IT ALL STARTS HERE</h3>
                <span className="text-xs flex align-center justify-left">bhubhuneshwar<BiChevronRight/></span>
            </div>
            <div className="text-slate-50">
            <button className="bg-[#ff0281] mx-8 h-6 mt-2 mb-2 rounded-md drop-shadow-2xl text-sm bold ">click me!</button>            
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