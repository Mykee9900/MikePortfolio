import React from "react";
import SideBar from "./SideBar";
import Logo from "../media/logo.png";

const Header = () => {
    return (
        <div className="flex justify-between items-center bg-gray-500">
            <SideBar className="float-left"/>
            <h3 className="text-4xl mb-5"><span className="border-b-2 border-black inline-block italic font-medium500Italic">Software Developer</span></h3>
            <div className="float-right flex items-center mr-6 mt-4">
                <img src={Logo} alt="Website logo" className="h-[100px]"/>
                <h3 className=" italic font-medium500Italic font-medium">Mykee Flores</h3>
            </div>
        </div>
    )
}

export default Header;