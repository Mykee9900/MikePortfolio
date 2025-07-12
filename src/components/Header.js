import React from "react";
import SideBar from "./SideBar";

const Header = () => {
    return (
        <div className="fixed top-0 w-full flex justify-between items-center bg-gray-500 z-50">
            <SideBar className="float-left"/>
            <h3 className="hidden md:block text-4xl mb-5"><span className="border-b-2 border-black inline-block italic font-medium500Italic">Mykee Flores</span></h3>
            <img src="/media/logo.png" alt="Website logo" className="h-[100px]"/>
        </div>
    )
}

export default Header;